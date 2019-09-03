const container = document.querySelector('.container');
console.log (container);
// const h1 = document.querySelector('h1');

// function globalListItems() {
//     // create a ul/ol, create li, with any classes, attributes or IDs needed
//     //Create UL
//     const ul = document.createElement('ul');
//     // console.log('unordered list', ul);
//     // Create LI's
//     const li = document.createElement('li');
//     // console.log('list item', li);
//     // Attributes/Classes/ID's
//     li.className = 'list-group-item list-group-item-info';
//     // console.log('li with classes', li);
//     li.innerText = 'I am a list item';
//     li.id = 'mySpecialListItem';

//     const image = document.createElement('img');
//     image.setAttribute('alt', 'I am an image that is empty');
//     console.log(image);

//     //append to container->ul->li
//     ul.appendChild(li);
//     // console.log('complete ul', ul);
//     container.appendChild(ul);
// }

// globalListItems();

function globalAttributes() {
    const container = document.querySelector('.container');

    const h1 = document.createElement('h1');
    h1.innerText = 'Is this really working?';


    const image = document.createElement('img');
    image.setAttribute('alt', 'OHMEHGERD IZ FALLIN');
    image.setAttribute('src', '../img/GrumpyHang.jpg');
    image.setAttribute('class', '.col-md-4');
    image.setAttribute('class', 'img-responsive');


    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'col-md-6');
    paragraph.innerText = 'Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow '

    const icon = document.createElement('i');
    icon.setAttribute('class', 'fab fa-facebook');

    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', 'www.facebook.com');

    container.appendChild(h1);
    container.appendChild(image);
    container.appendChild(paragraph);
    container.appendChild(icon);
    container.appendChild(anchorTag);

}

globalAttributes();
