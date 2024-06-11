function loadHome() {
  const content = document.querySelector('#content');
  
  // Remove the content from the previous page
  if(content){
    while(content.firstChild){
      content.removeChild(content.firstChild);
    }
  }
  
  const header = document.createElement("h1");
  header.classList.add("header");
  header.textContent = "Pho K: #1";
  content.appendChild(header);

  const footer = document.createElement("h2");
  footer.classList.add("footer");
  footer.textContent = "The best pho in the bay";
  content.appendChild(footer);

  const generalInformationCard = document.createElement("div");
  generalInformationCard.classList.add("card");
  
  const generalInformation = document.createElement("div");
  generalInformation.classList.add("generalInformation");
  generalInformation.textContent = "Pho K broth will take you to Vietnam. The broth is liquid gold. I will come back as soon as possible.";
  generalInformationCard.appendChild(generalInformation);

  const reviewer = document.createElement("p");
  reviewer.classList.add("reviewer");
  reviewer.textContent = "Some dude";
  generalInformationCard.appendChild(reviewer);

  content.appendChild(generalInformationCard);
}

export default loadHome;
