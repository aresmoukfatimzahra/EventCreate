import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import schedule from '../../../../public/assets/img/schedule-1.jpg';
import {getResults} from "../../services";
import Calendar from "./Calendar";
import {Link} from "react-router-dom";


export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dates: [],
            events: [],
            date:"",
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT
        console.log(url)
        getResults(url+'/events/getdateEvents',data=>{
            this.setState({
                dates:data.dates,

            })

        })

        getResults(url+'/events/getFirstdateEvents',data=>{
            this.setState({
                events:data.events,
                date:data.events[0].date,
            })

        })



    }

    changeDate=(date)=>{
        const url=process.env.MIX_REACT_APP_ROOT
        getResults(url+'/events/getEventByDate/'+date,data=>{
            this.setState({
                events:data.events,
                date:date
            })

        })
    }
    render() {
        let dates=this.state.dates
        let date=this.state.date
        let events=this.state.events
        console.log('rrr')
        console.log(this.state)
        return (
           <section className="event_schedule_area p_120">
    <div className="container">
        <div className="main_title">
            <h2>Event Schedule</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                You may see some for as low as $.17 each.</p>
        </div>
        <div className="event_schedule_inner">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                {dates.map((date,i) => {
                    return (
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href={"#"+date.date} role="tab" onClick={(e)=>this.changeDate(date.date)}
                       aria-controls="home" aria-selected="true">{date.date}</a>
                </li>
                        )})}

            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id={date.date} role="tabpanel" aria-labelledby="home-tab">
                    {events.map((event,i) => {
                        return (
                    <div className="media">
                        <div className="d-flex">
                            {event.url?
                                <Link to={"/EventDesc/"+event.id}><img src={event.url} alt="" width={100} height={100}/></Link>:
                                <Link to={"/EventDesc/"+event.id}><img src={schedule} alt="" width={100} height={100}/></Link>
                            }

                        </div>
                        <div className="media-body">
                            <h5>09.00 am</h5>
                            <h4> <Link to={"/EventDesc/"+event.id}>{event.title}</Link></h4>
                            <p>Speech by: Mark weins</p>
                        </div>
                    </div>
                            )})}

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
        </div>
    </div>
</section>
    );
    }
    }
