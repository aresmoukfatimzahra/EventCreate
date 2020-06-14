import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class Footer extends React.Component {
    render() {
        return (
<footer className="footer-area p_120">
    <div className="container">
        <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
                <div className="single-footer-widget tp_widgets">
                    <h6 className="footer_title">Top Products</h6>
                    <ul className="list">
                        <li><a href="#">Managed Website</a></li>
                        <li><a href="#">Manage Reputation</a></li>
                        <li><a href="#">Power Tools</a></li>
                        <li><a href="#">Marketing Service</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="single-footer-widget news_widgets">
                    <h6 className="footer_title">Newsletter</h6>
                    <p>You can trust us. we only send promo offers, not a single spam.</p>
                    <div id="mc_embed_signup">
                        <form target="_blank"
                              action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                              method="get" className="subscribe_form relative">
                            <div className="input-group d-flex flex-row">
                                <input name="EMAIL" placeholder="Your email address" onFocus="this.placeholder = ''"
                                       onBlur="this.placeholder = 'Email Address '" required="" type="email"/>
                                    <button className="btn sub-btn">Subscribe</button>
                            </div>
                            <div className="mt-10 info"></div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 offset-lg-1">
                <div className="single-footer-widget instafeed">
                    <h6 className="footer_title">Instagram Feed</h6>
                    <ul className="list instafeed d-flex flex-wrap">
                        <img src="{{asset('img/instagram/Image-01.jpg')}}" alt=""/>

                            <li><img src="{{asset('img/instagram/Image-02.jpg')}}" alt=""/></li>
                            <li><img src="{{asset('img/instagram/Image-03.jpg')}}" alt=""/></li>
                            <li><img src="{{asset('img/instagram/Image-04.jpg')}}" alt=""/></li>
                            <li><img src="{{asset('img/instagram/Image-05.jpg')}}" alt=""/></li>
                            <li><img src="{{asset('img/instagram/Image-06.jpg')}}" alt=""/></li>
                            <li><img src="{{asset('img/instagram/Image-07.jpg')}}" alt=""/></li>
                            <li><img src="{{asset('img/instagram/Image-08.jpg')}}" alt=""/></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="row footer-bottom d-flex justify-content-between align-items-center">
            <p className="col-lg-8 col-md-8 footer-text m-0">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
            </p>
            <div className="col-lg-4 col-md-4 footer-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-behance"></i></a>
            </div>
        </div>
    </div>
</footer>

    );
    }
    }
