// const container = document.querySelector('.container');
// console.log (container);
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

// function globalAttributes() {
//     const container = document.querySelector('.container');

//     const h1 = document.createElement('h1');
//     h1.innerText = 'Is this really working?';


//     const image = document.createElement('img');
//     image.setAttribute('alt', 'OHMEHGERD IZ FALLIN');
//     image.setAttribute('src', '../img/GrumpyHang.jpg');
//     image.setAttribute('class', '.col-md-4');
//     image.setAttribute('class', 'img-responsive');


//     const paragraph = document.createElement('p');
//     paragraph.setAttribute('class', 'col-md-6');
//     paragraph.innerText = 'Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow Meow MEOW meow Meow '

//     const icon = document.createElement('i');
//     icon.setAttribute('class', 'fab fa-facebook');

//     const anchorTag = document.createElement('a');
//     anchorTag.setAttribute('href', 'www.facebook.com');

//     container.appendChild(h1);
//     container.appendChild(image);
//     container.appendChild(paragraph);
//     container.appendChild(icon);
//     container.appendChild(anchorTag);

// }

// globalAttributes();

const body = document.body;
const container = document.createElement('div');
container.className = 'container-fluid text-center';

let test = body.appendChild(container);
console.log('my html: ', test);

const row = document.createElement('main');
row.className = 'row';

const content = document.createElement('div');

content.className = 'col-md-6 col-md-offset-2 content';

row.appendChild(content);
container.appendChild(row);
body.appendChild(container);

// form tag > input email > input subject > text area > button for submit

// const labelGenerator = (forElement) => {
//     const label = document.createElement('label');
//     label.setAttribute('for', forElement);
//     label.innerText = text;
//     return label;
// }

const form = document.createElement('form');
form.setAttribute('method', 'GET');
form.setAttribute('action', 'js/form-submission.js');
// form.setAttribute('name', 'myForm');
content.appendChild(form);


const inputEmail = document.createElement('input');
inputEmail.setAttribute('class', 'form-control');
inputEmail.setAttribute('type', 'text');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute('placeholder', 'email@example.com');

const subjectLine = document.createElement('input');
subjectLine.setAttribute('class', 'form-control');
subjectLine.setAttribute('type', 'text');
subjectLine.setAttribute('placeholder', 'Subject:');

const textArea = document.createElement('textarea');
textArea.setAttribute('class', 'form-control');
textArea.setAttribute('type', 'textArea');
textArea.setAttribute('placeholder', 'Message:');

const submitButton = document.createElement('button');
submitButton.className = 'btn-primary btn';
submitButton.setAttribute('type', 'Submit!');
submitButton.innerText = 'Submit Message';

// const labelForEmail = labelGenerator('email', 'Email');
// const labelForSubject = labelGenerator('');
// const labelForMessage = labelGenerator('');

// labelForEmail.appendChild(inputEmail);
// labelForSubject.appendChild(inputSubject);
// labelForMessage.appendChild(inputMessage);

// labelForMessage.appendChild();
form.appendChild(inputEmail);
form.appendChild(subjectLine);
form.appendChild(textArea);
form.appendChild(submitButton);












// Jacque's coding 

// function globalFormElements(element, elementType, elementName, elementClass, elementPlaceholder) {

//     const newElement = document.createElement(element);
//     newElement.setAttribute('type', elementType);
//     newElement.className = elementClass;
//     newElement.setAttribute('name', elementName);
//     newElement.setAttribute('placeholder', elementPlaceholder);
//     return newElement;
// }   

// const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
//     const element= document.createElement('textarea');
//     element.setAttribute('type', 'text');
//     element.className = elementClass;
//     element.setAttribute('name', name);
//     element.setAttribute('placeholder', placeholder);
//     element.setAttribute('cols', cols);
//     element.setAttribute('rows', rows);
//     element.id = elementId;
//     return element;
// }

// console.log(globalFormElements('input', 'text', 'example, form-control bg-primary', 'Type your example here.'));
// console.log(globalFormElements('textarea', 'text', 'message', 'bg-danger', 'Please, enter your concerns here:'));