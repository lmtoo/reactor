'use strict';

import React         from 'react';
import API           from '../services/NexusService';
import DocumentTitle from 'react-document-title';
import Routes from '../Routes';

const propTypes = {
};

class Config extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.refs.url.value = API.defaultOrLastTarget();
    }

    onSubmit(e) {
        e.preventDefault();
        console.log( this.context.router);
        console.log(Routes.context);
        console.log(Routes);
        console.log(this.refs.url.value);
        this.props.startCallback(this.refs.url.value);
    }

    render() {
        return (
            <div id="config">
                <div className="header">
                    <h1 id="logo"><a>Reactor Pylon</a></h1>
                    <p className="description">Connect to the Nexus API to start monitoring a Reactor System.</p>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <p>
                            <input ref="url" placeholder="API URL to monitor" className="form-control" type="text" />
                        </p>
                        <p className="checkbox">
                            <label><input ref="opt1" checked type="checkbox" /> Graph Stream</label>
                            <label><input ref="opt1" checked type="checkbox" /> System Stats Stream</label>
                            <label><input ref="opt1" checked type="checkbox" /> Log Stream</label>
                            <label><input ref="opt1" checked type="checkbox" /> Metrics Stream</label>
                        </p>
                        <p className="action">
                            <button className="btn btn-primary btn-block" type="submit">Run</button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }

}

Config.contextTypes = {
    router: React.PropTypes.object.isRequired
};

Config.propTypes = propTypes;

export default Config;