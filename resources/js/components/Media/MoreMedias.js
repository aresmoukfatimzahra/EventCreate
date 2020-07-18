import React,{Component} from 'react';
import HeaderTemplate from "../HeaderTemplate";
import HomeBanner from "../Events/HomeBanner";
import banner from '../../../../public/assets/img/banner/home-banner.jpg';
import team4 from '../../../../public/assets/images/img_3.jpg';
import { mediaIndex} from "../../services";
import { Link } from 'react-router-dom';



export default class MoreMedias extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            medias: [],
        }
    }

    componentWillMount() {
        const url=process.env.MIX_REACT_APP_ROOT

        mediaIndex(url+'/medias',data=>{
            this.setState({
                medias:data,
            })

        })
    }
    render() {
    let medias=this.state.medias

        return (
            <div>

                <HeaderTemplate/>
                <HomeBanner pic={banner} text={[<h2><strong>MEDIAS</strong></h2>]}/>
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                                <h3 id="welcome_area">MEDIAS</h3>
                            </div>
                        </div>
                        <div className="row">

                            {medias.map((media,i) => {
                                return media.event ?
                                    (<div className="col-md-6 col-lg-4 mb-5" data-aos="fade-up" data-aos-delay="100">
                                        <Link to={"/EventDesc/"+media.id}><img src={media.url} alt="Image" className="img-fluid" style={{width:340,height:300}}/></Link>

                                        <div className="p-4 bg-white">
                                            <h2 className="h5 text-black mb-3 text-center" style={{'color': '#517b14;'}} >EVENT <Link to={"/EventDesc/"+media.event.id} > {media.event.title}</Link></h2>
                                            <span style={{"color": "#6c757d",'textTransform': 'uppercase','fontSize':15}} className="d-block text-secondary small text-uppercase text-center">{media.event.created_at.substring(0,10)}</span>
                                            <hr/>
                                            <p>

                                                {media.event.description}
                                            </p>
                                        </div>
                                    </div>
                                ):null
                            })
                            }


                        </div>

                    </div>
                </div>
            </div>


        );
    }
}



