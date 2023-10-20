const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropMenu = document.querySelector('.navbar');

var icon = document.querySelector(".icon");
var iconBtn = document.querySelector('.icon i');

function toggledrop(){
    dropMenu.classList.toggle('open')
    const isOpen =dropMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'ri-arrow-up-s-line'
        : 'ri-menu-line'
}

function theme(){

    document.body.classList.toggle("darkTheme");

    const isOn =document.body.classList.contains("darkTheme")

    iconBtn.classList = isOn
        ?   'ri-moon-fill'
        :   'ri-sun-fill'


}

