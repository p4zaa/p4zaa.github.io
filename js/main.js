document.querySelectorAll('.color-palette').forEach(palette => {
    const color = palette.getAttribute('data-color');
    palette.style.setProperty('--palette-color', color);

    palette.addEventListener('click', () => {
        //const colorCode = palette.querySelector('.color-code').textContent;
        navigator.clipboard.writeText(color).then(() => {
            //alert(`Copied the color code: ${color}`);
        }).catch(err => {
            console.error('Failed to copy the text: ', err);
        });
    });
});

