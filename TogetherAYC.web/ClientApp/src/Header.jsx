import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Header = (props) => {
    const { user } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-sm fixed-top border-bottom box-shadow" style={{backgroundColor: 'hsl(50, 33%, 25%)'}} >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Together AYC (Am Yisrael Chai)
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                            {!user ? <Link to="/signup" className="nav-link text-light"> Signup </Link> : <Link to ="/mydonations" className='nav-link text-light'>My Donations</Link>}
                            </li>
                            <li className="nav-item">
                            {!user ? <Link to="/login" className="nav-link text-light"> Login </Link> : <Link to ="/donate" className='nav-link text-light'>Donate</Link>}
                            </li>
                            <li className="nav-item">
                                {user?<Link to="/SubmitMitzvah" className="nav-link text-light">  Submit a Mitzvah </Link>:user}
                            </li>
                            <li className="nav-item">
                            {!user? <Link to="/about" className="nav-link text-light"> About </Link> : <Link to='/logout' className='nav-link text-light'> Logout </Link> }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container" style={{ marginTop: 80 }}>
                <main role="main" className="pb-3">
                    {props.children}
                </main>
            </div>

        </div>
    )
}
export default Header;