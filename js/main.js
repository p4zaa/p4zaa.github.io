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

    dragElement(sticker);
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

// Make the DIV element draggable:
//dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    //e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    //e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mention').forEach(element => {
        const mentionType = element.getAttribute('mention');
        const imageUrl = `/css/icons/${mentionType}.png`; // Example path to your image

        // Set CSS variable '--logo-path' on each .mention element
        element.style.setProperty('--logo-path', `url('${imageUrl}')`);
    });
});