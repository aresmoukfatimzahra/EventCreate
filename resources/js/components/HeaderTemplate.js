import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class HeaderTemplate extends React.Component {
    render() {
        return (
            <div>
                <header className="header_area">
                    <div className="main_menu">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container box_1620">
                                <a className="navbar-brand logo_h" href="index.html" > eventcreate</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                        aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>

                                <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                                    <ul className="nav navbar-nav menu_nav ml-auto">
                                        <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                                        <li className="nav-item active"><a className="nav-link" href="index.html">Events</a></li>
                                        <li className="nav-item"><a className="nav-link" href="speakers.html">Singers</a></li>
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
                                        <li className="nav-item"><a href="#" className="tickets_btn">Get Tickets</a></li>
                                        <li className="nav-item"><a href="#" className="search"><i className="lnr lnr-magnifier"/></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

            </div>
                            );
                            }
                            }
