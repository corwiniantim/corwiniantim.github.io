document.querySelectorAll('.title').forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('rainbow');
    });
});
