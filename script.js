// console.log(document.title);
// console.log(document.URL);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
var headermain = document.getElementById('main-header');
// console.log(headerTitle);

// headerTitle.textContent='hello';
// headerTitle.innerText='bye';


headermain.style.borderBottom='solid 3px black';
var additem = document.getElementsByClassName('title');
// additem.style.fontWeight='bold';
for (var i = 0; i < additem.length; i++) {
    additem[i].style.fontWeight='bold';
    additem[i].style.color = 'green';
}
// additem.style.color='green';


//elements by classs name

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[0]);
