import { ComponentT } from "@tmq-dev-ph/tmq-dev-core-client";
import { Outlet } from "react-router-dom";
import React from "react";

import Client from "../../api/client/classes/Client";

class Main extends ComponentT {
    constructor(props) {
        super(props);
        this.state = {};
        Client.setWatcher(this, this.UID);
    }
    render() {
        Client.initiateWatch(this.UID);
        return <Outlet />;
    }
}

export default Main;