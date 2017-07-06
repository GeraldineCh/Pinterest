const titlePage = () => {
    const title = $('<div class="title"></div>');
    const titleboard = $('<h1 class="title__title weight-800">Web UI<h1>');
    const pines = $('<p class="title__pines"><strong>89</strong> Pines</p>');
    const followers = $('<p class="title__pines"><strong>50</strong> Seguidores</p>');
    const imguserprinc = $('<img class="title__userprinc" alt="arabela" role="presentation" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_75.jpg">');
    const follow = $('<p class="title__pines"><strong>80</strong> Seguidores</p>');
 
    const prueba = $('<br><br><br><br><br><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur a dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, viLorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sit ab id ex, commodi quia eveniet beatae nihil natus reprehenderit tenetur, illo minima, vitae nemo. Illum recusandae atque aspernatur sit?</p>');
  
    
    title.append(titleboard);
    title.append(pines);
    title.append(follow);
    title.append(imguserprinc);
    title.append(prueba);
    
    return title;
}