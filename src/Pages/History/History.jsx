import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { useOutletContext } from 'react-router-dom'
import { Stack, Typography, useMediaQuery } from '@mui/material'
import { ThemeContext } from '../../Themes/Contexts'
export default function History() {
  const screenSize = useMediaQuery('(max-width:768px)')
  const context=useOutletContext()
  const themeContext =useContext(ThemeContext)
  console.log(context,themeContext)
  return (
    <Stack sx={{height:'100vh', background:(screenSize && themeContext.mode=='light' ?'linear-gradient(180deg, #F9FAFA 59%, #EDE4FF 100%)':'')}} >
      {screenSize&&<Navbar handleSidebar={context.handleSidebar}/>}
      <Typography component={'h1'} variant='p'
      sx={{textAlign:"center",mt:'10%'}}
      >
      Conversation History</Typography>    
    </Stack>
  )
}
