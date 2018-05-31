var exec = require('cordova/exec');

//apple watch class
var NUSAppleWatchConnectivity = function(){};

NUSAppleWatchConnectivity.init = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, "NUSAppleWatchConnectivity", "init", []);
};


NUSAppleWatchConnectivity.messageReceiver = function (onNewMessageCallback, errorCallback) {
    exec(onNewMessageCallback, errorCallback, "NUSAppleWatchConnectivity", "messageReceiver", []);
};

NUSAppleWatchConnectivity.sendMessage = function (message, successCallback, errorCallback) {
    exec(successCallback, errorCallback, "NUSAppleWatchConnectivity", "sendMessage", [message]);
};


module.exports = NUSAppleWatchConnectivity;
