import React,{Component} from 'react';
import ReactDOM from 'react-dom';


export default class ContactInfo extends React.Component {
    render() {
        return (
<section className="home_map_area"  style={{backgroundColor:"black"}}>
    <div id="mapBox2" className="mapBox2"
         data-lat="40.701083"
         data-lon="-74.1522848"
         data-zoom="13"
         data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
         data-mlat="40.701083"
         data-mlon="-74.1522848">
    </div>
    <div className="home_details">
        <div className="container">
            <div className="box_home_details" style={{backgroundColor: "#adb5bd}"}}>
                <div className="media">
                    <div className="d-flex">
                        {/*<i className="lnr lnr-home"></i>*/}
                    </div>
                    <div className="media-body">
                        <h4>California, United States</h4>
                        <p>Santa monica bullevard</p>
                    </div>
                </div>
                <div className="media">
                    <div className="d-flex">
                        {/*<i className="lnr lnr-clock"></i>*/}
                    </div>
                    <div className="media-body">
                        <h4>Monday to Wednesday</h4>
                        <p>17-19 June, 218</p>
                    </div>
                </div>
                <div className="media">
                    <div className="d-flex">
                        {/*<i className="lnr lnr-envelope"></i>*/}
                    </div>
                    <div className="media-body">
                        <h4>support@colorlib.com</h4>
                        <p>Send us your query anytime!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        );
    }
}
