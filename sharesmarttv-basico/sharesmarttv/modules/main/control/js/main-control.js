/* 
    ShareSmartTV v1 - Calls to DISPLAY functions
    ===============
    Use this file to create calls to functions.
*/

    sharesmarttv.tag = 'control';

    /* WHEN THIS DEVICE IS READY */
    sharesmarttv.ready = function (){

        $('#btn-left').on('click', function(){
            var data = {
                func: "left",
                param: ""
            }
            sharesmarttv.send(data);
        });

        $('#btn-right').on('click', function(){
            var data = {
                func: "right",
                param: ""
            }
            sharesmarttv.send(data);
        });

        $('#btn-down').on('click', function(){
            var data = {
                func: "down",
                param: ""
            }
            sharesmarttv.send(data);
        });

        $('#btn-up').on('click', function(){
            var data = {
                func: "up",
                param: ""
            }
            sharesmarttv.send(data);
        });

        $('#btn-click').on('click', function(){
            var data = {
                func: "click",
                param: ""
            }
            sharesmarttv.send(data);
        });

        $('#btn-showFullscreen').on('click', function(){
            var data = {
                func: "showFullscreen",
                param: ""
            }
            sharesmarttv.send(data);
        });

        $('#inp-search').on('keyup', function(){
            var q = $('#inp-search').val();
            var data = {
                func: "search",
                param: "q="+q
            }
            sharesmarttv.send(data);
        });

    }

    sharesmarttv.receive = function (func,param){

        switch(func) {
            /* FunctionDemo to execute on local device */
            
            case 'focusOnSearch':{
                focusOnSearch();
                break; 
            }
            default: {
                sharesmarttv.reserved(func,param);
            }
        }       

    }