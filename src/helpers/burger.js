document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-bar').classList.toggle('flex');
    document.querySelector('.open-button').classList.toggle('display-none');
})
