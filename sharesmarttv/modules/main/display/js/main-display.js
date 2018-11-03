/* 
    ShareSmartTV v1 - Calls to DISPLAY functions
    ===============
    
    Este fichero se utiliza unicamente para declarar las funciones sharesmarttv.receive y sharesmarttv.ready. 

    sharesmarttv.receive: 
    Recibe las llamadas de funciones solicitadas desde un dispositivo remoto a este.

    sharesmarttv.ready: 
    Cuando el dispositivo esta listo para recibir llamadas a la funcion.

    El resto de las funciones propias de su sitio web deben declarados fuera de este fichero.
*/

    /* Define ShareSmartTV TAG for this website */
    sharesmarttv.tag = 'display';

    /* WHEN THIS DEVICE IS READY */
    sharesmarttv.ready = function (){

        /* Open the remote control from remote device */
        var data = {
            func: 'openURL',
            param: 'url='+host+'sharesmarttv/modules/main/control/'
        }
        sharesmarttv.send(data);

    }

    /* The share.receive give permission to execute function of this page */
    sharesmarttv.receive = function(func, param){
        
        switch(func) {
            case 'up':{
                moveUp(param.x);
                break; 
            }
            case 'down':{
                moveDown(param.y);
                break;            
            }
            case 'left':{
                moveLeft(param.y);
                break;            
            }
            case 'right':{
                moveRight(param.y);
                break;            
            }
            case 'click':{
                click();
                break;            
            }
            default: {
                sharesmarttv.reserved(func,param);
            }
        }

    }