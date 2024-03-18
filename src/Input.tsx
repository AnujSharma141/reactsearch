import React, { useState } from 'react'
import Fuse from 'fuse.js'
import "./Input.css"
import { PropTypes, ResultType } from '../types'

export default function Search({data, placeholder, maximum, select, threshold}: PropTypes){

    const [result, setResult] = useState<ResultType[]>([])
    const [key, setKey] = useState('')

    const fuse = new Fuse(data,{includeScore: true, threshold: threshold ?? 0.2})

    const keyHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setKey(event.target.value)
        setResult(fuse.search(event.target.value))    
    }

    return(<>
        <form>
            <input className='search_bar' autoComplete='off' onChange={keyHandler} value={key} type="text" placeholder={placeholder || "search ..."} name="search"/>
            <div className='search_list'>
            {result.slice(0, maximum || 5).map((mod: ResultType, i) =>{
                return(<div key={i} className='search_item' onClick={()=>select? select(mod): ''}>{mod.item}</div>)
            })}
            </div>
        </form>
    </>)
}