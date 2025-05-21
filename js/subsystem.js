const cards = document.querySelectorAll(".inner_card");

cards.forEach(card=> 
    {
        card.addEventListener("click",function () {
            card.classList.toggle('is-flipped');
        });
    });
