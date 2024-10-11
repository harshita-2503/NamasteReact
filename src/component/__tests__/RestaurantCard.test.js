import { render ,screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card data with props data",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    const name=screen.getByText("KFC");
    // const name=screen.getByText("leon");


    expect(name).toBeInTheDocument();
    
})

it("Should render Restaurant Card with Promoted Label",()=>{
    render(<RestaurantCard resData={MOCK_DATA}/>);

    // const label=screen.getByText("Promoted");


    // expect(label).toBeInTheDocument();
    
})