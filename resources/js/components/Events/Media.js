import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import team1 from '../../../../public/assets/img/team/team-1.jpg';
import team2 from '../../../../public/assets/img/team/team-2.jpg';
import team3 from '../../../../public/assets/img/team/team-3.jpg';
import team4 from '../../../../public/assets/img/team/team-4.jpg';
import {Link} from "react-router-dom";
import { mediaIndex} from "../../services";



export default class Media extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            medias: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        mediaIndex(url+'/medias/',data=>{
            this.setState({
                medias:data,
            })
console.log('daaaaaaaaata')
console.log(data)
        })

    }
    render() {
        console.log('mediasss')
        console.log(this.state)
        let medias=this.state.medias;

        return (

            <section className="team_area p_120">

                <div className="main_title">
                    <h2>Last Pictures-Videos</h2>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price.
                        You may see some for as low as $.17 each.</p>
                </div>
                <div className="row team_inner">
                    {medias.slice(0, 4).map((media,i) => {
                        return (
                    <div className="col-lg-3 col-sm-6">
                        <div className="team_item">
                            <div className="team_img">
                                <Link to={'/EventDesc/'+media.event.id}><img className="img-fluid" src={media.url} style={{width:300,height:360}}/></Link>
                                <div className="hover">
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="team_name">

                                {media.event ?

                                        <p>{media.event.title}<br/>

                                {media.event.created_at.substring(0,10)}</p> :null}
                            </div>
                        </div>
                    </div>
                        )
                    })
                    }
                </div>
                <div className=" offset-5 col-md-6 button-all"> <Link to="/MoreMedias" className="main_btn" href="#">See all Medias</Link></div>
            </section>

        );
    }
}


