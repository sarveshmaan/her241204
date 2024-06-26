const sections = document.querySelectorAll("section");
const nav = document.querySelector("nav");
const navList = document.querySelectorAll(".nav-list li");

const options = {
    threshold : "0.6"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(( e) => {

    if (e.isIntersecting) {
        
        if (e.target.id !== "welcome"){
            nav.classList.add("active");
        }else {
            nav.classList.remove("active");
        }

        navList.forEach(link => {

            link.classList.remove("active");

            if (e.target.id === link.dataset.nav) {
                link.classList.add("active");
            }
        }) 

    }

    });

}, options );

sections.forEach((section) => {
    observer.observe(section);
});

