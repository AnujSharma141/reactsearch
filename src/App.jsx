import React, {useState} from 'react'
import Fuse from 'fuse.js'

export default function Search(props) {
    //states
    const [key, setKey] = useState({val: null, handle: null, list: props.data, res: []})


    //methods
    const fuse = new Fuse(key.list ,{includeScore: false})

    const changeHandler = e => {
        setKey({...key, handle: e.target.value, res: fuse.search(e.target.value)})
    }

    const submit = e =>{
        e.preventDefault()
        if(props.submit) props.submit(e)
    }

    const select = e =>{
        props.select? props.select(e) 
        :setKey({...key, select:e, val: e.item, res: []})
        
        setKey({...key, select:e, val:'' , res: []})
    }

    return (
        <form onSubmit={submit}>
            <input className="searchbar" onChange={changeHandler} onFocus={()=>setKey({...key, val:null})} value={key.val} type="text" placeholder="search ..." name="" id=""/>
            <div className="searchlist">
            {key.res.slice(0, props.maximum? props.maximum: 5).map(mod =>{
                return(<div className="searchitem" onClick={()=>select(mod)}>{mod.item}</div>)
            })}
            </div>
        </form>
    )
}