import { onValue } from "firebase/database";
import React, { useEffect } from "react";
import "./conversation.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
const Message=({message})=>{
    const {currentUser}=useContext(AuthContext); 
    const ID1=message.senederid;
    const ID2=currentUser.uid;
    const ele=document.querySelector("#message");
    if(ID1===ID2){
        return(
            <span id="message" style={{left:"300px"}}>{message.mes}</span>
        )
    }else{
        return(
            <span id="message">{message.mes}</span>
        )
    }

   




}
export default Message;