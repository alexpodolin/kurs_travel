'use strict';

//Показать скрытое под-меню слева
function showLeftSubmenu(thisel) {	
	var subMenu = document.getElementsByClassName('main__menu_nested'),
		i = 0;
	for(i; i < subMenu.length; i++ )
	{
		subMenu[i].className = subMenu[i].className.replace('main__menu_nested_show', '').trim();
	}

// добавим в css class="main__menu_nested_show" тому элементу, куда кликаем
thisel.parentNode.getElementsByClassName('main__menu_nested')[0].className += ' main__menu_nested_show';
}


// Меню для страницы теплоходов
function showShipMenu(thisel) {
	var subMenuShip = document.getElementsByClassName('main__menu_ship_nav'),
		i = 0;
	for(i; i < subMenuShip.length; i++ )
	{
		subMenuShip[i].className = subMenuShip[i].className.replace('main__menu_ship_nav_show', '').trim();
	}

// добавим в css class="main__menu_ship_nav_show" потомку элемента, куда кликаем
thisel.parentNode.getElementsByClassName('main__menu_ship_nav')[0].className += ' .main__menu_ship_nav_show';
}

//Появление меню при нажатии кнопки на разрешении < 480px
function showMenuHeader() {
	document.getElementsByClassName('header__menu')[0].style.display = "block";
	document.getElementsByClassName('header__menu')[0].style.margin = "5px 0 0 0";
}

///////////////////////////////////////////////////////////////
// use wordpress jquery

function addShipSubmenu(el) {
	console.log(el);
}