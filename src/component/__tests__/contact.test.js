// import {render,screen} from "@testing-library/react"
// import Contact from "../Contact"
// import '@testing-library/jest-dom'

// describe("Contact Us page test cases",()=>{

//     beforeAll(()=>{
//         console.log("Before All")
//     })
//     beforeEach(()=>{
//         console.log("Before Each")
//     })
//     afterAll(()=>{
//         console.log("After All")
//     })

//     afterEach(()=>{
//         console.log("After Each")
//     })
    



// test("should load contact us component",()=>{
//     render(<Contact/>)
//     const heading=screen.getByRole("heading")
//     expect(heading).toBeInTheDocument();
// })

// test("should load button inside my contact component",()=>{
//     render(<Contact/>)
//     // const button=screen.getByRole("button")
//     const button=screen.getByText("Submit")
//     expect(button).toBeInTheDocument();
// })

// test("should load input inside my contact component",()=>{
//     render(<Contact/>)
//     const input=screen.getByPlaceholderText("name")
//     expect(input).toBeInTheDocument();
// })

// test("should load 2 input on contact component",()=>{
//     render(<Contact/>)

//     //Querying
//     const inputBoxes=screen.getAllByRole("textbox")
//     // console.log(inputBoxes)
//     console.log(inputBoxes.length)

//     //assertion

//     expect(inputBoxes.length).toBe(2);
//     //   expect(inputBoxes.length).toBe(3);
//     //   expect(inputBoxes.length).not.toBe(3);


    

    
// })


// it("should load input inside my contact component",()=>{
//     render(<Contact/>)
//     const input=screen.getByPlaceholderText("name")
//     expect(input).toBeInTheDocument();
// })

// it("should load 2 input on contact component",()=>{
//     render(<Contact/>)

//     //Querying
//     const inputBoxes=screen.getAllByRole("textbox")
//     // console.log(inputBoxes)
//     console.log(inputBoxes.length)

//     //assertion

//     expect(inputBoxes.length).toBe(2);
//     //   expect(inputBoxes.length).toBe(3);
//     //   expect(inputBoxes.length).not.toBe(3);


    

    
// })


// });
