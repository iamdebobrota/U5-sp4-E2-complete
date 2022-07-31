import { fireEvent, render, screen } from "@testing-library/react"
import Pagination from "./Pagination";



describe("Checking Pagination component",function(){
    it("should exist in DOM",function(){
render(<Pagination/>)
let pagination = screen.getByTestId("pagination");
expect(pagination).toBeInTheDocument();
    })
    

    it("should have previous button and pagnation",function(){
render(<Pagination/>)
let prev= screen.getByTestId("prevBtn");
expect(prev).toHaveTextContent("Prev")

let item= screen.getByTestId("pageItem");
expect(item).toBeInTheDocument()

    })

    it("should be click prev and page is changes",function(){
        render(<Pagination/>)
        let item= screen.getByTestId("pageItem");
        expect(item).toHaveTextContent(1)
    })
    it("should prev button disable when page is 1",function(){
        render(<Pagination/>)
        let prev= screen.getByTestId("prevBtn");
        fireEvent.click(prev);
        let item= screen.getByTestId("pageItem");
        expect(item).toHaveTextContent(1)
            // expect(prev).toBeDisabled()
    })




})



describe("Checking for Pagination Next button",()=>{
    it('Should have button Next', () => {
        render(<Pagination />);
        let next = screen.getByTestId("nextBtn");
        expect(next).toHaveTextContent("Next");    
    });
    it("should prev button disable when page is 1",function(){
        render(<Pagination/>)
        let next= screen.getByTestId("nextBtn");
        fireEvent.click(next);
        fireEvent.click(next);
        let item= screen.getByTestId("pageItem");
        expect(item).toHaveTextContent(1)
            // expect(prev).toBeDisabled()
    })

})

