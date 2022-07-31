import { render, screen } from "@testing-library/react"
import App from "../../App"
import Button from "./Button"

// TODO
describe("Checking Button Components",function(){
    it("should not crash on render",function(){
        render(<Button/>)
        let btn = screen.getByTestId("button");
        expect(btn).toBeInTheDocument()
    })
    it("should be children in button components",function(){
        render(<Button/>)
        let btn = screen.getByTestId("button");
        expect(btn).toBeEnabled()
    })
    it("should be varient in the documents",function(){
        render(<Button/>)
        let btn = screen.getByTestId("button");
        expect(btn).toBeEnabled()
    })

})


describe("Checking App Components",function(){
    it("should not crash on render",function(){
render(<App/>)
let v= screen.getByTestId('varient-btn');
expect(v).toHaveTextContent("Hello")

    })
})
