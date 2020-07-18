import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import event01 from "../../../../public/assets/img/event-01.jpg";
import event02 from "../../../../public/assets/img/event-02.jpg";
import event03 from "../../../../public/assets/img/event-03.jpg";
import event04 from "../../../../public/assets/img/event-04.jpg";
import guitarist from "../../../../public/assets/img/guitar.jpg";
export default class Program extends React.Component {
    render() {

        return (
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
                            <div className="image"  style={{backgroundImage: `url(${event01})`}}></div>
                            <div className="unit-9-content">
                                <h2>classNameic Songs For classNameic People</h2>
                                <span>Friday 1:00pm &mdash; 2:30pm</span>
                            </div>
                        </a>

                        <div className="col2 ml-auto">

                            <a href="#" className="col2-row1 unit-9 no-height" data-aos="fade-up" data-aos-delay="200">
                                <div className="image"   style={{backgroundImage: `url(${event02})`}}></div>
                                <div className="unit-9-content">
                                    <h2>classNameic Songs For classNameic People</h2>
                                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                                </div>
                            </a>

                            <a href="#" className="col2-row2 unit-9 no-height" data-aos="fade-up" data-aos-delay="300">
                                <div className="image"   style={{backgroundImage: `url(${event03})`}}></div>
                                <div className="unit-9-content">
                                    <h2>classNameic Songs For classNameic People</h2>
                                    <span>Friday 1:00pm &mdash; 2:30pm</span>
                                </div>
                            </a>


                        </div>

                    </div>
                    <div className="site-block-retro d-block d-md-flex" style={{marginTop: 100}}>
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
        )}
}
