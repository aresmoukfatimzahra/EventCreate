import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import IndexEvents from "./Events/IndexEvents";

import HeaderTemplate from "./HeaderTemplate";
import HomeBanner from "./Events/HomeBanner";
import TimeArea from "./Events/TimeArea";
import Schedule from "./Events/Schedule";
import ContactInfo from "./ContactInfo";
import PricesBox from "./PricesBox";
import Footer from "./Footer";
import WelcomeMessage from "./WelcomeMessage";
import Artists from "./Events/Artists";
import Media from "./Events/Media";
import { BrowserRouter as Router,Route,Switch,MemoryRouter } from 'react-router-dom';

import Routes from '../Routes';
import MoreEvents from "./Events/MoreEvents";
import banner from "../../../public/assets/img/banner/home-banner.jpg";

export default class Index extends Component {
    render() {
        return (

            <div>

                <HeaderTemplate/>


                   {/*<HomeBanner/>*/}
                <HomeBanner  pic={banner}
                             text={[  <h2>Build your Event in Minutes</h2>,
                                 <p>Get started by creating an event . From there, you can quickly add content, import images or videos,
                                     customize your fonts. It's that easy.</p>]}/>

                     <TimeArea/>
                     <div className="container">
                       <WelcomeMessage/>
                        <IndexEvents/>
                        <Artists/>
                        <Media/>
                        <Schedule/>
                      </div>
                      <ContactInfo/>
                      <div className="container">
                          <PricesBox/>
                     </div>
                <Footer/>

            </div>

        );
    }
}
const styles = {
    exampleStyle: {
        backgroundColor: 'red',
    }
};
// if (document.getElementById('example')) {
//     ReactDOM.render(<Index />, document.getElementById('example'));
// }