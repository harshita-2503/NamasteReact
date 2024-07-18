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









             