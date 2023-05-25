 // Load the dog data from the JSON file
 fetch('dogInfo.json')
 .then(response => response.json())
 .then(data => {
   const generateButton = document.getElementById('generate-button');
   const resultDisplay = document.getElementById('result-display');
   const dogTypeInput = document.getElementById('dog-type-input');
   const dogColorInput = document.getElementById('dog-color-input');

   generateButton.addEventListener('click', () => {
     const genderSelect = document.getElementById('gender-select');
     const topicSelect = document.getElementById('topic-select');
     const gender = genderSelect.value;
     const topic = topicSelect.value;
     const dogType = dogTypeInput.value;
     const dogColor = dogColorInput.value;

 // Check if all required fields are filled in
 if (!gender || !topic || !dogType || !dogColor) {
    alert('Please fill in all the required fields.');
    return;
  }



     let names = [];

     if (gender === 'male') {
        if (topic === 'sports') {
          names = data[10]['male_dog_sports_names'];
        } else if (topic === 'books') {
          names = data[5]['funny_male_dog_book_names'];
        } else if (topic === 'presidents') {
          names = data[4]['funny_dog_president_names'];
        } else if (topic === 'toys') {
          names = data[8]['dog_names_toys_male'];
        } else if (topic === 'movies_tv') {
          names = data[2]['male_funny_dog_tv_names'];
        } else if (topic === 'funny') {
          names = data[0]['funny_male_dogs_names'];
        }
      } else if (gender === 'female') {
        if (topic === 'sports') {
          names = data[11]['female_dog_sports_names'];
        } else if (topic === 'books') {
          names = data[6]['funny_female_dog_book_names'];
        } else if (topic === 'presidents') {
          names = data[4]['funny_dog_president_names'];
        } else if (topic === 'toys') {
          names = data[9]['dog_names_toys_female'];
        } else if (topic === 'movies_tv') {
          names = data[3]['female_funny_dog_tv_names'];
        } else if (topic === 'funny') {
          names = data[1]['female_funny_dog_names'];
        }
      }
      

     const randomIndex = Math.floor(Math.random() * names.length);
     const selectedName = names[randomIndex];
     resultDisplay.textContent = `Dog Type: ${dogType}, Color: ${dogColor}, Name: ${selectedName}`;
   });
 });


 // Get the clear button element
const clearButton = document.getElementById("clear-button");

// Add event listener to clear button
clearButton.addEventListener("click", clearResults);

// Function to clear the results
function clearResults() {
  // Clear the result-display element
  const resultDisplay = document.getElementById("result-display");
  const dogTypeInput = document.getElementById('dog-type-input');
  const dogColorInput = document.getElementById('dog-color-input');
  const genderSelect = document.getElementById('gender-select');
  const topicSelect = document.getElementById('topic-select');
  resultDisplay.innerHTML = "";
  dogTypeInput.value = "";
  dogColorInput.value = "";
  genderSelect.value = "";
  topicSelect.value = ""

}
