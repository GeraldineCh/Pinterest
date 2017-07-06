const titlePage = () => {
    const title = $('<div class="title"></div>');
    const titleboard = $('<h1 class="title__title weight-800">Web UI<h1>');
    const pines = $('<p class="title__pines"><strong>89</strong> Pines</p>');
    const followers = $('<p class="title__pines"><strong>50</strong> Seguidores</p>');
    const imguserprinc = $('<img class="title__userprinc" alt="arabela" role="presentation" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_75.jpg">');
    const follow = $('<p class="title__pines"><strong>80</strong> Seguidores</p>');
 

    title.append(titleboard);
    title.append(pines);
    title.append(follow);
    title.append(imguserprinc);

    return title;
}
