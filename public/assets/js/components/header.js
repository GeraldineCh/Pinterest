'use strict';

const Header = (update) => {
    const header = $('<header></header>');
    const title = $('<nav class="navbar navbar-default"></nav>');
    const title2 = $('<div class="container-fluid"></div>');
    const title3 = $('<div class="container-fluid"></div>');
    const title4 = $('<div class="navbar-header"></div>');
 const title5 = $('<a class="navbar-brand" href="www.pinterest.com"></a>');
 const logo = $('<img alt="Brand" class="logo" src="assets/img/pinterest-logo.png">');
    
 title5.append(logo);
 title4.append(title5);
 title3.append(title4);
 title2.append(title3);
 title.append(title2);
    header.append(title);
    
    return header;
}

  

