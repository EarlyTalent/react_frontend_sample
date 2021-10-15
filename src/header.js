import './App.css';
import { Link } from 'react-router-dom';


function Header( { header } ) {
    return (
        <div className = "header">
            <Link to="/" className="link-decoration"> 
            <h1 className="h1"> {header} </h1>
            </Link>
        </div>
        
    )
}
export default Header;