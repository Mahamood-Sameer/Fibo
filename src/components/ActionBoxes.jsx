import React from 'react'
import style from './ActionBoxes.module.css'

function ActionBoxes({icon,title}) {
  return (
    <div className={style.action_box} >
        {icon}
        <p>{title}</p>
    </div>
  )
}

export default ActionBoxes