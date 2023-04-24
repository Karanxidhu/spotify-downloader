import request from "request";

var client_id = "66b3d490b2ac4b3fbe390cf5d3521b69";
var client_secret = "9e933a7c546d4531964d788abd9ca323";

var authOptions = {
  url: "https://accounts.spotify.com/api/token",
  headers: {
    Authorization:
      "Basic " +
      new Buffer.from(client_id + ":" + client_secret).toString("base64"),
  },
  form: {
    grant_type: "client_credentials",
  },
  json: true,
};

request.post(authOptions, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    var token = body.access_token;
    const API_KEY = "AIzaSyAq_weO6g6m9fOFPlYm98kJG32shSgw1A0";
    const spotifyAcessKey = token;

    const playlist = "37i9dQZF1E38h7IonFYQ24";

    let urlSpotify = `https://api.spotify.com/v1/playlists/${playlist}?access_token=${spotifyAcessKey}`;
    console.log(urlSpotify);
    fetch(urlSpotify)
      .then(async (response1) => {
        return await response1.json();
      })
      .then(async (data) => {
        // console.log(data);
        data.tracks.items.forEach((element) => {
          const searchVideo = element.track.album.name;
          const result = searchVideo.replace(/ /g, "+");
          let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${result}&type=video&key=${API_KEY}`;
          console.log(url)
          fetch(url).then(async(response2)=>{
            return response2.json();
          }).then(async(data2)=>{
            // console.log(data2)
            var videoId = data2.items[0].id.videoId;
            let videoUrl = `https://www.youtube.com/watch?v=${videoId}`
            console.log(videoUrl)
            const url3 = `https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=https%3A%2F%2Fyoutu.be%2F${videoId}&format=mp3&responseFormat=json&lang=en`;

            const options = {
                method: "GET",
                headers: {
                  "X-RapidAPI-Key":
                    "72c5a6d5damshbe2616b2e20bb1fp199936jsn3146af29a840",
                  "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com",
                },
              };
              console.log("DOWNLOAD lINKS HERE")
              setInterval((fetch(url3, options)
              .then((res) => res.json())
              .then((json) =>
              //  open(
                  // json.file, {app: {name: 'google chrome'}}
                  console.log(json)
                  // )
              )
              .catch((err) => console.error("error:" + err))),5000) 
              
          })
        });
      });
  }
});
