import React from 'react'
import "../Styles/Style.css"
const Props2 = (props) => {
  return (
    <div>
      This component is used by props.
     
       {props.naam.map((el)=>{
        return(
            <div>
                <h2 >
               My name is  {el.name}
                </h2>
                <p>
                My Id is {el.id}
                </p>
            </div>
           
           
           
        )
       })
       
       }
      
      {/* <h2>
        My name is {props.naam}
      </h2> */}

    </div>
  )
}

export default Props2
