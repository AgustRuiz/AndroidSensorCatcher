cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device-motion/www/Acceleration.js",
        "id": "org.apache.cordova.device-motion.Acceleration",
        "clobbers": [
            "Acceleration"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-motion/www/accelerometer.js",
        "id": "org.apache.cordova.device-motion.accelerometer",
        "clobbers": [
            "navigator.accelerometer"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/network.js",
        "id": "org.apache.cordova.network-information.network",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.network-information/www/Connection.js",
        "id": "org.apache.cordova.network-information.Connection",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/GlobalizationError.js",
        "id": "org.apache.cordova.globalization.GlobalizationError",
        "clobbers": [
            "window.GlobalizationError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.globalization/www/globalization.js",
        "id": "org.apache.cordova.globalization.globalization",
        "clobbers": [
            "navigator.globalization"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device-motion": "0.2.11-dev",
    "org.apache.cordova.geolocation": "0.3.11-dev",
    "org.apache.cordova.network-information": "0.2.14-dev",
    "org.apache.cordova.globalization": "0.3.3-dev",
    "org.apache.cordova.device-orientation": "0.3.10-dev"
}
// BOTTOM OF METADATA
});