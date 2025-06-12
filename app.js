


let data =[ {
  id: 1,
  title: "Classic Margherita Pizza",
  body: "Preheat the oven to 475°F (245°C).Roll out the pizza dough and spread tomato sauce evenly.Top with slices of fresh mozzarella and fresh basil leaves.Drizzle with olive oil and season with salt and pepper.Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.Slice and serve hot.",

  image: "https://cdn.dummyjson.com/recipe-images/1.webp",
  rating: 4.6,
  reviewCount: 98,
  mealType: "Dinner"
},
{
    id: 2,
    title: "Vegetarian Stir-Fry",
    body: "First, make the sauce. In a small bowl or jar, whisk together the soy sauce, sesame oil, rice vinegar, honey, garlic, ginger, cornstarch, water, and red pepper flakes, if using.Next cook the vegetables. Heat a drizzle of olive oil or neutral oil in a large skillet or wok over high heat.",
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    rating: 4.7,
    reviewCount: 26,
    mealType: "Lunch"
},
 {
    id: 3,
    title: "Chocolate Chip Cookies",
    body: "Preheat the oven to 475°F (245°C).Roll out the pizza dough and spread tomato sauce evenly.Top with slices of fresh mozzarella and fresh basil leaves.Drizzle with olive oil and season with salt and pepper.Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.Slice and serve hot.",
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    rating: 4.9,
    reviewCount: 13,
    mealType: "Dessert"
  }
]

let main = document.getElementById("main");
for (i = 0; i < data.length; i++){
    console.log(data[i].id)
    main.innerHTML += `<div class = "abc">
    
    <h2>${data[i].title}</h2>
    <img src="${data[i].image}" alt="${data[i].title}" width="200">
    <p><strong>Instruction:</strong>${data[i].body}</p>
     <p>&#11088<strong>Rating:</strong>${data[i].rating}</p>
    <p><strong>Review Count:</strong>${data[i].reviewCount}</p>
    <p><strong>Meal Type:</strong>${data[i].mealType}</p>
   
    <p><strong>ID:</strong>${data[i].id}</p>   


    
    </div>`
}