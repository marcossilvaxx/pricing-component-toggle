document.getElementById('switch-shadow').addEventListener('change', (event) => {
    document.querySelectorAll('.price').forEach(element => {
        element.classList.toggle('hide');
    })
})