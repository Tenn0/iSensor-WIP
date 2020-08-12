
function getValueFromHSajax() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://192.268.2.100:8123/api/states/sensor.outside_temperature")
    request.setRequestHeader("Authentification", "Bearer [token]");
    request.setRequestHeader("Content-Type", "application/json");
    request.send();
    console.log("hi!!");
    request.addEventListener('load', function(event) {
        if (request.status = 200) {
           console.log("response: " + request.responseText);
        } else {
           console.warn("responee" + request.statusText, request.responseText);
        }
     });
     if( request.status = 200){
        console.log("OK");
     }
     alert("hi");
     console.log("prob response: " + request.response);
}

function getValueFromHSfetch(){
   var request = fetch(url="http://localhost:8123/api/states/sensor.outside_temperature",{
      mode: 'cors',
      headers:{
         "Authentification": "tenn0 eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIwYzdhZTVjMjdjMDU0Nzg5YjExMzMzM2E4NWExMGY3YiIsImlhdCI6MTU5NzE5NDMyNSwiZXhwIjoxOTEyNTU0MzI1fQ.KRir-HwzFOE807Wk6j4QXE9hAqvYutGYkEZuJ9Ph9Z4",
         "Content-Type": "application/json"
      }
   });
   console.log(request.response);



}
   var test = document.getElementById('test1')
   test.addEventListener('click', getValueFromHSfetch, true);1


   