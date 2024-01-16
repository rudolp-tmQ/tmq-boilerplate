import { Logger } from "@tmq-dev-ph/tmq-dev-core-client";
import { createRoot } from "react-dom/client";
import { Meteor } from "meteor/meteor";
import React from "react";

import Client from "../../api/client/classes/Client";
import App from "../../ui/App";

Meteor.startup(() => {
    const onReady = () => {
        const container = document.getElementById("react-target");
        const root = createRoot(container);
        document.body.appendChild(container);
        root.render(<App />);
    };
    const start = () => {
        Client.startHandshake().then((ready) => {
            Logger.showNotice("Client is ready.");
            if (ready)
                onReady();
            else
                start();
        }).catch(() => {
            Logger.showError("Invalid client version. Please update your client.");
        });
    };
    start();
});
