import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import schedule from '../../../../public/assets/img/schedule-1.jpg';
import {getResults} from "../../services";


export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            events: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT
        console.log(url)


        // getResults(url+'/events/getEventByDate/'+this.state.dates[0].date,data=>{
        //     this.setState({
        //         events:data.events,
        //     })
        //
        // })
    }

    render() {

        let events=this.state.events

        return (

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="d-flex">
                                        <img src={schedule} alt=""/>
                                    </div>
                                    <div className="media-body">
                                        <h5>09.00 am</h5>
                                        <h4>Opening Ceremony</h4>
                                        <p>Speech by: Mark weins</p>
                                    </div>
                                </div>
                            </div>
                        </div>

        );
    }
}
