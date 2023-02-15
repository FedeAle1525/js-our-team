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

  // Accedo a tutte le Proprieta' di ogni elemento del Team e le stampo a console
  for (let key in member){
    console.log(key, ':', member[key]);
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

  tableEl.innerHTML += 
  `<td>${picture}</td>
  <td>${firstName} ${lastName}</td>
  <td>${role}</td>`;
  
};

