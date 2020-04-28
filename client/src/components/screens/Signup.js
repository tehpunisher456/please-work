import React, {useState} from "react"
import {Link} from 'react-router-dom'

const Signup = ()=>{
    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const PostData = () =>{
        fetch("http://localhost:3000/signup", {
            method: "post",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,
                userName,
                password,
                email,
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }


    return(
        <h1>Signup!</h1>


        // onclick={()=>PostData()}
    )
}
export default Signup 