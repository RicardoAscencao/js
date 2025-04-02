
let item2 = document.querySelector('#two');

item2.setAttribute('class', 'cool');

if (item2.hasAttribute('class')) {
    console.log(item2.getAttribute('class'));
}

item2.removeAttribute('class');

/* item2.className = 'cool';
item2.className = 'cool', 'complete'; */

item2.classList.add('cool');
/* item2.classList.add('xpto');
item2.classList.remove('cool'); */
item2.classList.toggle('complete');
item2.classList.toggle('complete');

