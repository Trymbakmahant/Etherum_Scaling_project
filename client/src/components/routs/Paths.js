import {Routes,Route} from "react-router-dom";
import PostCard from "../card/Postcard";
const Paths=()=>{
    return(


    <Routes>
        <Route exact path="/" element= {<PostCard/>}/>
    </Routes>
        )
}
export default Paths;