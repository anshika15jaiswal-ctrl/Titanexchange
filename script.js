document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.querySelector(".hero button");

    loginButton.addEventListener("click", function () {
        alert("Login page is coming soon!");
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){
        card.addEventListener("click", function(){
            alert("Match details will be available soon.");
        });
    });

});
