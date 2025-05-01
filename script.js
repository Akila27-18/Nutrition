document.getElementById('startQuizBtn').addEventListener('click', function() {
  fetch('https://opentdb.com/api.php?amount=5&type=multiple') // Example public Quiz API
    .then(response => response.json())
    .then(data => {
      const questions = data.results;
      const quizContainer = document.getElementById('quizContainer');
      quizContainer.innerHTML = ''; // Clear previous content

      questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
          <h3>Q${index + 1}: ${q.question}</h3>
          <ul>
            ${[...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5).map(answer => `
              <li data-answer="${answer}" class="answer">${answer}</li>
            `).join('')}
          </ul>
          <hr>
        `;
        quizContainer.appendChild(questionElement);
      });

      // Add click event listener for answers
      document.querySelectorAll('.answer').forEach(answer => {
        answer.addEventListener('click', function() {
          const selectedAnswer = this.getAttribute('data-answer');
          const correctAnswer = questions[this.parentNode.parentNode.index].correct_answer;

          if (selectedAnswer === correctAnswer) {
            alert('Correct!');
          } else {
            alert('Wrong! Try again.');
          }
        });
      });
    })
    .catch(error => {
      console.error('Error fetching quiz:', error);
    });
});

  document.querySelector('.recipe-btn').addEventListener('click', function() {
    alert('Redirecting to weekly recipes!');
  });
  
  document.querySelector('.challenge-btn').addEventListener('click', function() {
    alert('Challenge PDF download will start soon!');
  });  

  document.querySelectorAll('.download').forEach(button => {
    button.addEventListener('click', () => {
        alert('Download started!');
    });
});

// date - 30 day
document.getElementById('start-date').addEventListener('change', function() {
  console.log('Start date selected:', this.value);
});

document.getElementById('end-date').addEventListener('change', function() {
  console.log('End date selected:', this.value);
});

document.querySelector('.download-button').addEventListener('click', function() {
  // Placeholder for download functionality
  alert('Download initiated!');
});

// Simple JS: Log dates when selected
document.getElementById('start-date').addEventListener('change', function() {
  console.log('Start Date:', this.value);
});

document.getElementById('end-date').addEventListener('change', function() {
  console.log('End Date:', this.value);
});



// Placeholder for Download PDF
function downloadPDF() {
  alert('Download functionality coming soon!');
}


  // Select the input fields and the button
  const fullNameInput = document.getElementById('fullName');
  const emailInput = document.getElementById('email');
  const continueButton = document.getElementById('continueButton');

  // Function to save data to localStorage
  function saveToLocalStorage() {
    const userData = {
      fullName: fullNameInput.value,
      email: emailInput.value
    };

    // Store the user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Optionally, show a confirmation message or redirect
    alert('Data saved successfully!');
    // You can redirect to another page or close the modal
    // window.location.href = "anotherPage.html";
  }

  // Event listener for the continue button
  continueButton.addEventListener('click', function() {
    // Check if both fields have values
    if (fullNameInput.value && emailInput.value) {
      alert('Done with your Registration')
      saveToLocalStorage();
      
    } else {
      alert('Please fill in both fields!');
    }
  });

  // Optionally, you can pre-fill the form if data already exists in localStorage
  window.onload = function() {
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData) {
      fullNameInput.value = storedUserData.fullName || '';
      emailInput.value = storedUserData.email || '';
    }
  };
