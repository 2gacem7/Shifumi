import "./Input.css";
import {useState} from 'react';

export function Input ()  {

    const [name, setName] = useState("")
  
    return (
        <div className="inputNaming">
            <div className="inputText">
                Entre ton gametag !
            </div>
           <input></input>
        </div>
    )
}