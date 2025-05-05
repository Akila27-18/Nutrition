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


window.addEventListener('DOMContentLoaded', function () {
  const continueButton = document.getElementById('continueButton');

  continueButton.addEventListener('click', function (e) {
    e.preventDefault(); // prevent form submission if inside a form

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();

    if (fullName && email) {
      localStorage.setItem('fullName', fullName);
      localStorage.setItem('email', email);
      alert('Information saved locally!');
    } else {
      alert('Please fill in both fields.');
    }
  });
});





  // You can enhance dropdown interactivity later
document.querySelector('.dropdown-btn').addEventListener('click', () => {
  alert("Dropdown content can be added here.");
});
function toggleDropdown() {
  const table = document.getElementById("fruitTable");
  table.classList.toggle("active");
}

// You can add interactivity here, for now it's just a placeholder.
document.getElementById('fruitTableSelect').addEventListener('change', function() {
  alert(`You selected: ${this.value}`);
});
