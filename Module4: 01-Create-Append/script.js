// script.js

document.addEventListener('DOMContentLoaded', function() {
  const favoriteFoods = ['Pizza', 'Sushi', 'Ice Cream', 'Tacos'];

  // Create the ordered list element
  const ol = document.createElement('ol');
  ol.id = 'favorite-foods';

  // Add list items to the ordered list
  favoriteFoods.forEach((food, index) => {
    const li = document.createElement('li');
    li.textContent = food;

    // Add different background colors
    li.classList.add(`bg-color-${index + 1}`);

    // Append the list item to the ordered list
    ol.appendChild(li);
  });

  // Append the ordered list to the container
  const foodContainer = document.getElementById('food-container');
  foodContainer.appendChild(ol);
});










//  // စာရင်းအကယ်ဒမီစာတမ်း
//  const favoriteFoods = ["ပစ်သီးပင်", "သရက်", "ချက်သောင်း", "လက်သန့်ဘိုကလီ"];

//  // စာရင်းအကယ်ဒမီစာတမ်းကို ရွေးချယ်ခြင်း
//  const favoriteFoodsList = document.getElementById("favorite-foods");

//  // စာရင်းအကယ်ဒမီစာတမ်းတစ်ခုအတည်ပြုပြင်ခြင်း ရွေးချယ်ခြင်း။
//  favoriteFoods.forEach(food => {
//    const listItem = document.createElement("li");
//    listItem.textContent = food;
//    favoriteFoodsList.appendChild(listItem);
//  });