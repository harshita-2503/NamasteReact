import { act ,fireEvent,render,screen} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import {Header} from "../Header"
import "@testing-library/jest-dom"
import Cart from "../Cart"

import { BrowserRouter } from "react-router-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=>Promise.resolve(MOCK_DATA)
    })
})

it("Should load Restaurant Menu Component",async()=>{

    await act(async()=>render(
        <BrowserRouter>
       
    <Provider store={appStore}>
        <Header/>
        <RestaurantMenu/>
        <Cart/>
    </Provider>
    </BrowserRouter>));

    const accordionHeader=screen.getByText("Recommended (17)")

    fireEvent.click(accordionHeader);

    

    expect(screen.getAllByTestId("foodItems").length).toBe(17)

    const addbtns=screen.getAllByRole("button",{name : "Add +"})
    // console.log(addbtns.length);
    expect(screen.getByText("Cart(0)")).toBeInTheDocument();


    fireEvent.click(addbtns[0])

    expect(screen.getByText("Cart(1)")).toBeInTheDocument();
    fireEvent.click(addbtns[2])
    expect(screen.getByText("Cart(2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(19)  //cart + restaurant menu
    
    fireEvent.click(screen.getByRole("button",{name : "Clear Cart"}));


    expect(screen.getAllByTestId("foodItems").length).toBe(17) 

    expect(screen.getByText("Cart is empty add items to the Cart")).toBeInTheDocument()
    


})