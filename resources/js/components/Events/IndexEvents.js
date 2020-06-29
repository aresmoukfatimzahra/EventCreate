import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {indexEvents,indexMedia} from "../../services";
import team1 from '../../../../public/img/team/team-1.jpg';
import team2 from '../../../../public/img/team/team-2.jpg';
import team3 from '../../../../public/img/team/team-3.jpg';
import team4 from '../../../../public/img/team/team-4.jpg';
import img from '../../../../public/img/event1.jpg';




export default class IndexEvents extends React.Component {
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

        let events=this.state.events
        return (

    <section className="team_area p_120">

        <div className="main_title">
            <h2>Events of the month</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, ante quis blandit malesuada, quam nulla viverra erat</p>
        </div>
        <div className="row team_inner">
            {this.state.events.slice(0, 4).map((event,i) => {
                return (
            <div key={i} className="col-lg-3 col-sm-6">
                <div className="team_item">
                    <div className="team_img">
                        {event.media.length>0?(event.media.slice(0, 1).map((media,i) => {
                            return (

                                <img key={i} className="img-fluid eventImg" src={media.url}/>
                            )
                        })):  <img  className="img-fluid eventImg" src={img}/>
                        }

                            <div className="hover">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                    <div className="team_name">
                        <h4>{event.title}</h4>
                        <p>{event.description.substring(0,60)}</p>
                    </div>
                </div>

            </div>
                )
            })
            }

        </div>
    <div className=" offset-5 col-md-6 button-all">

        <a href="#">See all Events</a>

    </div>
 </section>

    );
    }
    }


