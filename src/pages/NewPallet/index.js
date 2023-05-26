import React,{useState,useEffect} from 'react'
import "./style.css"
import { colord, extend } from "colord";
import harmoniesPlugin from "colord/plugins/harmonies";
import ColorBlock from '../../components/ColorBlock';
import API from '../../utils/API';

extend([harmoniesPlugin]);

export default function NewPallet(props) {
    const [color, setColor] = useState("#c0ffee");
    const [name, setName] = useState("")
    const [palletColors, setPalletColors] = useState([])

    const generatePallet= ()=>{
        const colorz = colord(color).harmonies("tetradic").map(cl=>{
            return {
                color:cl.toHex(),
                isDark:cl.isDark()
            }
        })
        setPalletColors(colorz);
    }
    const savePallet = e=>{
        e.preventDefault();
        const newPallet = {
            color:color,
            name:name
        }
        API.createPallet(newPallet,props.token).then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log("oh noes!")
            console.log(err)
        })
    }


  return (
    <>
    {props.token?(
    <main className = "NewPallet">
        <h1>New Pallet Page</h1>
        <form onSubmit={savePallet}>
            <input type="color" value={color} onChange={(e)=>setColor(e.target.value)}/>
            <button type="button" onClick={generatePallet}>generate pallet</button>
            <input placeholder='name' name="name"value={name} onChange={(e)=>setName(e.target.value)}/>
            <button>Add pallet</button>
        </form>
        <div className="pallet">
        {palletColors.map((obj,i)=><ColorBlock key={i} color={obj.color} isDark={obj.isDark}/>)}
        </div>
    </main>):<h1>Login to create pallets!</h1>}
    </>
  )
}
