

const http = require('http');

http.request({
    url: 'https://raw.githubusercontent.com/tesaq1/surge/main/test1.js',
    method: 'GET'
}, function(error, response) {
    if (error) {
        console.error('Failed to fetch the remote script:', error);
        return;
    }
    
    // Execute the remote script
    eval(response.data);
    
    // Now you can use functions and variables from the remote script
    // For example, if the remote script defines a function called hello():
    // hello();
}).end();

$done({});