let getData = async(element)=>{
    const url3 = `https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=https%3A%2F%2Fyoutu.be%2F${element}&format=mp3&responseFormat=json&lang=en`;
    
                const options = {
                    method: "GET",
                    headers: {
                      "X-RapidAPI-Key":
                        "72c5a6d5damshbe2616b2e20bb1fp199936jsn3146af29a840",
                      "X-RapidAPI-Host": "t-one-youtube-converter.p.rapidapi.com",
                    },
                  };
                  
                //   console.log("DOWNLOAD lINKS HERE")
                  await fetch(url3, options)
                  .then((res) => res.json())
                  .then((json) =>
                  //  open(
                      // json.file, {app: {name: 'google chrome'}}
                      console.log(json.YoutubeAPI.titolo+":  "+json.file)
                      // )
                  )
                  .catch((err) => console.error("error:" + err));
}

let gettingData = async()=>{
    videoUrl.forEach(async(element) => {
        await getData(element);
        await new Promise(resolve => setTimeout(resolve, 5000));
    });
}


async function fetchData() {
    let videoUrl = ["lpJWLouHwZk",
"mXb3ctMMiH8",
"8O3P-g8daws",
"eAhujU3DmrM",
"f2LI9TqnLAA",
"x2mEkTUGm3Y",
"iJCV_2H9xD0",
"hBlO1i_WTiY",
"8O3P-g8daws",
"ek070hv2ksU",
"0Dw97w5P3cs",
"7A27D5NA1p8",
"2E4Pnaj-a34",
"rhP7QSWYY8c",
"SwuiwcwtPYE",
"gmfXl6kwxEY",
"FocW6RWpf_4",
"C5Eb8nNcA_s",
"2RLIApd5IP8",
"H1pebCzU0oM",
"kRDoobWfQuQ",
"NapGAjs2nXE",
"f2LI9TqnLAA",
"7A27D5NA1p8",
"7A27D5NA1p8",
"5DNUStVy9lM",
"NIoYHZhL-ac",
"Rrd3mfCuz6U",
"3wUz-HR9dfw",
"FocW6RWpf_4",
"Nabcq9GqOxY",
"2L6gsn7rGqI",
"rKDJzETOItk",
"AHo7_m8TDic",
"wZDYqAjKq54",
"8O3P-g8daws",
"NapGAjs2nXE",
"Y40iZmuylKk",
"f2LI9TqnLAA",
"v1idUvYyEr8",
"dQe6WftWjKY",
"RTa8QgsDcqk",
"vTclN-xmX4E",
"FG67QetY9qk",
"THOP4ThY-Jg",
"H1pebCzU0oM",
"Xwxy3c8ghSg"]
    
    for (const data of videoUrl) {
      // Make the API request for the current data object
      await getData(data);
      
      // Wait for the specified delay before making the next request
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  fetchData();