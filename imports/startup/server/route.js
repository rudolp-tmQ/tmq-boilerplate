import { Adapter } from "@tmq-dev-ph/tmq-dev-core-server";

Adapter.Picker.route("/api/hello", function (params, request, response) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "plain/text");
    response.end("Hello World!");
});