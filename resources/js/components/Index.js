import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import IndexEvents from "./Events/IndexEvents";
import pic from '../../../public/img/gens.jpg';
import HeaderTemplate from "./HeaderTemplate";
import HomeBanner from "./Events/HomeBanner";
import TimeArea from "./Events/TimeArea";
import Schedule from "./Events/Schedule";
import ContactInfo from "./ContactInfo";
import PricesBox from "./PricesBox";
import Footer from "./Footer";
import WelcomeMessage from "./WelcomeMessage";
import Artists from "./Events/Artists";
import Media from "./Events/Media";
import Home from '../components/Home';
import Login from '../../coreui/src/views/pages/login/Login';
import Register from '../../coreui/src/views/pages/register/Register';
import NotFound from '../../coreui/src/views/pages/page404/Page404';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

export default class Index extends Component {
    render() {
        return (
            <div>               
                <BrowserRouter>
                <header className="header_area">
                    <div className="main_menu">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container box_1620">
                                <Link className="navbar-brand logo_h" to='/login' > eventcreate</Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className="nav-item active"><Link className="nav-link" to='/'>Home</Link></li>
                                        <li className="nav-item active"><Link className="nav-link" to="/register">Register</Link></li>
                                        <li className="nav-item"><a className="nav-link" href="/dashboard">Dashboard</a></li>
                                            <li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li>
                                        <li className="nav-item submenu dropdown"><a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><a className="nav-link" href="schedule.html">Schedule</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="venue.html">Venue</a></li>
                                                            <li className="nav-item"><a className="nav-link" href="price.html">Pricing</a></li>
                                                                <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item submenu dropdown">
                                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown"
                                                   role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
                                                <ul className="dropdown-menu">
                                                    <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                                                    <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                                    </ul>
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="nav-item"><a href='#' className="tickets_btn">Get Ticket</a></li>
                                        <li className="nav-item"><a href="#" className="search"><i className="lnr lnr-magnifier"/></a></li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </Switch>
                </div>
                </BrowserRouter>
                    
                <Footer/>
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
