'use strict';

const Header = (update) => {
    const header = $('<header></header>');
    const title = $('<nav class="navbar navbar-default"></nav>');
    const title2 = $('<div class="container-fluid"></div>');
    const title3 = $('<div class="form-inline"></div>');
    const title4 = $('<div class="navbar-header"></div>');
 const logo = $('<img src="assets/img/pinterest-logo.png" href="#" class="img-header" alt="">');
 const search = $('<input type="text" class="form-control searcher col-md-4" placeholder="Search">');
 const user = $('<img src="assets/img/icon-profile.png" class="img-header" alt="">');
 const menu = $('<span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span>');
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

  


