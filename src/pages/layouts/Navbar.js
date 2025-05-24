import { Link } from "react-router-dom";
import { GetRoutePath } from "../../routes/routesConfig";



function Navbar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={GetRoutePath('home')} >My React App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to={GetRoutePath('home')}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={GetRoutePath('about-us')}>About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                        {/* <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                            {/* Products */}
                        {/* </a> */}
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {/* <li><a className="dropdown-item" >Action</a></li> */}
                            {/* <li><a className="dropdown-item" >Another action</a></li> */}
                            <li><hr className="dropdown-divider"/></li>
                            {/* <li><a className="dropdown-item" >Something else here</a></li> */}
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " href={GetRoutePath('contact-us')} tabIndex="-1" aria-disabled="true">Contact Us</a>
                        </li>
                    </ul>
                   
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navbar;