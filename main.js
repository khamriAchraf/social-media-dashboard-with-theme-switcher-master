function dark() {
    document.querySelector("body").classList.toggle("body-light");
    document.querySelector("h1").classList.toggle("dark");
    document.querySelector("h2").classList.toggle("dark");
    document.querySelector("h1 p").classList.toggle("dark");
    
    let count = document.querySelectorAll(".count");
    for (i = 0; i < count.length; ++i){
        count[i].classList.toggle("dark");
    }
    let cards = document.querySelectorAll(".myCard");
    for (i = 0; i < count.length; ++i){
        cards[i].classList.toggle("dark-card");
    }
    let titles = document.querySelectorAll(".title");
    for (i = 0; i < count.length; ++i){
        titles[i].classList.toggle("dark-title");
    }
}