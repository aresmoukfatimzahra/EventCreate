import React,{Component} from 'react';
import HeaderTemplate from "../HeaderTemplate";
import HomeBanner from "../Events/HomeBanner";
import banner from '../../../../public/assets/img/banner/home-banner.jpg';
import team4 from '../../../../public/assets/images/img_3.jpg';
import {showUser,indexEvents} from "../../services";
import { Link } from 'react-router-dom';
import img from "../../../../public/assets/img/event1.jpg";




export default class ArtistBio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artist: [],
            events: [],
            medias: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        showUser(url+'/users/'+this.props.match.params.id,data=>{
            this.setState({
                artist:data,
            })

        })
        indexEvents(url+'/usersShowEvents/'+this.props.match.params.id,data=>{
            this.setState({
                events:data.events,
                medias:data.media.media,
            })

        })
    }
    render() {
console.log('-----artists-----');
console.log(this.state);
let artists=this.state.artist
let events=this.state.events
let medias=this.state.medias
        let list=medias
        let artist=[]
        if(artists.length>0){  artist=artists[0]}

        return (
            <div>

                <HeaderTemplate/>
                <HomeBanner pic={banner} text={[<h2><strong>{artist.name}</strong></h2>]}/>

                <main id="main">


                    <section id="about" className="about">
                        <div className="container" data-aos="fade-up" id="welcome-area">

                            <div className="section-title">
                                <h2 className="text-uppercase">{artist.name}</h2>

                            </div>

                            <div className="row">
                                <div className="col-lg-4">
                                    <img src={artist.media} className="img-fluid" alt="" style={{height:350,width:350}}/>
                                </div>
                                <div className="col-lg-8 pt-4 pt-lg-0 content">
                                    <h3 className="text-uppercase">{artist.role}</h3>
                                    <p className="font-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>

                                                    <strong>Birthday:</strong> 1 May 1995
                                                </li>
                                                <li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                    <strong>Facebook:</strong> www.example.com
                                                </li>

                                                <li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                    <strong>Email:</strong> {artist.email}
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i> <strong>Age:</strong> 30
                                                </li>
                                                <li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                    <strong>Instagram:</strong> Master
                                                </li>
                                                <li><i className="fa fa-arrow-circle-right" aria-hidden="true"></i>
                                                    <strong>City:</strong> Lorem ipsum
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <p>
                                        Officiis eligendi itaque labore et dolorum mollitia officiis optio vero.
                                        Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia
                                        tempore. Et eius omnis.
                                        Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia
                                        repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum
                                        qui repellendus omnis culpa magni laudantium dolores.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="skills" className="skills">
                        <div className="container" data-aos="fade-up">

                            <div className="section-title">
                                <h2>événements auquels {artist.name} a participé </h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
                                    quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
                                    impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic
                                    quas.</p>
                            </div>

                            <div className="row skills-content">


                                    {events.map((event,i) => {
                                        return (
                                            <div className="col-lg-4">
                                            <div className="row">
                                            <div className="col-md-6 progress">

                                        <span className="skill">{event.title}<br/> <i className="val">{event.created_at.substring(0,10)}</i></span>
                                    </div><br/>
                                                <div className="col-md-12">
                                            {list.length>0?list.map(med =>

                                                    med.event_id === event.id ?(
                                                 <img src={med.url} className="img-fluid" alt="ddd" style={{height:150,width:150}}/>
                                                    ): null
                                            ):null}
                                        </div>
                                    </div>
                                            </div>

                                        )
                                    })
                                    }






                            </div>

                        </div>
                        <div className=" offset-5 col-md-6 button-all">
                            <Link className="main_btn btn-events" to="/MoreArtists">Back to Artists</Link>
                        </div>
                    </section>




                </main>



            </div>


        );
    }
}



