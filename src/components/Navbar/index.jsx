import './navbar.css';
import Button from '@mui/material/Button';
import LuggageIcon from '@mui/icons-material/Luggage';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/icons/onakatours-logo.png'
import menuIcon from '../../assets/images/icons/menu.png'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ position: 'absolute', top: 0, background: 'transparent', zIndex: 2 }}>
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">
                    <img src={logo} alt="Onakatours Logo" height={40} className="me-2" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-white" to={{ javascript: void (0) }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Serviços
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="#">Seguros</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Vistos</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="#">Concierge</Link>
                                </li>
                            </ul>
                        </li> */}
                    </ul>
                    <div className="d-flex">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="nav-link p-0" to={{ javascript: void (0) }} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={menuIcon} alt="menu icon" style={{height: '37px'}}/>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link className="dropdown-item" to="#">Seguros</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Vistos</Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="#">Concierge</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;