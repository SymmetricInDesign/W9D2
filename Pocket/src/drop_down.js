
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator() {
  let arr = [];
  Object.keys(dogs).forEach(key => {
    let a = document.createElement("a");
    a.innerHTML = key;
    a.setAttribute('href', dogs[key]);
    let li = document.createElement("li");
    li.classList.add('dog-link');
    li.classList.add('hidden');
    li.appendChild(a);
    arr.push(li);
  })
  return arr;
}

function attachDogLinks() {
  let dogLinks = dogLinkCreator();
  let ul = document.querySelector('.drop-down-dog-list');
  let nav = document.querySelector('.drop-down-dog-nav');
  dogLinks.forEach(link => ul.appendChild(link))
  nav.addEventListener('mouseenter', handleEnter);
  nav.addEventListener('mouseleave', handleLeave);
}

function handleEnter() {
  let dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(link => link.classList.remove('hidden'))
}

function handleLeave() {
  let dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(link => link.classList.add('hidden'))
}

attachDogLinks();