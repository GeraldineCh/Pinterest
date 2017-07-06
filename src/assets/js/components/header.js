'use strict';

const Header = (update) => {
    const header = $('<header></header>');
    const title = $('<nav class="navbar navbar-default"></nav>');
    const title2 = $('<div class="container-fluid"></div>');
    const title3 = $('<div class="container-fluid"></div>');
    const title4 = $('<div class="navbar-header"></div>');
 const search = $('<input type="text" class="form-control searcher" placeholder="Search">');
 const logo = $('<img src="assets/img/pinterest-logo.png" class="logo" alt="">')
    
 title4.append(logo);
 title4.append(search);
 title3.append(title4);
 title2.append(title3);
 title.append(title2);
    header.append(title);
    
    return header;
}

  

