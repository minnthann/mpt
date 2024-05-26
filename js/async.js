window.onload = function (){

var http = new XMLHttpRequest();
http.onreadystatechange = function (){

    if(http.readyState == 4 && http.status == 200){
        console.log(JON.parse(http.response));
    }
    // console.log(http);
};


http.open("GET", "data/tweets.json", true);
http.send ();
console.log("test");
// console.log (http);


};

// READY STATES
//  0 - request not initialized
//  1 - request has been set up
//  2 - request has been sent 
//  3 - request is in process 
//  4 - request is OfflineAudioCompletionEvent
