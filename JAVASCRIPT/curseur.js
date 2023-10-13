let a_link = document.querySelectorAll("a-link");

a_link.forEach( e =>e.addEventListener('mouseenter', handleMouseEnter));
a_link.forEach( e =>e.addEventListener('mouseleave', handleMouseLeave));
window.addEventListener('mousemove', handleMouseMove);

function handleMouseMove(event) {
    let top = event.pageY - (cursor.clientHeight / 2);
    let left = event.pageX - (cursor.clientWidth / 2);
    cursor.style.top = top + 'px';
    cursor.style.left = left + 'px';
    
}

function handleMouseEnter(){
    cursor.classList.add('hovered');
}

function handleMouseLeave() {
    cursor.classList.remove('hovered');
}
