import './Navbar.css'
import logo from '../Images/logo.png'
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react"
import CloseIcon from '@mui/icons-material/Close';

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
                   <a href="/"><li>Home</li></a>
                   <a href="/"><li>About</li></a>
                   <a href="/"><li>Contacts</li></a>
                   <a href="/"><li>Myths</li></a>
                </div>
                
                </ul>           
            </nav>
        </>
    )
}

export default Navbar
