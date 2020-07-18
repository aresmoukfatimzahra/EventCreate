import React,{Component} from 'react';
import HeaderTemplate from "../HeaderTemplate";
import HomeBanner from "../Events/HomeBanner";
import banner from '../../../../public/assets/img/banner/home-banner.jpg';
import team4 from '../../../../public/assets/images/img_3.jpg';
import {indexEvents} from "../../services";
import { Link } from 'react-router-dom';
import img from "../../../../public/assets/img/event1.jpg";





export default class MoreArtists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],
            role: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        indexEvents(url+'/artists',data=>{
            this.setState({
                artists:data,

            })

        })
    }
    render() {
console.log('-----artists-----');
console.log(this.state);
let artists=this.state.artists
        return (
            <div>

                <HeaderTemplate/>
                <HomeBanner pic={banner} text={[<h2><strong>Artists</strong></h2>]}/>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                                <h3 id="welcome_area">ARTISTS</h3>
                            </div>
                        </div>
                        <div className="row">

                            {artists.map((artist,i) => {
                                return (
                                    <div className="col-md-6 col-lg-4 mb-5 text-center" data-aos="fade-up" data-aos-delay="100">
                                        {artist.media?

                                                <Link to={"/Artist/"+artist.id}><img key={i} className="img-fluid eventImg" src={artist.media.url}/></Link>
                                           :  <Link to={"/Artist/"+artist.id}><img  className="img-fluid eventImg" src={img}/></Link>
                                        }

                                        <div className="p-4 bg-white">
                                            <h2 className="h5 text-black mb-3" style={{'color': '#517b14;'}} ><Link to={"/Artist/"+artist.id} >{artist.name} {artist.last_name}</Link></h2>



                                                        <span style={{"color": "#6c757d",'textTransform': 'uppercase','fontSize':15}} className="d-block text-secondary small text-uppercase">
                                                            {artist.role.libelle}</span>


                                            <span style={{"color": "#6c757d",'fontSize':15}} className="d-block text-secondary small ">Membre depuis {artist.created_at.substring(0,10)}</span>

                                            <a href={artist.facebook} target="_blank"> <i className="fa fa-facebook icon-social" aria-hidden="true"></i></a>
                                            <a href={artist.instagram} target="_blank"> <i className="fa fa-instagram icon-social" aria-hidden="true"></i></a>
                                            <a href={"mailto: "+ artist.email}>  <i className="fa fa-envelope icon-social" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                )
                            })
                            }


                        </div>
                    </div>
                </div>
            </div>


        );
    }
}



