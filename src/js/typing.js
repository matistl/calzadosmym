const text1 = document.getElementById('text-mqn-e-1');
const text2 = document.getElementById('text-mqn-e-2');
const text3 = document.getElementById('text-mqn-e-3') ? document.getElementById('text-mqn-e-3') : null;;
const content1 = text1.innerHTML;
const content2 = text2.innerHTML;
const content3 = text3 ? text3.innerHTML : null;
text1.innerHTML = '';
text2.innerHTML = '';
text3 ? text3.innerHTML = '' : null;


let i = 0,
    i2 = 0,
    i3 = 0;

function typing1() {
    if (i < content1.length) {
        if (content1.charAt(i) === '<') {
            let tag = '';
            while (content1.charAt(i) !== '>') {
                tag += content1.charAt(i);
                i++;
            }
            tag += '>';
            text1.innerHTML += tag;
            i++;
            typing1();
        } else {
            text1.innerHTML += content1.charAt(i);
            i++;
            setTimeout(typing1, 50);
        }
    }
}

function typing2() {
    if (i2 < content2.length) {
        if (content2.charAt(i2) === '<') {
            let tag = '';
            while (content2.charAt(i2) !== '>') {
                tag += content2.charAt(i2);
                i2++;
            }
            tag += '>';
            text2.innerHTML += tag;
            i2++;
            typing2();
        } else {
            text2.innerHTML += content2.charAt(i2);
            i2++;
            setTimeout(typing2, 50);
        }
    }
}

function typing3() {
    if (i3 < content3?.length) {
        if (content3.charAt(i3) === '<') {
            let tag = '';
            while (content3.charAt(i3) !== '>') {
                tag += content3.charAt(i3);
                i3++;
            }
            tag += '>';
            text3.innerHTML += tag;
            i3++;
            typing3();
        } else {
            text3.innerHTML += content3.charAt(i3);
            i3++;
            setTimeout(typing3, 50);
        }
    }
}

typing1()
setTimeout(typing2, 2100)
setTimeout(typing3, 3100)