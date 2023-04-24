import key from './spotifyKey.js'

const API_KEY = "AIzaSyCO61s_ZE22pHvHCWeHbVCUipk5lGL8zjI";
const spotifyAcessKey = key;

const playlist = "37i9dQZF1E38h7IonFYQ24";

let urlSpotify = `https://api.spotify.com/v1/playlists/${playlist}?access_token=${spotifyAcessKey}`;

fetch(urlSpotify)
  .then(async (response1) => {
    return await response1.json();
  })
  .then(async (data) => {
    data.tracks.items.forEach((element) => {
      const searchVideo = element.track.album.name;
      const result = searchVideo.replace(/ /g, "+");
      console.log(result)
    });
  });
