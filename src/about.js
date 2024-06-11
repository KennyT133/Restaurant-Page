function loadAbout() {
  const content = document.querySelector("#content");

  // Remove the content from the previous page
  if(content){
    while(content.firstChild){
      content.removeChild(content.firstChild);
    }
  }

  const contactCard = document.createElement("div");
  contactCard.classList.add("card");

  const contact = document.createElement("h2");
  contact.classList.add("contact");
  contact.textContent = "Contact";
  contactCard.appendChild(contact);

  const owner = document.createElement("div");
  owner.classList.add("owner");
  owner.textContent = "Owner of Store";
  contactCard.appendChild(owner);

  const phone = document.createElement("div");
  phone.classList.add("phone");
  phone.textContent = "111-111-111";
  contactCard.appendChild(phone);

  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "xd@gmail.com";
  contactCard.appendChild(email);

  content.appendChild(contactCard);
}

export default loadAbout;
