//import { useSelector } from "react-redux"
import Item from "./Item"
//import data from "../data"

function Courses () {
    //const products = useSelector((state) => state.allProducts);
    return (
        <div className='row'>
            
                <Item />
           
        </div>
    )
}
export default Courses

// import Item from "./Item"
// import data from "../data"

// function Courses () {
//     return (
//         <div className='row'>
//             {data.map(course => (
//                 <Item key={course.id} course={course}/>
//             ))}
//         </div>
//     )
// }
// export default Courses
