var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    fetch(apiUrl).then(function(response) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
        });
    });
};
getUserRepos("lernantino");