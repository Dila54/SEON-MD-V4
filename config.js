const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SEON-MD=KdolHQgb#3akmZNgdgoRMcWoqkY2E5GGE-ES6C2-YyEmfMuL0eU4', //Put Session-id Here
GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Dila54', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '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', //Put Your Github Auth Token
REPO_NAME: process.env.REPO_NAME || 'Seon md' //Bot Database Repo Name
};
