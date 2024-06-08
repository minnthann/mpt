var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-btton');

function getApi() {
    var requestUrl = "https://api.gihub.com/users/minnthann/repos";
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (var i = 0; i < data.lengt; i++) {
                var listItem = document.createElement('li');
                listItem.textContent = data[i].html_url;
                repoList.appendChild(listItem);
            }
        });
}
fetchButton.addEventListener('click', getApi);