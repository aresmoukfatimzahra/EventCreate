import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import HeaderTemplate from "../HeaderTemplate";




export default class HomeBanner extends React.Component {
    render() {
        return (
<div>
  {/*header*/}

<section className="home_banner_area" style={{ backgroundImage: `url(${this.props.pic})` }}>
    <div className="banner_inner">
        <div className="container">
            <div className="banner_content">
                {/*<h2>Build your Event in Minutes</h2>*/}
                {/*<p>Get started by creating an event . From there, you can quickly add content, import images or videos,*/}
                {/*    customize your fonts. It's that easy.</p>*/}
                <p>{this.props.text}</p>
                <a className="banner_btn" href="#welcome_area">View More Details</a>
            </div>
        </div>
    </div>
</section>
    </div>
);
}
}

