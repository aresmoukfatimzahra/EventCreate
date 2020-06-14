import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import team1 from '../../../../public/img/team/team-1.jpg';
import HeaderTemplate from "../HeaderTemplate";




export default class HomeBanner extends React.Component {
    render() {
        return (
<div>
  {/*header*/}

<section className="home_banner_area">
    <div className="banner_inner">
        <div className="container">
            <div className="banner_content">
                <h2>Build your Event in Minutes</h2>
                <p>Get started by creating an event . From there, you can quickly add content, import images or videos,
                    customize your fonts. It's that easy.</p>
                <a className="banner_btn" href="#welcome_area">View More Details</a>
            </div>
        </div>
    </div>
</section>
    </div>
);
}
}
