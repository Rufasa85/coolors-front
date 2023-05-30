import React from 'react'
import { Link } from 'react-router-dom'
import ColorBlock from '../ColorBlock'
import "./style.css"
export default function PalletCard(props) {
  return (
    <Link to={`/pallet/${props.id}`}>
    <div className='PalletCard'>
        <h3>{props.name} by {props.author}</h3>
        <div style={{display:"flex"}}>
        {props.colors.map((har,i)=><ColorBlock key={i} color={har.color} isDark={har.isDark}/>)}
        </div>
    </div>
    </Link>
  )
}
