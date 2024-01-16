import { BrowserRouter, Routes, Route } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import React, { Component } from "react";
import PropTypes from "prop-types";

import Client from "../api/client/classes/Client";
import Main from "./components/Main";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (!this.props.isReady)
            return <h4>Loading...</h4>;
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    {/* <Route path="*" element={<PageNotFound />} /> */}
                </Routes>
            </BrowserRouter>
        );
    }
}

App.propTypes = {
    isReady: PropTypes.bool.isRequired
};

export default withTracker(() => {
    return { isReady: Client.Account.init() };
})(App);

