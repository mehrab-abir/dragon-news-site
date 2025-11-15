const openMenu = () =>{
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.remove('-translate-x-full')
}

const closeMenu = () => {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.add('-translate-x-full')
}

export { closeMenu, openMenu}
