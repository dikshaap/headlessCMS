console.log('headlessCMS');


async function fetchData() {
  try {
    const response = await fetch('../data/content.json');
    const data = await response.json();
    
    // Access user information
    const userFullName = data.user.fullname;

    // Display user information
    document.getElementById('fullName').textContent = userFullName;

    // Display task cards
    displayTaskCards(data.cards, 'cards');
    displayTaskCards(data.cards2, 'cards2');
    displayTaskCards(data.cards3, 'cards3');

    // Display task cards with status
    displayTaskCardsWithStatus(data.cards4, 'cards4');
  } catch (error) {
    console.error('Error fetching JSON:', error);
  }
}

// Function to display task cards
function displayTaskCards(cards, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; 

  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.textContent = `${card.title}: ${card.count}`;
    container.appendChild(cardElement);
  });
}

// Function to display task cards with status
function displayTaskCardsWithStatus(cards, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = ''; 

  cards.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.textContent = `${card.title}`;
    if (card.status) {
      cardElement.textContent += ` - Status: ${card.status}`;
      
      if (card.status === 'URGENT') {
        cardElement.classList.add('urgent');
      }
    }
    container.appendChild(cardElement);
  });
}


fetchData();