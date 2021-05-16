import React, { Component } from 'react'
import Fuse from 'fuse.js'


export default class search extends Component {
    constructor(props){
        super(props)
    }

    state = {val: null, handle: null, list: this.props.data, res: []}

    fuse = new Fuse(this.state.list ,{includeScore: false})

    changeHandler = e => {
        this.setState({...this.state, handle: e.target.value, res: this.fuse.search(e.target.value)})
    }
    
    submit = e =>{
        e.preventDefault()
        if(this.props.submit) this.props.submit(e)
    }

    select = e =>{
        this.props.select? this.props.select(e) 
        :this.setState({...this.state, select:e, val: e.item, res: []})
        this.setState({...this.state, select:e, val:'' , res: []})
    }

    render() {
        return (
            <>  
            <form onSubmit={this.submit}>
                <input className="searchbar" onChange={this.changeHandler} onFocus={()=>this.setState({...this.state, val:null})} value={this.state.val} type="text" placeholder="search ..." name="" id=""/>
                <div className="searchlist">
                {this.state.res.slice(0, this.props.maximum? this.props.maximum: 5).map(mod =>{
                    return(<div className="searchitem" onClick={()=>this.select(mod)}>{mod.item}</div>)
                })}
                </div>
            </form>
            </>
        )
    }
}