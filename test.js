
function getValueFromHS() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://192.268.2.100:8123/api/states/sensor.outside_temperature")
    request.setRequestHeader("Authentification", "Bearer [token]");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    console.log("hi!!");
    request.addEventListener('load', function(event) {
        if (request.status >= 200 && request.status < 300) {
           console.log(request.responseText);
        } else {
           console.warn(request.statusText, request.responseText);
        }
     });
     alert("hi");
     console.log(request.response);
}


   var test = document.getElementById('test1')
   test.addEventListener('click', getValueFromHS, true);1
   