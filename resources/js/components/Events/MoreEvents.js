import React,{Component} from 'react';
import HeaderTemplate from "../HeaderTemplate";
import HomeBanner from "./HomeBanner";
import banner from '../../../../public/assets/img/banner/home-banner.jpg';
import team4 from '../../../../public/assets/images/img_3.jpg';
import {indexEvents} from "../../services";
import { Link } from 'react-router-dom';



export default class MoreEvents extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        indexEvents(url+'/events',data=>{
            this.setState({
                events:data,
            })

        })
    }
    render() {


        return (
<div>

    <HeaderTemplate/>
    <HomeBanner pic={banner} text={[<h2><strong>EVENTS</strong></h2>]}/>
    <div className="site-section bg-light">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                   <h3 id="welcome_area">EVENTS</h3>
                </div>
            </div>
            <div className="row">

                {this.state.events.map((event,i) => {
                    return (
                <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                    <Link to={"/EventDesc/"+event.id}><img src={team4} alt="Image" className="img-fluid"/></Link>

                    <div className="p-4 bg-white">
                        <span style={{"color": "#6c757d",'textTransform': 'uppercase','fontSize':15}} className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                        <h2 className="h5 text-black mb-3" style={{'color': '#517b14;'}} ><Link to={"/EventDesc/"+event.id} >{event.title}</Link></h2>
                        <p>
                            {event.description}
                        </p>
                    </div>
                </div>
                )
                })
                }


                </div>
            <div className="row">
                <div className="col-md-12 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                    <h3 style={{'textTransform':'uppercase'}} >Upcoming Events</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                    <a href="#"><img src={team4} alt="Image" className="img-fluid"/></a>
                    <div className="p-4 bg-white">
                        <span style={{"color": "#6c757d",'textTransform': 'uppercase','fontSize':15}} className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                        <h2 className="h5 text-black mb-3" style={{'color': '#517b14;'}} ><Link to="/" >title</Link></h2>
                        <p>
                            description
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                    <a href="#"><img src={team4} alt="Image" className="img-fluid"/></a>
                    <div className="p-4 bg-white">
                        <span style={{"color": "#6c757d",'textTransform': 'uppercase','fontSize':15}} className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                        <h2 className="h5 text-black mb-3" style={{'color': '#517b14;'}} ><Link to="/" >title</Link></h2>
                        <p>
                            description
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                    <a href="#"><img src={team4} alt="Image" className="img-fluid"/></a>
                    <div className="p-4 bg-white">
                        <span style={{"color": "#6c757d",'textTransform': 'uppercase','fontSize':15}} className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                        <h2 className="h5 text-black mb-3" style={{'color': '#517b14;'}} ><Link to="/" >title</Link></h2>
                        <p>
                            description
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


        );
    }
}



