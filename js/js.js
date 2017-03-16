'use strict';

//Появление меню при нажатии кнопки на разрешении < 480px
function showMenuHeader() {
	document.getElementsByClassName('header__menu')[0].style.display = "block";
	document.getElementsByClassName('header__menu')[0].style.margin = "5px 0 0 0";
}

//Уберем класс в меню для 
//корректного отображения при разрешении <= 480px
// function rmLinkAlignment() {
// 	var scrWidth = screen.width;

// 	if (scrWidth <= 480) {
// 		var menuLinkEl = document.getElementsByClassName('main__menu_basic_link_alignment');

// 		 for (var i = 0; i < menuLinkEl.length; i++) {
// 			menuLinkEl[0].className = menuLinkEl[0].className.replace(' main__menu_basic_link_alignment', ' ');		 	
// 		 }
// 	}
// }

// rmLinkAlignment();


// window.addEventListener('load', rmLinkAlignment, false);

