// $(document).ready(function () {
//     $(".sidemenu-toggler").click(() => {
//         $(".sidemenu").addClass("active");
//     });

//     $(".close").click(function () {
//         $(".sidemenu").removeClass("active");
//     });
// });

// () => {
//     document.querySelector("sidemenu-toggler").click(() => {
//         document.querySelector(".sidemenu").classList.add("active")
//     });

//     document.querySelector(".close").click(() => {
//         document.querySelector(".sidemenu").classList.remove("active")
//     });
// };

function och() {
    document.querySelector(".sidemenu").classList.add("active")
};


function yop() {
    document.querySelector(".sidemenu").classList.remove("active")
};

window.addEventListener('scroll', () => {
    document.querySelector(".sidemenu").classList.remove("active")
})



// SCROOL UP -----------
const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up_svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
scrollUpSvgPath.style.transition = `stroke-dashoffset 20ms`;

const getTop = () => window.pageYOffset || document.documentElement.scrollTop

//updateDashoffset
const updateDashoffset = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const dashoffset = pathLength - (getTop() * pathLength / height);

    scrollUpSvgPath.style.strokeDashoffset = dashoffset;
};

// onScroll
window.addEventListener('scroll', () => {
    updateDashoffset();

    if (getTop() > offset) {
        scrollUp.classList.add('scroll-up_active')
    } else {
        scrollUp.classList.remove('scroll-up_active')
    }
});
// click
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})