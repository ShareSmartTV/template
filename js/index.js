function moveUp(){
    $('#message').html('Up!');
}

function moveDown(){
    $('#message').html('Down!');
}

function click(){
    var selectedTagName = $('.sharesmarttv-selected').prop("tagName").toLowerCase();

    if(selectedTagName=='a'){
        link = $('.sharesmarttv-selected').attr('href');
        url=host+link;
        sharesmarttv.openURL(url);
    }

    if(selectedTagName=='input'){
    }
}

$(document).ready(function(){
    sharesmarttv.navigation.construct();
});