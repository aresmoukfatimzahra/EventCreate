import React,{Component} from 'react';

import pic from '../../../public/img/gens.jpg';



export default class WelcomeMessage extends Component {
    render() {
        return (

<section className="welcome_area pad_btm" id="welcome_area">
    <div className="container">
        <div className="welcome_inner row">
            <div className="col-lg-5">
                <div className="welcome_img">
                    <img className="img-fluid" src={pic} alt=""/>

                </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
                <div className="welcome_text">
                    <h3>Welcome to eventcreate</h3>
                    <div className="content">
                        <div id="example" className="title m-b-md"></div>
                    </div>
                    <p>organizing a festival is not an easy task. Indeed, several essential steps must be followed for its organization:

                        choice of location, communication, ticketing, budget definition, fundraising…

                        In addition, a number of legal obligations must be observed, such as taking out insurance or fulfilling a declaration formality with the competent authority.

                        In addition, there is the management of members and volunteers of the association before and during the event. Also, to guarantee the success of your festival, take these few points into account during your preparations.</p>
                    <a className="main_btn" href="#">Create an Event</a>
                </div>
            </div>
        </div>
    </div>
</section>
        );
    }
}
