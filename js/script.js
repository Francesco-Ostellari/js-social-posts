/* Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie 
  per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
  - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes. */


//funzione che genera numeri random per le immagini e per i likes
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const team = [
  {
    name: 'Pippo Rossi',
    picProfile: getRndInteger (1, 200),
    date: '6/4/2021',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image: getRndInteger (1, 200),
    likes: getRndInteger(1, 200)
  },
  
  {
    name: 'Pluto Bianchi',
    picProfile: getRndInteger (1, 200),
    date: '2/8/2021',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    image: getRndInteger (1, 200),
    likes: getRndInteger(1, 200)
  },

  {
    name: 'Paperino Neri',
    picProfile: getRndInteger (1, 200),
    date: '8/10/2021',
    text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
    likes: getRndInteger(1, 200)
  },


];

//funzione che stampa le card
function printCards(arrayList, container) {
  container.innerHTML = '';
  for (let index = 0; index < arrayList.length; index++) {
    const object = arrayList[index];

    const layoutDiv = 
      `<div class="post">
          <div class="post__header">
              <div class="post-meta">                    
                  <div class="post-meta__icon">
                      <img class="profile-pic" src="https://unsplash.it/300/300?image=${object.picProfile}" alt="${object.name}">                    
                  </div>
                  <div class="post-meta__data">
                      <div class="post-meta__author">${object.name}</div>
                      <div class="post-meta__time"${object.date}</div>
                  </div>                    
              </div>
          </div>
          <div class="post__text">${object.text}</div>
          <div class="post__image">
              <img src="https://unsplash.it/600/300?image=${object.image}" alt="">
          </div>
          <div class="post__footer">
              <div class="likes js-likes">
                  <div class="likes__cta">
                      <a class="like-button  js-like-button" href="#" data-postid="1">
                          <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                          <span class="like-button__label">Mi Piace</span>
                      </a>
                  </div>
                  <div class="likes__counter">
                      Piace a <b id="like-counter-1" class="js-likes-counter">${object.likes}</b> persone
                  </div>
              </div> 
          </div>            
      </div>`;

    container.innerHTML += layoutDiv;
  }
}

const container = document.querySelector('.posts-list');
printCards(team, container);