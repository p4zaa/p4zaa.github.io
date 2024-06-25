function toggleTOC() {
    var tocContent = document.querySelector('.toc-content');
    var button = document.getElementById('toggle-toc-button');
    if (tocContent) {
        if (tocContent.classList.contains('hidden')) {
            tocContent.classList.remove('hidden');
            button.textContent = 'hide';
        } else {
            tocContent.classList.add('hidden');
            button.textContent = 'toc';
        }
    }
}

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


document.querySelectorAll('.sticker').forEach(sticker => {
    const x = sticker.getAttribute('x');
    const y = sticker.getAttribute('y');
    const size = sticker.getAttribute('size');
    const rotate = sticker.getAttribute('rotate');

    sticker.style.setProperty('--x', x);
    sticker.style.setProperty('--y', y);
    sticker.style.setProperty('--size', size);
    sticker.style.setProperty('--rotate', rotate);
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

document.addEventListener('DOMContentLoaded', function () {
    var sliders = document.querySelectorAll('.slider');

    sliders.forEach(function (slider) {
        var sliderValue = document.createElement('div');
        sliderValue.className = 'slider-value';
        slider.parentNode.appendChild(sliderValue); // Append slider value display to slider container

        sliderValue.textContent = slider.value;

        slider.oninput = function () {
            sliderValue.textContent = this.value;
        };
    });
});