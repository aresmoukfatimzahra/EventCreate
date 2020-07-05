import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import {indexEvents} from "../../services";
import img from "../../../../public/assets/img/event1.jpg";
import team1 from '../../../../public/assets/img/team/team-1.jpg';
import team2 from '../../../../public/assets/img/team/team-2.jpg';
import team3 from '../../../../public/assets/img/team/team-3.jpg';
import guitarist from '../../../../public/assets/img/guitar.jpg';
import event01 from '../../../../public/assets/img/event-01.jpg';
import event02 from '../../../../public/assets/img/event-02.jpg';
import event03 from '../../../../public/assets/img/event-03.jpg';
import event04 from '../../../../public/assets/img/event-04.jpg';
import event05 from '../../../../public/assets/img/event-05.jpg';
import { Link } from 'react-router-dom';



export default class EventDesc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event: [],
            medias: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        indexEvents(url+'/events/'+this.props.match.params.id,data=>{
            this.setState({
                event:data.event,
                medias:data.event_medias,
            })

        })
    }
    render() {
        console.log(this.state)
        let pics=[event01,event02,event03,event04
        ]
        let medias=[];
        for(var i=0;i<this.state.medias.length;i++){
            medias.push(this.state.medias[i].url);
        }
let n=this.state.medias.length;
        let rest=4-n;
        let gallery=[];
        gallery=medias.concat(pics);
        console.log(pics)
        console.log(medias)
        console.log(gallery)
        return (
     <div>

        <div className="site-wrap">

            <div className="site-navbar mt-4">
                <div className="container py-1">
                    <div className="row align-items-center">
                        <div className="col-8 col-md-8 col-lg-4">
                            <h1 className="mb-0"><Link to={"/"} className="text-white h2 mb-0"><strong>EventCreate<span className="text-primary">.</span></strong></Link></h1>
                        </div>
                        <div className="col-4 col-md-4 col-lg-8">
                            <nav className="site-navigation text-right text-md-right" role="navigation">

                                <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>

                                <ul className="site-menu js-clone-nav d-none d-lg-block">
                                    <li className="active">
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li><a href="dj.html">Singers</a></li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="about.html">Music News</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>


                    </div>
                </div>
            </div>
        </div>

        <div className="site-mobile-menu">
            <div className="site-mobile-menu-header">
                <div className="site-mobile-menu-close mt-3">
                    <span className="icon-close2 js-menu-toggle"></span>
                </div>
            </div>
            <div className="site-mobile-menu-body"></div>
        </div>

        <div className="site-blocks-cover overlay"   style={{ backgroundImage: `url(${guitarist})` }} data-aos="fade" data-stellar-background-ratio="0.5" data-aos="fade">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 text-center" data-aos="fade-up" data-aos-delay="400">
                        <h1 className="event_desctitle">{this.state.event.title}</h1>
                        <p className="mb-4 event_desc"><span className="small">{this.state.event.description}</span></p>

                        <div id="playerContainer"></div>

                    </div>
                </div>
            </div>
        </div>


    <div className="pb-5" style={{marginTop: -100}}>
        <div className="container-fluid">

                    <div className="row no-gutters">
                        {this.state.event && this.state.medias.length>0  ?

                            (
                                this.state.medias.slice(0, 4).map((media,i) => {
                            return (

                                <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                                    <a href="#" className="unit-9">

                                        <div className="image"   style={{ backgroundImage: `url(${media.url})` }}></div>

                                        <div className="unit-9-content">
                                            <h2>Art Gossip</h2>
                                            <span>Friday {this.state.event.date}</span>
                                        </div>
                                    </a>
                                </div>
                            )
                        }

                        )

                            ):
                            (pics.map((media,i) => {
                                return (
                            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <a href="#" className="unit-9">

                                <div className="image"   style={{ backgroundImage: `url(${media})` }}></div>

                                <div className="unit-9-content">
                                    <h2>Art Gossip</h2>
                                    <span>Friday {this.state.event.date}</span>
                                </div>
                            </a>
                        </div>
                                )}))
                        }


                        {/*<div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">*/}
                        {/*    <a href="#" className="unit-9">*/}
                        {/*        <div className="image"   style={{ backgroundImage: `url(${event02})` }}></div>*/}
                        {/*        <div className="unit-9-content">*/}
                        {/*            <h2>Good Morning Show</h2>*/}
                        {/*            <span>Friday {this.state.event.date}</span>*/}
                        {/*        </div>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">*/}
                        {/*    <a href="#" className="unit-9">*/}
                        {/*        <div className="image"  style={{ backgroundImage: `url(${event03})` }}></div>*/}
                        {/*        <div className="unit-9-content">*/}
                        {/*            <h2>Blues Radio</h2>*/}
                        {/*            <span>Friday {this.state.event.date}</span>*/}
                        {/*        </div>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">*/}
                        {/*    <a href="#" className="unit-9">*/}
                        {/*        <div className="image"    style={{ backgroundImage: `url(${event04})` }}></div>*/}
                        {/*        <div className="unit-9-content">*/}
                        {/*            <h2>classNameic Songs</h2>*/}
                        {/*            <span>Friday {this.state.event.date}</span>*/}
                        {/*        </div>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>


        </div>
    </div>

    <div className="site-section">

        <div className="container">

            <div className="row">
                <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                    <h2 className="mb-5">event Program</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>
                </div>
            </div>

            <div className="site-block-retro d-block d-md-flex">

                <a href="#" className="col1 unit-9 no-height" data-aos="fade-up" data-aos-delay="100">
                    <div className="image"  style={{ backgroundImage: `url(${event01})` }}></div>
                    <div className="unit-9-content">
                        <h2>classNameic Songs For classNameic People</h2>
                        <span>Friday 1:00pm &mdash; 2:30pm</span>
                    </div>
                </a>

                <div className="col2 ml-auto">

                    <a href="#" className="col2-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="200">
                        <div className="image"   style={{ backgroundImage: `url(${event02})` }}></div>
                        <div className="unit-9-content">
                            <h2>classNameic Songs For classNameic People</h2>
                            <span>Friday 1:00pm &mdash; 2:30pm</span>
                        </div>
                    </a>

                    <a href="#" className="col2-row2 unit-9 no-height" data-aos="fade-up" data-aos-delay="300">
                        <div className="image"   style={{ backgroundImage: `url(${event03})` }}></div>
                        <div className="unit-9-content">
                            <h2>classNameic Songs For classNameic People</h2>
                            <span>Friday 1:00pm &mdash; 2:30pm</span>
                        </div>
                    </a>


                </div>

            </div>
            <div className="site-block-retro d-block d-md-flex" style={{marginTop:100}}>
                <div className="row videoEvent">
                    <div className="col-md-12">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/TeaDE1magRk" frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                </div>
            </div>

        </div>
    </div>


    <div className="site-section bg-light block-13">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                    <h2 className="mb-5">Loved By Our Listeners</h2>
                </div>
            </div>
              <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="offset-4 col-md-8">
                            <img className="w-50 mx-auto img-fluid rounded-circle" src={event01} style={{width:100,height:100,marginBottom:20}}/>
                        </div>
                        <div className="col-md-12">
                            <p className="font-italic site-section-heading text-center mb-5 w-border col-md-6 mx-auto">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia&ldquo;</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="offset-4 col-md-8">
                            <img className="w-50 mx-auto img-fluid rounded-circle" src={event01} style={{width:100,height:100,marginBottom:20}}/>
                        </div>
                        <div className="col-md-12">
                            <p className="font-italic site-section-heading text-center mb-5 w-border col-md-6 mx-auto">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia&ldquo;</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="offset-4 col-md-8">
                            <img className="w-50 mx-auto img-fluid rounded-circle" src={event01} style={{width:100,height:100,marginBottom:20}}/>
                        </div>
                        <div className="col-md-12">
                            <p className="font-italic site-section-heading text-center mb-5 w-border col-md-6 mx-auto">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia&ldquo;</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nonloop-block-13 owl-carousel">

                <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                        <img src={team1} alt="Image" className="w-50 mx-auto img-fluid rounded-circle"/>
                    </div>
                    <div className="">
                        <h3 className="font-weight-light h5">Megan Smith</h3>
                        <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                    </div>
                </div>

                <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                        <img src={team2} alt="Image" className="w-50 mx-auto img-fluid rounded-circle"/>
                    </div>
                    <div className="">
                        <h3 className="font-weight-light h5">Brooke Cagle</h3>
                        <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                    </div>
                </div>

                <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                        <img src={team3} alt="Image" className="w-50 mx-auto img-fluid rounded-circle"/>
                    </div>
                    <div className="">
                        <h3 className="font-weight-light h5">Philip Martin</h3>
                        <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                    </div>
                </div>

                <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                        <img src={team2} alt="Image" className="w-50 mx-auto img-fluid rounded-circle"/>
                    </div>
                    <div className="">
                        <h3 className="font-weight-light h5">Steven Ericson</h3>
                        <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                    </div>
                </div>

                <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                        <img src={team3} alt="Image" className="w-50 mx-auto img-fluid rounded-circle"/>
                    </div>
                    <div className="">
                        <h3 className="font-weight-light h5">Nathan Dumlao</h3>
                        <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                    </div>
                </div>

                <div className="text-center p-3 p-md-5 bg-white">
                    <div className="mb-4">
                        <img src={team1} alt="Image" className="w-50 mx-auto img-fluid rounded-circle"/>
                    </div>
                    <div className="">
                        <h3 className="font-weight-light h5">Brook Smith</h3>
                        <p className="font-italic">&ldquo;Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, iusto. Aliquam illo, cum sed ea? Ducimus quos, ea?&rdquo;</p>
                    </div>
                </div>

            </div>
        </div>
    </div>


    <div className="site-blocks-cover overlay inner-page-cover subscribe"   style={{ backgroundImage: `url(${event05})` }} data-aos="fade" data-stellar-background-ratio="0.5">
        <div className="container">
            <div className="row align-items-center justify-content-center text-center">

                <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
                    <h2><strong>Get ticket</strong></h2>
                    <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit nihil saepe libero sit odio obcaecati veniam.</p>
                    <form action="#" method="post" className="site-block-subscribe">
                        <div className="input-group mb-3">

                            <button style={{marginLeft:220,backgroundColor:'#7cbd1e',color:'white'}} className="btn" type="button" id="button-addon2"><strong>Get ticket</strong></button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div className="site-section">
        <div className="container" data-aos="fade-up">
            <div className="row">
                <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto">
                    <h2 className="mb-5">Our musicians</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia, error reiciendis ab quod?</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                    <div className="team-member">

                        <img src={event01} alt="Image" className="img-fluid"/>

                        <div className="text">

                            <h2 className="mb-2 font-weight-light h4">Megan Smith</h2>
                            <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
                            <p>
                                <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                    <div className="team-member">

                        <img src={event02} alt="Image" className="img-fluid"/>

                        <div className="text">

                            <h2 className="mb-2 font-weight-light h4">Brooke Cagle</h2>
                            <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
                            <p>
                                <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                    <div className="team-member">

                        <img src={event05} alt="Image" className="img-fluid"/>

                        <div className="text">

                            <h2 className="mb-2 font-weight-light h4">Philip Martin</h2>
                            <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
                            <p>
                                <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                    <div className="team-member">

                        <img src={event02} alt="Image" className="img-fluid"/>

                        <div className="text">

                            <h2 className="mb-2 font-weight-light h4">Steven Ericson</h2>
                            <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
                            <p>
                                <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                    <div className="team-member">

                        <img src={event05} alt="Image" className="img-fluid"/>

                        <div className="text">

                            <h2 className="mb-2 font-weight-light h4">Nathan Dumlao</h2>
                            <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
                            <p>
                                <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
                            </p>
                        </div>

                    </div>
                </div>

                <div className="col-md-6 col-lg-4 mb-5 mb-lg-5">
                    <div className="team-member">

                        <img src={event01} alt="Image" className="img-fluid"/>

                        <div className="text">

                            <h2 className="mb-2 font-weight-light h4">Nathan Dumlao</h2>
                            <span className="d-block mb-2 text-white-opacity-05">Creative Director</span>
                            <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit ullam reprehenderit nemo.</p>
                            <p>
                                <a href="#" className="text-white p-2"><span className="icon-facebook"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-twitter"></span></a>
                                <a href="#" className="text-white p-2"><span className="icon-linkedin"></span></a>
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>

    <div className="site-section bg-light">
        <div className="container">
            <div className="row">
                <div className="site-section-heading text-center mb-5 w-border col-md-6 mx-auto" data-aos="fade-up">
                    <h2 className="mb-5">Recommended for you</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, fugit nam obcaecati fuga itaque deserunt officia</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="100">
                    <a href="#"><img src={img} alt="Image" className="img-fluid"/></a>
                    <div className="p-4 bg-white">
                        <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                        <h2 className="h5 text-black mb-3"><a href="#" style={{color:'#7cbd1e'}}>Art Gossip by Mike Charles</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="200">
                    <a href="#"><img src={img} alt="Image" className="img-fluid"/></a>
                    <div className="p-4 bg-white">
                        <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                        <h2 className="h5 text-black mb-3"><a href="#" style={{color:'#7cbd1e'}}>Art Gossip by Mike Charles</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                    <a href="#"><img src={img} alt="Image" className="img-fluid"/></a>
                    <div className="p-4 bg-white">
                        <span className="d-block text-secondary small text-uppercase">Jan 20th, 2019</span>
                        <h2 className="h5 text-black mb-3"><a href="#" style={{color:'#7cbd1e'}}>Art Gossip by Mike Charles</a></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias enim, ipsa exercitationem veniam quae sunt</p>
                    </div>
                </div>
                <div className=" offset-5 col-md-6 button-all">  <Link className="main_btn btn-events" to="/MoreEvents">Back to Events</Link></div>

            </div>
        </div>
    </div>

</div>

        );
    }
}


