import { Component } from "react";
import '../assets/css/Navbar.css'
class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <h1 className="navbar__logo">SAMIK SHK</h1>
                <div className="navbar__container">
                    <ul className="navbar__link">
                        <li>HOME</li>
                        <li>PORTFOLIO</li>
                        <li>SKILL</li>
                        <li>EDUCATION</li>
                        <li>CONTACT</li>
                        <li>BLOG</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;