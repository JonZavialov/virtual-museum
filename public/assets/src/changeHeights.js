function changeHeights(){    
    let textHeight = $('#setting .text')[0].getBoundingClientRect().height;
    let picsHeight = $('#setting .images')[0].getBoundingClientRect().height;

    if (picsHeight > textHeight){
        let height = $("#setting")[0].getBoundingClientRect().height;
        $("#setting").css("height", `${height - 100}px`);
    }else{
        $("#setting").css("height", 'min-content');
    }
}