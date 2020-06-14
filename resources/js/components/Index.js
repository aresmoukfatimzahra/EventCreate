import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";
import IndexEvents from "./Events/IndexEvents";
import pic from '../../../public/img/gens.jpg';
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


export default class Index extends Component {
    render() {
        return (
            <div>
               <HeaderTemplate/>
                   <HomeBanner/>
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

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
