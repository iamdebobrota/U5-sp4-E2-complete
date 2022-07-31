import { render , screen} from "@testing-library/react"
import App from "../../App"
import Avatar from "./Avatar"


describe("Checking Pagination component",function(){
    beforeEach(()=>{
        // render(<App/>)
    })
//     it("should exist in DOM",function(){
// render(<Avatar/>)
//     })

    it("Should be data come from app",function(){
        render(<App/>)
       
    })
})

