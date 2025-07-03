import React, { useEffect, useState } from 'react'

function Draft  ()  {
    const [text,setText] = useState(localStorage.getItem("draftMessage")||"");
    const [cleared,setCleared] = useState(false);
    useEffect(() => {
        // const getDraftMessage = localStorage.getItem("draftMessage");
        // if(text ==="") setCleared(true);
        // // else setCleared(false);
        // if(getDraftMessage !=="" && getDraftMessage === text)return ;
        // localStorage.setItem("draftMessage",text);
        const id = setTimeout(() => {
            if(text !==""){
                console.log("LocalStorage change");
                localStorage.setItem("draftMessage",text);
            }else{
                setCleared(true);
            }
        },500);
    },[text]);
  return (
    <main>
        <h1>Save To Draft</h1>
        <input type = "text"
        value={text}
        placeholder="Drafted Text"
        onChange={(e) =>setText(e.target.value)}/>

   
    </main>
  )
}

export default Draft
//Local storage : which persits the data while ending the sessiom
//session storage: erase the data , when we are ending the session
//IndexDB : local document based dataBase(local storage / local data base)asynchronous
//Cookies : To store tokens and user behaviours.. It stores in key : value pair(lpu.com here lpu is domain and student.lpu.in here student is subdomain)
//to use cookies Safari uses MaxAge and chrome uses Expires
