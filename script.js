const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropMenu = document.querySelector('.navbar');

function toggledrop(){
    dropMenu.classList.toggle('open')
    const isOpen =dropMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'ri-arrow-up-s-line'
        : 'ri-menu-line'
}

