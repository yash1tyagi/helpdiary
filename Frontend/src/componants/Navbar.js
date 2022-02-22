import React, {useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    let navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
    }, [location]);
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Digital-Diary</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname==="/" ?"active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token')?<form className="d-flex">
                        <Link className="btn btn-primary mx-1" to="/Login" role="button">Login</Link>
                        <Link className="btn btn-primary mx-1" to="/signUp" role="button">SignUp</Link>
                        </form>:<button type="button" onClick={handleLogout} className="btn btn-warning">LogOut</button>}
                    </div>
                </div>
            </nav>


        </div>
    )
}
