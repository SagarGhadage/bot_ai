import React, { useContext } from 'react'

export default function SideMenu({handleClose}) {

  return (
    <div onClick={()=>{handleClose(0)}}>SideMenu</div>
  )
}
