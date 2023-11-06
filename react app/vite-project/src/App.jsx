import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const arr={};
  const [name, setName] = useState("");
  const [friendList, setFriendList] = useState(["Faizan", "Jhanzaib"]);
  

  return (
    <>
    <div clas="container" >
    <div class= "subContainer ">
      
        <input required type="text" value={name} onChange={(event)=>{
          setName(event.target.value)
        }}></input>
        <button onClick={()=>{
          setFriendList([...friendList,name]);
          setName("");
        }}>Enter</button>
        <div>{friendList.map((listItem)=>{
          return<div style={{color:"white"}}>{listItem}</div>
        })}</div>
      
    </div>
    </div>
      
    </>
  )
}

export default App

