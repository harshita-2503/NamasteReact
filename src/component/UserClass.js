import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        this.state={
            count: 0,
            count2 : 2,
        }
        console.log("constructor")
    }
    
    render(){
        const {name,location}=this.props;
        const {count,count2}=this.state;

        console.log("render")

        return (
        <div className="user-card">
           {/* <h2>Name: {this.props.name}</h2>
           <h3>Location : {this.props.location}</h3> */}
           {/* <h1>Count : {this.state.count}</h1> */}
           <h1>Count : {count}</h1>
           <button onClick={()=>{
            this.setState({
                count: this.state.count+1,
                // count2: this.state.count2+1
            })
           }}>Count increase</button> 
           <h1>Count : {count2}</h1> 

           <button onClick={()=>{
            this.setState({
                count2: this.state.count2+1
            })
           }}>Count2 increase</button> 
           

           
           <h2>Name: {name}</h2>
           <h3>Location : {location}</h3>
           <h4>Contact : @harshita</h4>
       
        </div>
        );
    }
}

export default UserClass;