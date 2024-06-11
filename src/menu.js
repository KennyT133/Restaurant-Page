function loadMenu() {
  const content = document.querySelector("#content");
  
  // Remove the content from the previous page
  if(content){
    while(content.firstChild){
      content.removeChild(content.firstChild);
    }
  }
  const contactCard = document.createElement("div");
  contactCard.classList.add("card");

  const menuItems = document.createElement("h1");
  menuItems.classList.add("menuItems");
  menuItems.textContent = "Menu";
  content.appendChild(menuItems);

  const item = document.createElement("div");
  item.classList.add("item");
  item.textContent = "Pho";
  contactCard.appendChild(item);

  const desc = document.createElement("div");
  desc.classList.add("desc");
  desc.textContent = "This smooth and rich broth will cure all your problems.";
  contactCard.appendChild(desc);

  content.appendChild(contactCard);
}

export default loadMenu;
