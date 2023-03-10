import React from 'react'
import styles from './Dashboardelement.module.css'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'

function Dashboardelement({icon,title}) {
  const navigate = useNavigate();
  const Logout = ()=>{
    if(title === "Logout"){
      auth.signOut();
      navigate('/login')
    }
  }
  return (
    <div className={styles.menubox_container} onClick={()=>Logout()} >
        {icon}
        <p className={styles.title} >{title}</p>
    </div>
  )
}

export default Dashboardelement