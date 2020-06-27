import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class PricesBox extends React.Component {
    render() {
        return (
<section className="price_area p_120">
    <div className="container">
        <div className="main_title">
            <h2>Ticket Pricing</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                You may see some for as low as $.17 each.</p>
        </div>
        <div className="price_inner row m0">
            <div className="col-lg-3 col-sm-6 p0">
                <div className="price_item">
                    <div className="price_text">
                        <h3>Basic</h3>
                        <h5>Individuals/Freelancers</h5>
                        <h2>£39<span>/mo</span></h2>
                        <ul className="list">
                            <li><a href="#">RAM 1 GB</a></li>
                            <li><a href="#">Core CPU 1</a></li>
                            <li><a href="#">SSD Storage 20 GB</a></li>
                            <li><a href="#">Transfer 1 TB</a></li>
                            <li><a href="#">Network In 40 Gb</a></li>
                        </ul>
                    </div>
                    <a className="price_btn" href="#">Get Started</a>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 p0">
                <div className="price_item">
                    <div className="price_text">
                        <h3>Starter</h3>
                        <h5>Small Companies</h5>
                        <h2>£59<span>/mo</span></h2>
                        <ul className="list">
                            <li><a href="#">RAM 2 GB</a></li>
                            <li><a href="#">Core CPU 2</a></li>
                            <li><a href="#">SSD Storage 50 GB</a></li>
                            <li><a href="#">Transfer 1 TB</a></li>
                            <li><a href="#">Network In 40 Gb</a></li>
                        </ul>
                    </div>
                    <a className="price_btn" href="#">Get Started</a>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 p0">
                <div className="price_item">
                    <div className="price_text">
                        <h3>Business</h3>
                        <h5>Medium Companies</h5>
                        <h2>£79<span>/mo</span></h2>
                        <ul className="list">
                            <li><a href="#">RAM 4 GB</a></li>
                            <li><a href="#">Core CPU 4</a></li>
                            <li><a href="#">SSD Storage 75 GB</a></li>
                            <li><a href="#">Transfer 2 TB</a></li>
                            <li><a href="#">Network In 80 Gb</a></li>
                        </ul>
                    </div>
                    <a className="price_btn" href="#">Get Started</a>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6 p0">
                <div className="price_item">
                    <div className="price_text">
                        <h3>Enterprise</h3>
                        <h5>Large Companies</h5>
                        <h2>£99<span>/mo</span></h2>
                        <ul className="list">
                            <li><a href="#">RAM 8 GB</a></li>
                            <li><a href="#">Core CPU 8</a></li>
                            <li><a href="#">SSD Storage 100 GB</a></li>
                            <li><a href="#">Transfer 2 TB</a></li>
                            <li><a href="#">Network In 100 Gb</a></li>
                        </ul>
                    </div>
                    <a className="price_btn" href="#">Get Started</a>
                </div>
            </div>
        </div>
    </div>
</section>

        );
    }
}
