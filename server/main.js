import { WebAppInternals } from "meteor/webapp";
import { Meteor } from "meteor/meteor";

import Server from "../imports/api/server/classes/Server";
import "../imports/startup/server/index";

Meteor.startup(() => {
    const banner =
        "___ _  _ ____ ___  ____ _ _    ____ ____ ___  _    ____ ___ ____ \n" +
        "  |  |\\/| |  | |__] |  | | |    |___ |__/ |__] |    |__|  |  |___\n" +
        "  |  |  | |_\\| |__] |__| | |___ |___ |  \\ |    |___ |  |  |  |___\n";
    Server.startUp(banner);
    Server.startAllService();

    if (Meteor.isProduction && Server.Config.cdn && Server.Config.cdn.url) {
        WebAppInternals.setBundledJsCssUrlRewriteHook((url) => {
            return `${Server.Config.cdn.url}${url}`;
        });
    }
});

