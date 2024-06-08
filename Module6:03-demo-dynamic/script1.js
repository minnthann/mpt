document.getElementById('fetch-button').addEventListener('click', function() {
    // URL for fetching GitHub users
    const url = 'https://api.github.com/users';

    // Fetch the user data from GitHub API
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Select the container to display the user list
            const userList = document.getElementById('user-list');

            // Clear the container before adding new users
            userList.innerHTML = '';

            // Loop through the first 5 users and create HTML elements for each
            for (let i = 0; i < 5; i++) {
                const user = data[i];

                // Create a div element for the user
                const userDiv = document.createElement('div');

                // Create an anchor element for the user's GitHub profile
                const userLink = document.createElement('a');
                userLink.href = user.html_url;
                userLink.textContent = user.login;
                userLink.target = '_blank'; // Open link in a new tab

                // Append the anchor to the div
                userDiv.appendChild(userLink);

                // Append the div to the container
                userList.appendChild(userDiv);
            }
        })
        .catch(error => {
            console.error('Error fetching GitHub users:', error);
        });
});
