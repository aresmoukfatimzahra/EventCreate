import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import schedule from '../../../../public/assets/img/schedule-1.jpg';
import {getResults} from "../../services";
import Calendar from "./Calendar";
import {Link} from "react-router-dom";
import img from "../../../../public/assets/img/event1.jpg";


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

        return (
           <section className="event_schedule_area p_120">
             <div className="container" style={{paddingRight:0,paddingLeft:0}}>
                <div className="main_title">
                    <h2>Event Schedule</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                        You may see some for as low as $.17 each.</p>
                </div>
                <div className="event_schedule_inner">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        {dates.slice(0,6).map((date,i) => {
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
                                    {event.media?
                                        (event.media.slice(0, 1).map((media,i) => {
                                                return (

                                                    <Link to={"/EventDesc/"+event.id}><img key={i} className="img-fluid eventImg" src={media.url} style={{width:100,height:100}}/></Link>
                                                )
                                            })):  <Link to={"/EventDesc/"+event.id}><img  className="img-fluid eventImg" src={schedule} style={{width:100,height:100}}/></Link>
                                    }

                                </div>
                                <div className="media-body">
                                    <h5>09.00 am</h5>
                                    <h4> <Link to={"/EventDesc/"+event.id}>{event.title}</Link></h4>
                                    <p>Place: {event.place.substring(0,10)}</p>
                                </div>
                            </div>
                                    )})}

                        </div>
                    </div>
               </div>
         </div>
       </section>
    );} }


