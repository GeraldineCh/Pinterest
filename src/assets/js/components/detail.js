'use strict';

const detailModal = (detail,update) => {
  console.log(detail);
  console.log("modal");
  const modal= $('<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"></div>');
  const modaldialog= $('<div class="modal-dialog" role="document"></div>');
  const modalcontent= $('<div class="modal-content"></div>');
  const headerModal  =$('<div class="modal-header">'+
                            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                            '<div class="flex justify-between">'+
                              '<div class="flex">'+
                                '<div class="mr1 flex_center"><span class="glyphicon glyphicon-open" aria-hidden="true"></span></div>'+
                                '<div class="mr1 flex_center"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span></div>'+
                                '<div class="mr1 flex_center"><span class="glyphicon glyphicon-option-horizontal" aria-hidden="true"></span></div></div>'+
                                '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span>Guardar</button></div>'+
                        '</div>');
  const bodyModal =$('<div class="modal-body"></div>');
  const titulo    =$('<div class="titulo"></div>');
  const ImgModal  =$('<div><img src="'+detail.image.original.url +'" class="img-responsive" alt="Imagen modal"></div>');
  const coment    =$('<div class="coment"></div>');
  const coment1   =$('<div class="flex items-center justify-between coment_1"></div>');
  const coment3   =$('<div class="coment_1">'+
                          '<a><div class="flex items-center">'+
                                 '<div class="mr1"><img src="assets/img/arabelyuska.jpg" class="img-responsive mr1" alt="Arabela"></div>'+
                                 '<div> Arabela  lo ha guardado en '+detail.board.name+'<br>'+detail.note +'</div></div></a>'+
                        '</div>');
  const coment4   =$('<div>Comentarios</div>');

  const footerModal=$('<div class="modal-footer flex_center">Pines Relacionados</div>');
    modalcontent.append(headerModal);
    modalcontent.append(bodyModal);
    bodyModal.append(titulo);
    bodyModal.append(ImgModal);
    coment.append(coment1);
    coment.append(coment3);
    coment.append(coment4);
    bodyModal.append(coment);
    modalcontent.append(footerModal);
    modaldialog.append(modalcontent);
    modal.append(modaldialog);

      if (detail.metadata.article!= undefined){
         const title =$('<h5>'+ detail.metadata.article.name +'</h5>');
         const anexo    =$('<a><div class="flex  items-center"><div class="mr1 flex_center">'+
                                           '<img src="'+ detail.metadata.link.favicon +'" class="img-responsive mr1" alt="Arabela"></div>'+
                                      '<div><p>Articulo de<br>'+ detail.metadata.link.site_name +'</p></div>'+
                                   '</div></a>'+
                                   '<div><button type="button" class="btn btn-default">Visitar</button></div>');
         const coment2   =$('<div class="coment_1">'+ detail.metadata.article.description +'</div>');
         titulo.append(title);
         coment1.append(anexo);
         coment.append(coment2);
      }

    return modal;
};
