import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import team1 from '../../../../public/img/team/team-1.jpg';
import team2 from '../../../../public/img/team/team-2.jpg';
import team3 from '../../../../public/img/team/team-3.jpg';
import team4 from '../../../../public/img/team/team-4.jpg';



export default class IndexEvents extends React.Component {
    render() {
        return (

<section className="team_area p_120">

        <div className="main_title">
            <h2>Meet Head Speakers</h2>
            <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                You may see some for as low as $.17 each.</p>
        </div>
        <div className="row team_inner">
            <div className="col-lg-3 col-sm-6">
                <div className="team_item">
                    <div className="team_img">
                        <img className="img-fluid" src={team1}/>
                            <div className="hover">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                    <div className="team_name">
                        <h4>Ethel Davis</h4>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="team_item">
                    <div className="team_img">
                        <img className="img-fluid" src={team2} alt=""/>
                            <div className="hover">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                    <div className="team_name">
                        <h4>Ethel Davis</h4>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="team_item">
                    <div className="team_img">
                        <img className="img-fluid" src={team3} alt=""/>
                            <div className="hover">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                    <div className="team_name">
                        <h4>Ethel Davis</h4>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-sm-6">
                <div className="team_item">
                    <div className="team_img">
                        <img className="img-fluid" src={team4} alt=""/>
                            <div className="hover">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-linkedin"></i></a>
                            </div>
                    </div>
                    <div className="team_name">
                        <h4>Ethel Davis</h4>
                        <p>Managing Director (Sales)</p>
                    </div>
                </div>
            </div>
        </div>

 </section>

    );
    }
    }


