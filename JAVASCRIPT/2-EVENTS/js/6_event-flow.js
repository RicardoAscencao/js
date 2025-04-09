function showElement(event) {
  console.log('Target:', event.target);
  console.log('Current Target:', event.currentTarget);
  console.log('____________________________');
  console.log(event);

  //debugger;
  alert(this.innerHTML);

  event.stopPropagation();
}

/* el = document.getElementById("list");   // <<< el is reused and not defined
el.addEventListener('click', showElement, false);

el = document.getElementById("item"); */
document.body.addEventListener('click', showElement, false); 

/* el = document.getElementById("link");
el.addEventListener('click', showElement, false); */



el = document.getElementById("list2");
el.addEventListener('click', showElement, true);

el = document.getElementById("item2");
el.addEventListener('click', showElement, true);

el = document.getElementById("link2");
el.addEventListener('click', showElement, true);