document.querySelectorAll('.color-palette').forEach(palette => {
    const color = palette.getAttribute('data-color');
    palette.style.setProperty('--palette-color', color);

    palette.addEventListener('click', () => {
        const colorCode = palette.querySelector('.color-code').textContent;
        navigator.clipboard.writeText(colorCode).then(() => {
            //alert(`Copied the color code: ${colorCode}`);
        }).catch(err => {
            console.error('Failed to copy the text: ', err);
        });
    });
});

