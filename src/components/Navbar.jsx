
import {Link} from "react-router-dom";
const Navbar  = () => {
    return ( 
        <nav className='d-flex justify-content-evenly align-item-center'>
            <h1>pogo</h1>
            <div>
            <input type="search" className="border border-danger"/>
            <button className="btn btn-danger" >search</button>
            </div>
            <Link to="/wishlist">wishlist</Link>
        </nav>
     );
}
 
export default Navbar ;