import React,{useState,useEffect} from 'react'
import PalletCard from '../../components/PalletCard';
import API from '../../utils/API';
import "./style.css"

export default function Home() {
  const [pallets, setPallets] = useState([]);
  useEffect(()=>{
    API.getAllPallets().then(data=>{
      setPallets(data);
    }).catch(err=>{
      console.log(err);
    })
  },[])
  return (
    <main className="Home">
        <h1>Welcome to our community pallet generator!</h1>
        <h3>Here are some pallets:</h3>
        {pallets.map(pal=><PalletCard key={pal.id} id={pal.id} name={pal.name} author={pal.User.username} colors={pal.harmonies}/>)}
    </main>
  )
}
