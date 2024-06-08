// document.getElementById('fetchIssues').addEventListener('click', () => {
//     const repo = 'facebook/react';
//     const issuesUrl = `https://api.github.com/repos/${repo}/issues?state=open&per_page=10&sort=created&direction=desc`;
  
//     fetch(issuesUrl)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         const issuesContainer = document.getElementById('issues');
//         issuesContainer.innerHTML = '';
//         data.forEach(issue => {
//           const issueElement = document.createElement('div');
//           issueElement.innerHTML = `
//             <h3><a href="${issue.html_url}" target="_blank">${issue.title}</a></h3>
//             <p>${issue.body}</p>
//           `;
//           issuesContainer.appendChild(issueElement);
//         });
//       })
//       .catch(error => console.error('Error fetching issues:', error));
//   });
  

// Example repository: 'facebook/react'
const repo = 'facebook/react';
const issuesUrl = `https://api.github.com/repos/${repo}/issues?state=open&per_page=10&sort=created&direction=desc`;

fetch(issuesUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Handle the data as needed
  })
  .catch(error => console.error('Error fetching issues:', error));
