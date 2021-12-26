import React from 'react'
import Card from './Components/Card'
import img1 from './Components/images/user.png'
import styled from 'styled-components'

const Mycontainer=styled.div`
display: flex;
flex-wrap: wrap;
width:70vw;

justify-content: space-between;
align-items: center;
gap:20px;

`

function handle (name){

  alert(name);
}

function App() {
  return (
    <Mycontainer>

   <Card fullName="Soumia Bouhaouche" profession="none" bio="peace by piece" handleAlert={handle}>
     <img src={img1}/>
   </Card>
   <Card fullName="Ahmed Bouhaouche" profession="none" bio="peace by piece" handleAlert={handle}>
   <img src={img1}/>
   </Card>
   <Card  handleAlert={handle}>
   <img src={img1}/>
   </Card>
   <Card fullName="Mohammed Bouhaouche" profession="none" bio="peace by piece" handleAlert={handle}>
   <img src={img1}/>
   </Card>

   </Mycontainer>
  )
}

export default App
