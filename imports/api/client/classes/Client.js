import { Watcher, Adapter, Account } from "@tmq-dev-ph/tmq-dev-core-client";
import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

Adapter.Accounts = Accounts;
Adapter.Meteor = Meteor;
Adapter.Mongo = Mongo;

class Client extends Watcher {
    /**
     * @type {Account}
     */
    #account;
    constructor(parent) {
        super(parent);
        this.secureTransaction();
        this.#account = new Account(this);
    }
    get Account() {
        return this.#account;
    }
}

export default (Adapter.ClientInstance = new Client());