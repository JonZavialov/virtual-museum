function initScrollImage(){
    const moveUp = 100
    $(window).scroll(() => {
        let docTop = $('#hero')[0].getBoundingClientRect().y
        if (docTop * -1 < moveUp){
            $('#top-image').css('transform', `translate(0, ${docTop}px)`)
        }
    })
}