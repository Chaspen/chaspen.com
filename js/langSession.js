

function LanguagePreview(lang) {
    if (lang == "pl") {
        document.getElementById('select-txt').innerHTML = 'Wybierz język'
        document.getElementById('warning').innerHTML = 'Ta witryna wymaga wsparcia JavaScript do poprawnego działania.<br><br>Ta witryna stara się odtworzyć wizualny styl stron GeoCities z wczesnych lat 2000, przez co może ona wywołać problemy dla osób z padaczką/epilepsją czy innym osobom podatnym na bodźce wizualne.'
        document.getElementById('continue').innerHTML = "Kontynuuj?"
    } else if (lang == 'en') {
        document.getElementById('select-txt').innerHTML = "Select a language"
        document.getElementById('warning').innerHTML = "This site requires JavaScript in order to function properly.<br><br>The site is supposed to resemble old early-2000's GeoCities sites, which may cause eye strain for some people."
        document.getElementById('continue').innerHTML = "Continue?"
    }
    else if (lang == "tok") {
    	document.getElementById('select-txt').innerHTML = "toki seme?"
        document.getElementById('warning').innerHTML = "lipu ni li wile e toki ilo Javascript la ona li pali. <br><br>lipu ni li o sama lipu GeoCities la ken la ona li lukin ike tawa sina"
        document.getElementById('continue').innerHTML = "tawa ala tawa?"
    }
}

function LanguagePreviewOnclick() {
    document.getElementById('lang-select-wrapper').style.opacity = 0
    setTimeout(() => {
            document.getElementById('container').style.display = 'initial'
    }, 0);

}

function LangSessionSet(lang) {
    sessionStorage.setItem("language", lang);
    LanguagePreviewOnclick();
}
