document.querySelectorAll('.color-palette').forEach(palette => {
    const color = palette.getAttribute('data-color');
    palette.style.setProperty('--palette-color', color);

    palette.addEventListener('click', () => {
        //const colorCode = palette.querySelector('.color-code').textContent;
        navigator.clipboard.writeText(color.replace('#', '').trim()).then(() => {
            //alert(`Copied the color code: ${color}`);
        }).catch(err => {
            console.error('Failed to copy the text: ', err);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleHeaders = document.querySelectorAll('.toggle-header');
    toggleHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            const container = this.parentElement;
            container.classList.toggle('active');
            header.classList.toggle('active');
        });
    });
});