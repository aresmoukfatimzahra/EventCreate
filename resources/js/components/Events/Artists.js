import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import team1 from '../../../../public/assets/img/team/team-1.jpg';
import team2 from '../../../../public/assets/img/team/team-2.jpg';
import team3 from '../../../../public/assets/img/team/team-3.jpg';
import team4 from '../../../../public/assets/img/team/team-4.jpg';
import {Link} from "react-router-dom";
import {indexEvents} from "../../services";
import img from "../../../../public/assets/img/event1.jpg";



export default class Artists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: [],

        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        indexEvents(url+'/artists',data=>{
            this.setState({
                artists:data,

            })
            console.log(data)
            console.log("this.data")
        })

    }
    render() {
        //state
        let artists=this.state.artists
console.log(this.state)
console.log("this.staeeete")
        return (

            <section className="team_area p_120">

                <div className="main_title">
                    <h2>Artists</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                        You may see some for as low as $.17 each.</p>
                </div>
                <div className="row team_inner">
                    {artists.slice(0, 4).map((artist,i) => {
                        return (
                    <div className="col-lg-3 col-sm-6">
                        <div className="team_item">
                            <div className="team_img">
                                {artist.media?

                                        <Link to={"/Artist/"+artist.id}><img key={i} className="img-fluid eventImg" src={artist.media.url}/></Link>

                               :  <Link to={"/Artist/"+artist.id}><img  className="img-fluid eventImg" src={img}/></Link>
                                }
                                <div className="hover">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="team_name">
                                <h4>{artist.name}</h4>

                                <span style={{"color": "#6c757d",'textTransform': 'uppercase','fontSize':15}} className="d-block text-secondary small text-uppercase">
                                {artist.role.libelle}</span>

                            </div>
                        </div>
                    </div>
                        )
                    })
                    }
                </div>
                <div className=" offset-5 col-md-6 button-all"> <Link to="/MoreArtists" className="main_btn" href="#">See all Artists</Link></div>
            </section>

        );
    }
}


