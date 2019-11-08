/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an list as its only argument.

  Step 2: Inside this function, iterate over the list creating a list item <li> element for each item in the list. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/



const mM=(list)=>{

  //Elements

  const menu=document.createElement('div');
  const ul=document.createElement('ul');
  list.forEach(info=>{
    const li=document.createElement("li");
    li.textContent=info;

    ul.appendChild(li);
    menu.appendChild(ul);
  })

  //classes

  menu.classList.add('menu');
  const mB=document.querySelector(".menu-button");
  mB.addEventListener("click", ()=>{
    menu.classList.toggle("menu--open");
  })
  return menu;

}

const menu1=document.querySelector(".header");
menu1.appendChild(mM(menuItems));
