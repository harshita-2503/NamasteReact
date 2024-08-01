import React from "react";
import User from "./User";
import UserClass from "./UserClass";


// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is my Namaste React web series</h2>
//             {/* <User name={"Harshita Mahajan (function)"}/> */}
//             <UserClass name={"Harshita Mahajan (class)"} location={"Agra"}/>
//         </div>
//     )
// }
// export default About;


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")

    }

    componentDidMount(){
        console.log("Parent Component did Mount")

        //Api calls
    }

    render(){
        console.log("Parent Render")
        return (
                   <div>
                       <h1>About class Component</h1>
                        <h2>This is my Namaste React web series</h2>
                       <UserClass name={"First"} location={"Agra"}/>
                       <UserClass name={"Second"} location={"Dehradun"}/>
                       <UserClass name={"Third"} location={"Pune"}/>


                   </div>
                 )
             
    }

}


export default About