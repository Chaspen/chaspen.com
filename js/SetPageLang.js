SessionLanguage = sessionStorage.getItem("language")

var Sona;
var Links;


function loopDescUntilTag(element, tagname, callback) {
    for (const childElement of element.children) {
        loopDescUntilTag(childElement, tagname, callback);
    } 
    if (element.tagName != tagname) return;
    callback(element);
}

async function getData(onfetch) {
    const url = `../lang/${SessionLanguage}.json`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json);
        if (window.location.pathname.slice(0,5) == "/home") {
            document.getElementById('container').style.display = 'inline'
            console.log('meow :3')
            document.getElementById("bio").innerHTML = json.home['main-txt'];
            Sona = json.home.sona;
            Links = json.home.links;
        } else if (window.location.pathname.slice(0,5) == "/sona") {
            document.getElementById("desc").innerHTML = json.sona['top-text']
            let gallery = document.getElementById('gallery');
            loopDescUntilTag(gallery, 'P', element => {
                let originalText = element.innerHTML;
                element.innerHTML = json.sona.credit + originalText;
            })
        } else if (window.location.pathname.slice(0,6) == "/links") {
            document.getElementById('container').style.display = "inline"
            document.getElementById('socials').innerHTML = json.links.socials;
            document.getElementById('media').innerHTML = json.links.media;
            document.getElementById('software').innerHTML = json.links.software;
        } else if (window.location.pathname.slice(0,6) == "/about") {
            document.getElementById('container').style.display = 'flex'
            document.getElementById('p1').innerHTML = json.about.p1;
            document.getElementById('p2').innerHTML = json.about.p2
            document.getElementById('p3').innerHTML = json.about.p3
        }
        onfetch();
    } catch (error) {
        console.error(error.message);
    }
}


