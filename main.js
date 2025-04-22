function toggleMenu() {
    const navlist = document.querySelector('.navlist');
    const menuIcon = document.getElementById('menu-icon');

    navlist.classList.toggle('open');
    menuIcon.classList.toggle('bx-x'); 
}


document.querySelectorAll('.navlist a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navlist').classList.remove('open');
        document.getElementById('menu-icon').classList.remove('bx-x');
    });
});