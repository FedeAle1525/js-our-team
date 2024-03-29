// MILESTONE 0: Creare un array di Oggeti contenente i Membri del Team
const team = [

  {
    firstName: 'Wayne',
    lastName: 'Barnett',
    role: 'Founder & CEO',
    picture: './img/wayne-barnett-founder-ceo.jpg'
  },

  {
    firstName: 'Angela',
    lastName: 'Caroll',
    role: 'Chief Editor',
    picture: './img/angela-caroll-chief-editor.jpg'
  },

  {
    firstName: 'Walter',
    lastName: 'Gordon',
    role: 'Office Manager',
    picture: './img/walter-gordon-office-manager.jpg'
  },

  {
    firstName: 'Angela',
    lastName: 'Lopez',
    role: 'Social Media Manager',
    picture: './img/angela-lopez-social-media-manager.jpg'
  },

  {
    firstName: 'Scott',
    lastName: 'Estrada',
    role: 'Developer',
    picture: './img/scott-estrada-developer.jpg'
  },

  {
    firstName: 'Barbara',
    lastName: 'Ramos',
    role: 'Graphic Designer',
    picture: './img/barbara-ramos-graphic-designer.jpg'
  },

];

// console.log(team);

// MILESTONE 1: Stampare su console le informazioni per ogni Membro del Team (utilizzando il Ciclo 'For - In')
for (let i = 0; i < team.length; i++){
  // Pesco ogni Membro come elemento dell'Array Team
  const member = team[i];
  // console.log(member);

  // Accedo a tutte le pProprieta' di ogni elemento del Team
  for (let key in member){
    console.log(member[key]);
  };
};

// MILESTONE 2: Stampare le stesse informazioni su DOM sotto forma di stringhe

// Recupero elemento Tabella dal DOM
const tableEl = document.getElementById('table');

for (let i = 0; i < team.length; i++){
  // Pesco ogni Membro come elemento dell'Array Team
  const member = team[i];

  // Leggo i valori delle varie Proprieta' del Membro
  const firstName = member.firstName;
  const lastName = member.lastName;
  const role = member.role;
  const picture = member.picture;

  // Creo elemento del DOM per l'immagine
  const pictureEl = document.createElement('img');
  pictureEl.src = picture;
  pictureEl.style.cssText = 'width:100px'

  tableEl.innerHTML += 
  `<tr>
    <td id="picture${i}"></td>
    <td>${firstName} ${lastName}</td>
    <td>${role}</td>
  </tr>`;

  // Un'alternativa all''append' poteva essere usare uno Switch Case sulla Key e differenziare le stampe in base al tipo
  document.getElementById(`picture${i}`).append(pictureEl);
  
};

