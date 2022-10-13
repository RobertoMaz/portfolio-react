import "../style.css";


function ButtonNav() {



    // (d)=>{
    //     const $btnMenu = d.querySelector(".menu-btn"),
    //         $menu = d.querySelector(".menu");
    //     $btnMenu.addEventListener("click", (e) => {
    //         $btnMenu.firstElementChild.classList.toggle("none");
    //         $btnMenu.lastElementChild.classList.toggle("none");
    //         $menu.classList.toggle("is-active");
    //     });
    //     d.addEventListener("click", (e) => {
    //         if(!e.target.matches(".menu a")) return false

    //         $btnMenu.firstElementChild.classList.remove("none");
    //         $btnMenu.lastElementChild.classList.add("none");
    //         $menu.classList.remove("is-active");
    //     });












    return (  
        <button className="menu-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
            <svg className="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
        </button>
    );
}

export default ButtonNav;