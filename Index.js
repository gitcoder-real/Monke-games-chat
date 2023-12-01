const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // GitHub repository details
    const repoOwner = 'gitcoder-real';
    const repoName = 'Monke-games-chat';

    // Fetch discussions from the GitHub API
    axios.get(`https://api.github.com/repos/${repoOwner}/${repoName}/discussions`)
        .then(response => {
            const discussions = response.data;

            // Render the chat messages as an HTML list
            const chatMessages = discussions.map(discussion => `
                <li>
                    <h3>${discussion.title}</h3>
                    <p>${discussion.body}</p>
                </li>
            `).join('');

            // Return the HTML page with the chat messages
            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>GitHub Chat</title>
                </head>
                <body>
                    <ul>${chatMessages}</ul>
                </body>
                </html>
            `);
        })
        .catch(error => {
            console.error('Failed to fetch discussions:', error);
            res.status(500).send('Failed to fetch discussions');
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
