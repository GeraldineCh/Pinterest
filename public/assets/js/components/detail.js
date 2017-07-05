'use strict';

const detailModal = (rs) => {

    const divContent    = $('<div class="fondo"></div>');
    const divBg         = $('<div class="cont_modal"></div>');
    const divheader     = $('<div class="header_cont"><div class="flex justify-between">'+
                              '<div class="flex"><div class="mr1"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></div>'+
                              '<div class="mr1"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></div>'+
                              '<div class="mr1"><span class="glyphicon glyphicon-star" aria-hidden="true"></span></div></div>'+
                              '<div class="flex btn_save"><div class=""><button type="button" class="btn btn-default btn-lg">'+
                              '<span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span>salir</button></div></div>'
                              +'</div></div>');
    const divContimg    = $('<div class="cont_img"></div>');

    divBg.append(divheader);
    divBg.append(divContimg);
    divContent.append(divBg);

    return divContent;
}
