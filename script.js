//const button = document.getElementsByClassName("tus");
const body = document.querySelector("body");



//button.addEventListener("click",()=>{
//    body.classList.toggle="darkMode";
//    body.classList.toggle="standartMode";
//})

function dark_mode()
{

    document.getElementById("body").classList.toggle('darkMode');
    document.getElementById("body").classList.toggle('standartMode');

    document.getElementById("navigation").classList.toggle('navbar');
    document.getElementById("navigation").classList.toggle('navbar_dark');

    document.getElementById("button").classList.toggle('tus');
    document.getElementById("button").classList.toggle('tus2');

    document.getElementById("home").classList.toggle('home_standart');
    document.getElementById("home").classList.toggle('home_dark');

    document.getElementById("about").classList.toggle('about_standart');
    document.getElementById("about").classList.toggle('about_dark');

    document.getElementById("contact").classList.toggle('contact_standart');
    document.getElementById("contact").classList.toggle('contact_dark');

    document.getElementById("instagram").classList.toggle('icon_Ig');
    document.getElementById("instagram").classList.toggle('darkicon_Ig');

    document.getElementById("linkedin").classList.toggle('icon_Li');
    document.getElementById("linkedin").classList.toggle('darkicon_Li');

    document.getElementById("spotify").classList.toggle('icon_Sp');
    document.getElementById("spotify").classList.toggle('darkicon_Sp');

    document.getElementById("cv").classList.toggle('icon_Cv');
    document.getElementById("cv").classList.toggle('darkicon_Cv');

    document.getElementById("links").classList.toggle('navbar');
    document.getElementById("links").classList.toggle('navbar_dark');

}

