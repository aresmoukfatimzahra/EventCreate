import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {indexEvents} from "../../services";



export default class TimeArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        indexEvents(url+'/events/countdownNextEvent',data=>{
            console.log('timeArea')
            console.log(data)
            this.setState({
                event:data.date,
            })

        })
    }
    render() {
        let event=this.state.event
        if(event.leading>0){
            event=event[0]
        }
        return (

<section className="event_time_area">
    <div className="container">

        <div className="event_time_inner">
            <div className="row">
                <div className="col-lg-6">
                    <div className="event_text">
                        <h3>Next Event will Start in</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="timer_inner">
                        <div id="timer" className="timer">
                            <div className="timer__section days">
                                <div className="timer__number">{event.diff}</div>
                                <div className="timer__label">days</div>
                            </div>
                            <div className="timer__section hours">
                                <div className="timer__number">3</div>
                                <div className="timer__label">hours</div>
                            </div>
                            <div className="timer__section minutes">
                                <div className="timer__number">20</div>
                                <div className="timer__label">Minutes</div>
                            </div>
                            <div className="timer__section seconds">
                                <div className="timer__number">55</div>
                                <div className="timer__label">seconds</div>
                            </div>
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
