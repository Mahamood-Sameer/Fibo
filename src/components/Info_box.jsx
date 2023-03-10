import React from 'react'
import style from './Info_box.module.css'

function Info_box({icon,title,amount}) {
  return (
    <div className={style.info_box} >
        {icon}
        <div  className={style.info_amount_box}>
            <h2>{amount}</h2>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Info_box