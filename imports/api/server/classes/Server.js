import { Core, Adapter } from "@tmq-dev-ph/tmq-dev-core-server";
import { Picker } from "meteor/meteorhacks:picker";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import bodyParser from "body-parser";
import multer from "multer";
import cors from "cors";

Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;
Adapter.Accounts = Accounts;

Picker.middleware(multer().any());
Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded({ extended: false }));
Picker.middleware(cors());

Adapter.Picker = Picker;

class Server extends Core {
    constructor(settings) {
        super(settings);
        this.loadDefaultServices();
    }
}

export default (Adapter.ServerInstance = new Server(Meteor.settings));