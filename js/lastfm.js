async function LastPlayed(onfetch) {
    
    const url = `https://lastfm-last-played.biancarosa.com.br/Chaspen/latest-song`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        // console.log(json);
        // console.log(json.track.name)
        // console.log(json.track.artist['#text'])
        document.getElementById("cover").src = json.track.image[2]['#text']
        if (json.track.image[2]['#text'] == "") {
            document.getElementById("cover").src = "/img/cover-not-found.png"
        }
        document.getElementById("artist").innerHTML = json.track.artist['#text'];
        document.getElementById("songtitle").innerHTML = json.track.name;
        document.getElementById("nowplaying").onclick = function(){ window.open(json.track.url)};
        

        onfetch();
    } catch (error) {
        console.error(error.message);     
    }
}

LastPlayed();