import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div style={{border: '2px solid white',height:'450px',width:'300px',backgroundColor:'DarkSlateGray', borderRadius: '10px'}}>
            <h4 style={{ color: 'gold' }}>ABES STUDENT CARD</h4>
            <img src={props.imgSrc} alt="picture" style={{ width: '50%', height: 'auto',borderRadius: '7px' }} />
            <h5 style={{ color: 'white' }}align="center" >{props.name}</h5>
            <h5 style={{ color: 'white' }} align ="center">{props.class}</h5>
            <h5 style={{ color: 'white' }} align="center">{props.rollNo}</h5>
        </div>        
    </div>
  )
}

export default Card