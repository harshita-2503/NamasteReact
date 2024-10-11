import {render,screen} from"@testing-library/react"
import Body from "../Body"
import { act } from "react-dom/test-utils"

import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Should render the body component with search",async()=>{
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))
    const searchBtn=screen.getByRole("button",{name:"Search"})

    expect(searchBtn).toBeInTheDocument();
});

