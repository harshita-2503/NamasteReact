                         // Episode 1



// const heading=document.createElement("h1");

// heading.innerHTML="Hello World from Javascript";

// const root=document.getElementById("root");

// root.appendChild(heading);


// const heading=React.createElement("h1",{},"Namaste React");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// const heading=React.createElement("h1",{id: "heading",xyz:"abc"},"Namaste React");

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


/**
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am h1 tag</h1>
 *     </div>
 * 
 * </div>
 */


// const parent=React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},React.createElement("h1",{},"I am h1 tag")));


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// console.log(parent);


/**
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am h1 tag</h1>
 *         <h2>I am h2 tag</h2>
 *     </div>
 * 
 * </div>
 */

// const parent=React.createElement("div",{id: "parent"},React.createElement("div",{id: "child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]));


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// console.log(parent);


/**
 * <div id="parent">
 *     <div id="child">
 *         <h1>I am h1 tag</h1>
 *         <h2>I am h2 tag</h2>
 *     </div>
 *     <div id="child2">
 *         <h1>I am h1 tag</h1>
 *         <h2>I am h2 tag</h2>
 *     </div>
 * 
 * </div>
 */



// const parent=React.createElement("div",{id: "parent"},[React.createElement("div",{id: "child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),React.createElement("div",{id: "child2"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])]);


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// console.log(parent);


                    // Episode 2

//  import React from "react";
//  import ReactDOM from "react-dom/client"

                    
// const parent=React.createElement("div",{id: "parent"},[React.createElement("div",{id: "child"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")]),React.createElement("div",{id: "child2"},[React.createElement("h1",{},"I am h1 tag"),React.createElement("h2",{},"I am h2 tag")])]);


// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// console.log(parent);

                     //Episode 3



//  import React from "react";
//  import ReactDOM from "react-dom/client"
// import { jsx } from "react/jsx-runtime";

//  const heading=React.createElement("h1",{id: "heading"},"Namaste React");

//  console.log(heading);


 // JSX

//  const jsxHeading=<h1 id="heading">Namaste React Heading using JSX</h1>

//  console.log(jsxHeading);

//  const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)


// const jsxHeading=(<h1 className="heading" tabIndex="1"
// >Namaste React Heading using JSX</h1>)

// console.log(jsxHeading);

// const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)




//React Element

// const heading=(
//     <h1 className="head" tabIndex="2">Namaste</h1>
// );



// const fn=()=>true;
    //same
// const fn2=()=>{
//     return true;
// }


// const root=ReactDOM.createRoot(document.getElementById("root"));

//  root.render(heading)

//React components
// React Functional Components

// const HeadingComponent=()=>{
//     return <h1>Namaste React Function</h1>
// }

// //same

// const HeadingComponent2=()=>( 
// <div id="container">
// <h1>Namaste React Function</h1>
// </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

//  root.render(<HeadingComponent/>)
//  root.render(<HeadingComponent2/>)



// const Title=()=>{
//     return <h1>Namaste React</h1>
// }

// const HeadingComponent2=()=>( 
// <div id="container">
//     <Title/>
//     <h1>Namaste React Function</h1>
// </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

//  root.render(<HeadingComponent2/>)


 //how to write js,react element inside jsx component

//  const title=(
//      <h1 className="head" tabIndex="2">Namaste React</h1>
//    )


// const num=1000;
// const HeadingComponent2=()=>( 
// <div id="container">
//     {num}
//     <h1>{num}</h1>
//     <h2>{100*200}</h2>
//     {console.log("hdvfhgdvwc")}
//     {title}
//     <h1>Namaste React Function</h1>
// </div>
// );

// const root=ReactDOM.createRoot(document.getElementById("root"));

//  root.render(<HeadingComponent2/>)

 //how to write react element inside react element


//  const ele=<span>React Element</span>
//  const title2=(
    
//     <h1 className="head" tabIndex="2">
//         {ele}
//         Namaste React
//     </h1>
//   )
//   const num=1000;

//   const HeadingComponent2=()=>( 
//     <div id="container">
//         {num}
//         <h1>{num}</h1>
//         <h2>{100*200}</h2>
//         {console.log("hdvfhgdvwc")}
//         {title2}
//         <h1>Namaste React Function</h1>
//     </div>
//     );

// const ele=<span>React Element</span>

// const num=1000;

// const HeadingComponent2=()=>( 
//   <div id="container">
//       {/* {num}
//       <h1>{num}</h1>
//       <h2>{100*200}</h2>
//       {console.log("hdvfhgdvwc")} */}
//       {title2}
//       <h1>Namaste React Function</h1>
//   </div>
//   );
    
//   const HeadingComponent=()=>( 
//     <div id="container">
//         <h1>Hello</h1>
//     </div>
//     );

//     const title2=(
    
//         <h1 className="head" tabIndex="2">
//             {ele}
//             Namaste React
//             <HeadingComponent/>
//         </h1>
//       )
    
//     const root=ReactDOM.createRoot(document.getElementById("root"));
    
 //      root.render(title2)




// const title=(
    
//     <h1 className="head" tabIndex="2">
//         Namaste React using Jsx
//     </h1>
//   )
    
//   const data=1000;

//   const HeadingComponent=()=>( 
//     <div id="container">
//         {data}
//         <h1>Hello</h1>
//     </div>
//     );

  
    
 // const root=ReactDOM.createRoot(document.getElementById("root"));
    
//  root.render(<HeadingComponent/>)



             //Episode 4

/**
 * 
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Search
 * -RestaurantContainer
 *   -RestaurantCard
 *        -Img
 *        -Name of the res,Star rating, cuisine, delivery time etc
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */











import React from "react";
import ReactDOM from "react-dom/client"
import {Header} from "./component/Header";
import Body from "./component/Body";

// const Header=()=>{
//     return(
//         <div className="header">
//             <div className="logo-container">
//                 <img className="logo" src="https://static1.bigstockphoto.com/4/5/2/large2/254760460.jpg"/>
//             </div>
//             <div className="nav-items">
//                 <ul>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Contact Us</li>
//                     <li>Cart</li>

//                 </ul>

//             </div>
//         </div>
//     )
// }


// const styleCard={
//     backgroundColor: "#f0f0f0",
// }

// const RestaurantCard=()=>{
//     return (
//         <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/pafx0c2gjgvdjydx0nsx"/>
//             <h3>Meghana Foods</h3>
//             <h4>North Indian,Asian</h4>
//             <h4>4.3 stars</h4>
//             <h4>38 mins</h4>

//         </div>
//     )
// }

// const Body=()=>{
//     return (
//         <div className="body">
//             <div className="search">
//                 Search
//             </div>
//             <div className="res-container">
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>
//                <RestaurantCard/>

//             </div>

//         </div>
//     )
// }


// const RestaurantCard=(props)=>{
//     const {resName,cuisine}=props;
//     return (
//         <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/pafx0c2gjgvdjydx0nsx"/>
//             <h3>{resName}</h3>
//             <h4>{cuisine}</h4>
//             <h4>4.3 stars</h4>
//             <h4>38 mins</h4>

//         </div>
//     )
// }


// const RestaurantCard=(props)=>{
//     const {resData}=props;
//     return (
//         <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/pafx0c2gjgvdjydx0nsx"/>
//             <h3>{resData.data.name}</h3>
//             <h4>{resData.data.cuisines.join(", ")}</h4>
//             <h4>{resData.data.avgRating} stars</h4>
//             <h4>Rs{resData.data.costForTwo/100} for two</h4>
//             <h4>{resData.data.deliveryTime} minutes</h4>


//         </div>
//     )
// }

// const RestaurantCard=(props)=>{
//     const {resData}=props;
//     const {name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.data;
//     return (
//         <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
//             <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/pafx0c2gjgvdjydx0nsx"/>
//             <h3>{name}</h3>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{avgRating} stars</h4>
//             <h4>Rs{costForTwo/100} for two</h4>
//             <h4>{
//             deliveryTime} minutes</h4>


//         </div>
//     )
// }

//const Body=()=>{
    //     return (
    //         <div className="body">
    //             <div className="search">
    //                 Search
    //             </div>
    //             <div className="res-container">
    //                <RestaurantCard resName="Meghana Foods" cuisine="Biryani,North Indian,Asian"/>
    //                <RestaurantCard resName="KFC" cuisine="Burger,Fast Food"/>
    
    //             </div>
    
    //         </div>
    //     )
    // }


// const resObj={
//     type: "restaurant",
//     data: {
//         type: "F",
//         name: "KFC",
//         costForTwo: 40000,
//         cuisines: ["Burgers","Biryani","AmericanSnacks","FastFood"],
//         avgRating: 3.5,
//         deliveryTime: 36,
//     }
// }

// const Body=()=>{
//         return (
//             <div className="body">
//                 <div className="search">
//                     Search
//                 </div>
//                 <div className="res-container">
//                    <RestaurantCard resData={resObj}/>
//                    <RestaurantCard resData={resObj}/>
//                    <RestaurantCard resData={resObj}/>
//                    <RestaurantCard resData={resObj}/>
//                    <RestaurantCard resData={resObj}/>
    
//                 </div>
    
//             </div>
//         )
//     }

//     const reslist=[
//     {
//         type: "restaurant",
//         data: {
//             type: "F",
//             name: "KFC",
//             costForTwo: 40000,
//             cuisines: ["Burgers","Biryani","AmericanSnacks","FastFood"],
//             avgRating: 3.5,
//             deliveryTime: 36,
//             id: 89,
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             type: "F",
//             name: "Bhoji",
//             costForTwo: 90000,
//             cuisines: ["Burgers","Biryani","AmericanSnacks","FastFood"],
//             avgRating: 3.5,
//             deliveryTime: 36,
//             id: 90,
//         }
//     },
//     {
//         type: "restaurant",
//         data: {
//             type: "F",
//             name: "Folks",
//             costForTwo: 560000,
//             cuisines: ["Burgers","Biryani","AmericanSnacks","FastFood"],
//             avgRating: 3.5,
//             deliveryTime: 36,
//             id: 91,
//         }
//     }
// ]

// const Body=()=>{
//     return (
//         <div className="body">
//             <div className="search">
//                 Search
//             </div>
//             <div className="res-container">
//                <RestaurantCard resData={reslist[0]}/>
//                <RestaurantCard resData={reslist[1]}/>
//                <RestaurantCard resData={reslist[2]}/>

//             </div>

//         </div>
//     )
// }


// const Body=()=>{
//     return (
//         <div className="body">
//             <div className="search">
//                 Search
//             </div>
//             <div className="res-container">
//               {
//               reslist.map(restaurant=><RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
//               }
//             </div>

//         </div>
//     )
// }
    

const AppLayout=()=>{
  console.log(<Body/>)
    return (
      <div className="app">
        <Header/>
        <Body/>
      </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)









             