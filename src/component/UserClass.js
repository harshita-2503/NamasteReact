import React from "react";

class UserClass extends React.Component{

    // constructor(props){
    //     super(props);
    //     console.log(props);
    //     this.state={
    //         count: 0,
    //         count2 : 2,
    //     }
    //     console.log(this.props.name+"Child constructor")
    // }

    // componentDidMount(){
    //      console.log(this.props.name+"Child Component did Mount")
    // }

    
//     render(){
//         const {name,location}=this.props;
//         // const {count,count2}=this.state;

//         // console.log(this.props.name+"Child Render")

//         return (
//         <div className="user-card">
//            {/* <h2>Name: {this.props.name}</h2>
//            <h3>Location : {this.props.location}</h3> */}
//            {/* <h1>Count : {this.state.count}</h1> */}
//            {/* <h1>Count : {count}</h1>
//            <button onClick={()=>{
//             this.setState({
//                 count: this.state.count+1,
//                 // count2: this.state.count2+1
//             })
//            }}>Count increase</button>  */}
//            {/* <h1>Count : {count2}</h1> 

//            <button onClick={()=>{
//             this.setState({
//                 count2: this.state.count2+1
//             })
//            }}>Count2 increase</button>  */}
           

           
//            <h2>Name: {name}</h2>
//            <h3>Location : {location}</h3>
//            <h4>Contact : @harshita</h4>
       
//         </div>
//         );
//     }

//     constructor(props){
//         super(props);
//         this.state={
//             userInfo: {
//                 name : "Dummy",
//                 location: "Default"
//             }
//         }
//         console.log(this.props.name+"Child constructor")
//     }

//     async componentDidMount(){
//       const data=await fetch("https://api.github.com/    users/harshita-2503");
    
//      const json=await data.json();
//      console.log(json);
    
//      this.setState({
//       userInfo: json,
//      })
//      console.log(this.props.name+"Child Component did Mount")

//     }

//     componentDidUpdate(){
//         console.log("Component did Update")
//     }

//     componentWillUnmount(){
//         console.log("Component will unmount")
//     }


//     render(){
//         console.log(this.props.name+"Child Render")

//         const {login,avatar_url}=this.state.userInfo;
//         return (
//             <div className="user-card">
//                 {/* <h2>NAME:{this.state.userInfo.name}</h2> */}
//                 <img src={avatar_url}/>
//                 <h2>NAME:{login}</h2>


//             </div>
//         )
//     }
//  }



// export default UserClass;
// constructor(props){
//     super(props);
//     this.state={
//                 count: 0,
//                 count2 : 2,
//             }
//     console.log(this.props.name+"Child constructor")
// }

// async componentDidMount(){
 
//  console.log(this.props.name+"Child Component did Mount")

// }

// // componentDidUpdate(prevProps,prevState){
// //     if(this.state.count != prevState.count ||this.state.count2 != prevState.count2 ){

// //     }
// //     console.log("Component did Update")
// // }

// componentDidUpdate(prevProps,prevState){
//     if(this.state.count != prevState.count){

//     }
//     if(this.state.count2 != prevState.count2){

//     }
//     console.log("Component did Update")
// }

// componentWillUnmount(){
//     console.log("Component will unmount")
// }


// render(){
//     console.log(this.props.name+"Child Render")

    
//     return (
//         <div className="user-card">
//             {/* <h2>NAME:{this.state.userInfo.name}</h2> */}
//             {/* <img src={avatar_url}/> */}
//             {/* <h2>NAME:{login}</h2> */}


//         </div>
//     )
// }
// }



// export default UserClass;


constructor(props){
    super(props);
    this.state={
                count: 0,
                count2 : 2,
            }
    console.log(this.props.name+"Child constructor")
}

componentDidMount(){

    this.timer=setInterval(()=>{
        console.log("Namaste React op")
    },1000);
 
 console.log(this.props.name+"Child Component did Mount")

}

componentDidUpdate(prevProps,prevState){
    if(this.state.count != prevState.count){

    }
    if(this.state.count2 != prevState.count2){

    }
    console.log("Component did Update")
}

componentWillUnmount(){
    clearInterval(this.timer)
    console.log("Component will unmount")
}


render(){
    console.log(this.props.name+"Child Render")

    
    return (
        <div className="user-card">
            {/* <h2>NAME:{this.state.userInfo.name}</h2> */}
            {/* <img src={avatar_url}/> */}
            {/* <h2>NAME:{login}</h2> */}


        </div>
    )
}
}



export default UserClass;