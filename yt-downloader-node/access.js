import request from 'request'

var client_id = '66b3d490b2ac4b3fbe390cf5d3521b69';
var client_secret = '9e933a7c546d4531964d788abd9ca323';

var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    console.log("tokenKEY IS:" +token)
  }
});