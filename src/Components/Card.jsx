import React from 'react'
import styled from 'styled-components'


const Mycard= styled.div`
display: flex;
flex-direction: column;
width:360px;
height:280px;
padding:20px 0;
justify-content:center;
align-items:center;
text-align:center;
background-color: lightblue; 
border-radius: 19px;


`



function Card(props) {
    
   const handleEvent = (e) => {

       props.handleAlert(props.fullName)
   }

    return (
        <Mycard>
             {props.children}

             <div>

             <p>{props.fullName}</p>
             <p>{props.profession}</p>
             <p>{props.bio}</p>
             <button onClick={handleEvent}>Click here </button>

             </div>
             

         </Mycard>
    )
}

Card.defaultProps={
    fullName :'John Doe',
    profession:'Web Dev',
    bio:'Hello World!'
}

export default Card
