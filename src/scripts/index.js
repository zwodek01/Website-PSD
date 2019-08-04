import '../styles/index.scss';

const barsIcon = document.querySelector(".fa-bars");
const list = document.querySelector(".navigation__list");
const link = document.querySelectorAll(".navigation__list-link");

barsIcon.addEventListener('click', () => {
    list.classList.toggle('hide');
})

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', () => {
        list.classList.add('hide');
    })
}

// console.log(window.pageYOffset)

// function getScroll {
//     console.log(window.pageYOffset);
// }

// getScroll();