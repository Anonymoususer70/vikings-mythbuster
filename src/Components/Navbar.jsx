import './Navbar.css'
import logo from '../Images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"
import CloseIcon from '@mui/icons-material/Close';
import {
    Link
  } from "react-router-dom";


function Navbar() {

    const [ShowNav, setShowNav] = useState(false)

    return (
        <>
            <nav className = "nav">
                <ul className = "nav-items">
                
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                
                <div className ="burger-div">
                    {!ShowNav ? <MenuIcon onClick={()=> setShowNav(!ShowNav)} className="burger"/> : <CloseIcon onClick={()=> setShowNav(!ShowNav)} className ="burger"/> }
                </div>

                <div className="nav-links" id={ShowNav ? "hidden" : ""}>
                   
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/about"><li>About</li></Link>
                        <Link to="/contacts"><li>Contacts</li></Link>
                        <Link to="/myths"><li>Myths</li></Link>
               
                </div>
                
                </ul>           
            </nav>
        </>
    )
}

export default Navbar
