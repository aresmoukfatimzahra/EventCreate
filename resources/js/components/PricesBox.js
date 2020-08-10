import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {getResults} from "../services";


export default class PricesBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tickets: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT
        console.log(url)
        getResults(url+'/tickets/',data=>{
            this.setState({
                tickets:data.tickets,
            })

        })
    }
    render() {
        let tickets=this.state.tickets
        return (
<section className="price_area p_120">
    <div className="container">
        <div className="main_title">
            <h2>Ticket Pricing</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                You may see some for as low as $.17 each.</p>
        </div>
        <div className="price_inner row m0">
            {tickets.map((ticket,i) => {
                return (
            <div className="col-lg-3 col-sm-6 p0">
                <div className="price_item">
                    <div className="price_text">
                        <h3>{ticket.name}</h3>
                        <h5>Individuals/Freelancers</h5>
                        <h2>£{ticket.price}<span>/mo</span></h2>
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
                    )})}
        </div>
    </div>
</section>

        );
    }
}
