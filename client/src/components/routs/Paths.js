import {Routes,Route} from "react-router-dom";
import Pols from "../card/Pols";
import Polscard from "../card/Polscard";
import PostCard from "../card/Postcard";
import Login from "../login/Login";
const Paths=()=>{
    return(


    <Routes>
        <Route exact path="/" element= {<PostCard/>}/>
        <Route exact path="/polls" element ={<Polscard/> }/>
        <Route exact path="/pols" element ={<Pols/> }/>
        <Route exact path="/login" element ={<Login/> }/>
    </Routes>
        )
}
export default Paths;