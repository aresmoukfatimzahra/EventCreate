import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Example from "./Example";


export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Example/>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Example Component</div>

                            <div className="card-body">.</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
