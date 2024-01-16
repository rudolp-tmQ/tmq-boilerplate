export default {
    HelloWord: function ({ request }, callback) {
        if (request)
            callback(null, "Hello World!");
        else
            callback(null, "Hello World!");
    }
};