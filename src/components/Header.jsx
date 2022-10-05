import Navbar from "./Navbar";
import logo from './levvel-logo.svg'
import "./../styles/Header.css"

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} className="App-logo" alt="logo" />
            <Navbar />
        </div>
    )
}

export default Header;