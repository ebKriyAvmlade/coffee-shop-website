const firstRow = document.querySelectorAll('.second-page');
const intro = document.querySelectorAll('.intro-wrapper')
const contact = document.querySelectorAll('.third-page')

window.onscroll = () => {
    firstRow.forEach(first => {
        let top = window.scrollY
        let offset = first.offsetTop
        let height = first.offsetHeight

        if(top >= offset && top < offset){
            first.classList.add('show-animate') - 150
        } else {
            first.classList.remove('show-animate')
        }

    })

};

contact.forEach(footer => {
    let top = window.scrollY
    let offset = footer.offsetTop
    let height = footer.offsetHeight

    if (top >= offset && top < offset){
        footer.classList.add('contact-animation')
    } else{
        footer.classList.remove('contact-animation')
    }
})
    
    
