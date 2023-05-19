const texts = [
    {
        element: document.getElementById('text-mqn-e-1'),
        content: '',
        index: 0
    },
    {
        element: document.getElementById('text-mqn-e-2'),
        content: '',
        index: 0
    },
    {
        element: document.getElementById('text-mqn-e-3'),
        content: '',
        index: 0
    }
];

texts.forEach((text, index) => {
    if (text.element !== null) {
        text.content = text.element.innerHTML;
        text.element.innerHTML = '';
        setTimeout(() => typing(index), index === 0 ? 0 : index === 1 ? 2100 : 3100);
    }
});

function typing(index) {
    const text = texts[index];

    if (text.index < text.content.length) {
        if (text.content.charAt(text.index) === '<') {
            let tag = '';
            while (text.content.charAt(text.index) !== '>') {
                tag += text.content.charAt(text.index);
                text.index++;
            }
            tag += '>';
            text.element.innerHTML += tag;
            text.index++;
            typing(index);
        } else {
            text.element.innerHTML += text.content.charAt(text.index);
            text.index++;
            setTimeout(() => typing(index), 50);
        }
    }
}
