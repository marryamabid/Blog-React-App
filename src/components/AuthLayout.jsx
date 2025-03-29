import React ,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// this function IS protected
export default function AuthLayout({children,  
    authentication=true
}) {
  const [loader, setLoader] = useState("")
  const navigate = useNavigate()
  const authStatus = useSelector((state)=> state.auth.status)
  useEffect(()=>{
    // {true && false !== true =>(true)}=> true as 
    // you are not authenticated because of authestatus is false
    if (authentication && authStatus !== authentication) {
        navigate("/Login")
    // {!true= false && true !== true =>(false)}=> suppose your 
    // authsataus is supposed to be true as you are  authenticated because of authestatus is true   
    } else if(!authentication && authStatus !== authentication ) {
        navigate("/")
    }
    setLoader(false)
  },[authStatus,authentication,navigate])  
  return loader ? <h1>Loading...</h1> : <>{children}</>
}