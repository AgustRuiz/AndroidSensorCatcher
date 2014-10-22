/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var accelerometerX = document.getElementById("accelerometerX");
var accelerometerY = document.getElementById("accelerometerY");
var accelerometerZ = document.getElementById("accelerometerZ");



// Función para lanzar acelerómetro
//
function launchAccelerometer() {
    navigator.vibrate(3000);
    while (true) {
//        accelerometerX.innerHTML = "acceleration.x";
//        accelerometerY.innerHTML = "acceleration.y";
//        accelerometerZ.innerHTML = "acceleration.z";
        navigator.accelerometer.getCurrentAcceleration(onAccelerometerSuccess, onAccelerometerError);
//        alert("adios");
    }
}

// onSuccess: Get a snapshot of the current acceleration
//
function onAccelerometerSuccess(acceleration) {
    accelerometerX.innerHTML = acceleration.x;
    accelerometerY.innerHTML = acceleration.y;
    accelerometerZ.innerHTML = acceleration.z;
//    accelerometerX.innerHTML = "acceleration.x";
//    accelerometerY.innerHTML = "acceleration.y";
//    accelerometerZ.innerHTML = "acceleration.z";
}

// onError: Failed to get the acceleration
//
function onAccelerometerError() {
    accelerometerX.innerHTML = "<strong><em>Error en la lectura</em></strong>";
    accelerometerY.innerHTML = "<strong><em>Error en la lectura</em></strong>";
    accelerometerZ.innerHTML = "<strong><em>Error en la lectura</em></strong>";
}
