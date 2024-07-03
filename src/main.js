const menuBtn=document.getElementById("menu-btn");
const navLinks=document.getElementById("nav-links");
const menuBtnIcon=menuBtn.querySelector("i");

menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("open");

    const isOpen=navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen?"ri-close-line":"ri-menu-line");

});

navLinks.addEventListener("click",()=>{
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption = {
    origin:"bottom",
    distance:"50px",
    duration:1000,
}
//header container
ScrollReveal().reveal(".header_content p",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header_content h1",{
    ...scrollRevealOption,
    delay:300,
});
ScrollReveal().reveal(".header_content .header_btn",{
    ...scrollRevealOption,
   
});

//about container
ScrollReveal().reveal(".about_container .section_header",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".about_container .section_description",{
    ...scrollRevealOption,
    delay:700,
})

//blog container
ScrollReveal().reveal(".blog_card",{
    ...scrollRevealOption,
    interval:500,
});

const instagram = document.querySelector(".instagram_flex");

const instagramContent = Array.from(instagram.children);

instagramContent.forEach((item)=> {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidder",true);
    instagram.appendChild(duplicateNode);
})