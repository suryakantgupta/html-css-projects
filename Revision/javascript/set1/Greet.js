// import React from 'react'

{/* <Greet name="Ryan" heroName="Warlords">

</Greet>
const Greet = ({name, heroName}) => {
    console.log()
    return (
        <div>
             <h2>
                Hello {name} {heroName}
             </h2>
              {props.children}
        </div>
    ) 
} */}

// export default Greet 



// const Greet = ({name, heroName}) => {
//     console.log()
//     return (
//         <div>
//              <h2>
//                 Hello {name} {heroName}
//              </h2>
              
//         </div>
//     ) 
// }


const Greet = props => {
    const {name, heroName} = props
    return (
     <div>
        <h1>Hello {name} {heroName}</h1>
     </div>
    )
}
