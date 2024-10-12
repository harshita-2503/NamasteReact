// import {fireEvent, render,screen , act} from"@testing-library/react"
// import Body from "../Body"

// import MOCK_DATA from "../mocks/mockResListData.json"
// import { BrowserRouter } from "react-router-dom"
// import "@testing-library/jest-dom"

// global.fetch = jest.fn(()=>{
//     return Promise.resolve({
//         json: ()=>{
//             return Promise.resolve(MOCK_DATA);
//         }
//     })
// })

// it("Should search Res list for pizza test input",async()=>{
//     await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))
//     const searchBtn=screen.getByRole("button",{name:"Search"})
//     // expect(searchBtn).toBeInTheDocument();


//     const cardsBeforeClick=screen.getAllByTestId("resCard");
//     expect(cardsBeforeClick.length).toBe(16)

//     const searchInput=screen.getByTestId("searchInput");
//     console.log(searchInput)
    
//     fireEvent.change(searchInput,{target: {value:"burger"}});

//     fireEvent.click(searchBtn);


//     //screen should load 4 cards

//    const cardsAfterSearch=screen.getAllByTestId("resCard");

//    expect(cardsAfterSearch.length).toBe(4)
// });


// it("Should filter top rated restaurant",async()=>{
//     await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))
//     const cardsBeforeFilter=screen.getAllByTestId("resCard");

//     expect(cardsBeforeFilter.length).toBe(16);

//     const topRatedRes=screen.getByText("Top Rated Restaurants")

//     fireEvent.click(topRatedRes)

//     const cardsAfterFilter=screen.getAllByTestId("resCard");

//    expect(cardsAfterFilter.length).toBe(16)





// });

