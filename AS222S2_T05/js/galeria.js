const  fulImgBox  =  documento . getElementById ( "fulImgBox" ) ,
FulImg  =  documento . getElementById ( "FulImg" ) ;

function  openFulImg ( referencia ) {
    fulImgBox.style.display  =  "flex" ;
    FulImg . origen  =  referencia

}
function  cerrarImg ( ) {
    fulImgBox.style.display  =  "none" ;
}