import React from "react";
import { Link } from "react-router-dom";
import './../styles/Navbar.css'

const Navbar = () => {

    const LinkStyle = {
        marginRight: "15px",
        color: "#A8D1BF",
        textAlign: "center",
        visited: "#A8D1BF"
    }

    return (
        <table className="Links">
            <tbody>
                <tr>
                    <th>
                        <Link style={LinkStyle} to="/">Home</Link>
                    </th>
                    <th>
                        <Link style={LinkStyle} to="/user">Recipes By Users</Link>
                    </th>
                </tr>   
            </tbody>
        </table>
    );
}

export default Navbar;