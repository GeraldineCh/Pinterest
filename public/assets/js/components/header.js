'use strict';

const Header = (update) => {
    const header = $('<header></header>');
    const title = $('<form class="form-inline center navbar-fixed-top"></form>');
    const title2 = $('<div class="container-fluid"></div>');
    const title3 = $('<div class="form-inline"></div>');
    const title4 = $('<div class="form-group"></div>');
 const logo = $('<img src="assets/img/pinterest-logo.png" href="#" class="img-header" alt="">');
 const search = $('<input type="text" class="form-control searcher visible-md" placeholder="Buscar">');
 const user = $('<img src="assets/img/icon-profile.png" class="img-header" alt="">');
 const menu = $('<img src="assets/img/menu.png" class="hmenu" alt="">');
 const message = $('<img src="assets/img/message.png" class="img-header" alt="">');
    
 title4.append(logo);
 title4.append(search);
 title4.append(user);
 title4.append(menu);
 title4.append(message);
 title3.append(title4);
 title2.append(title3);
 title.append(title2);
 header.append(title);
    
    return header;
}

 