import React from 'react'
import "./style.css"
export default function ColorBlock(props) {
    const styles = {
        background:props.color,
        color:props.isDark?"white":"black"
    }
  return (
    <div className="ColorBlock" style={styles}>
        <h4>{props.color}</h4>
    </div>
  )
}
