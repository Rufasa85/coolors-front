import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PalletCard from '../../components/PalletCard';
import API from '../../utils/API';
import "./style.css"

export default function Profile(props) {
    const params = useParams();
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
      fetchUser()
    },[])
    const fetchUser = ()=>{
      API.getUserByName(params.username).then(data=>{
        setUser(data)
        setIsLoading(false)
       }).catch(err=>{
        console.log(err);
       })
    }
  return (
    <>
    {isLoading?<h1>loading</h1>:(
        <div className="Profile">
            <h1>{user.username}'s profile!</h1>
            {user.Pallets.map(pal=><PalletCard name={pal.name} author={user.username} colors={pal.harmonies} id={pal.id} key={pal.id} canEdit={props.userId===pal.UserId} token={props.token} fetchData={fetchUser}/>)}
        </div>
    )}
    </>
  )
}
