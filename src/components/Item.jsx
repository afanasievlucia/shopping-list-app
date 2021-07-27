import React from "react";
import { useSelector } from 'react-redux';

function Item () {
    const products = useSelector((state) => state.allProducts.products);
    
    const items = products.map((item) => {
        const { id, imgUrl, author, title, price, seller} = item;
        return (
            <div className='col col-md-3 col-sm-6' key={id}>
                <div className='card border border-white'>
                    <img className='card-img-top' src={imgUrl} alt="" />
                    <div className='card-body'>
                        <h5 className='card-title stretched-link'><strong>{title}</strong></h5>
                        <p className='my-1'>{author}</p>
                        <div className='d-flex align-items-center justify-content-between my-3'>
                        <p className='my-1'>{price}</p>
                        <span className="badge bg-warning text-dark">{seller}</span>
                        </div>
                        <button className="btn btn-info stretched-link py-0">Buy now</button>
                    </div>
                </div>
            </div>
        );
    });
    
    return <>{items}</>
}
export default Item

// function Item ({ course }) {
//     return (
//         <div className='col col-md-3 col-sm-6'>
//             <div className='card border border-white'>
//                 <img className='card-img-top' src={course.imgUrl} alt="" />
//                 <div className='card-body'>
//                     <h5 className='card-title'><strong>{course.title}</strong></h5>
//                     <p className='my-1'>{course.author}</p>
//                     <p className='my-1'>{course.price}</p>
//                     <span className="badge bg-warning text-dark">{course.seller}</span>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default Item