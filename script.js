//search first letter = https://www.themealdb.com/api/json/v1/1/search.php?f=a

function search(){

    let inputValue = document.getElementById("input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(response => response.json())
    .then(data => {
        displayMeals(data.meals);
    })
}
    const displayMeals = mealsList => {
        mealsList.forEach(meals => {
            const mealsDiv = document.getElementById("allMeal");
            const mealDiv = document.createElement("div");
            const mealInfo = `
                <div class="col" onclick="mealsDetails('${meals.idMeal}')">
                    <div class="card">
                        <img src="${meals.strMealThumb}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title text-center">${meals.strMeal}</h5>
                            <div class = "d-flex justify-content-center">
                                <button   class="card-text btn btn-dark">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            mealDiv.innerHTML=mealInfo;
            mealsDiv.appendChild(mealDiv);
        })
    }

    const mealsDetails =idMeal => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data.meals[0]);

            const mealDetailsDiv = document.createElement('div');
            const details = `
        
                    <div class="col mt-5">
                        <div class="card text-center">
                            <img class="rounded mx-auto d-block" src="${data.meals[0].strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center">${data.meals[0].strMeal}</h5>
                                <p>=>Meal Id : ${data.meals[0].idMeal}</p>
                                <p> =>${data.meals[0].strIngredient1}</p>
                                <p>=>${data.meals[0].strIngredient2}</p>
                                <p>=>${data.meals[0].strIngredient3}</p>
                                <p>=>${data.meals[0].strIngredient4}</p>
                                <p>=>${data.meals[0].strIngredient4}</p>
                                <p>=>${data.meals[0].strIngredient5}</p>
                                <p>=>${data.meals[0].strIngredient6}</p>
                                <p>=>${data.meals[0].strIngredient7}</p>
                                <p>=>${data.meals[0].strIngredient8}</p>
                                <p>=>${data.meals[0].strIngredient9}</p>
                                
                                <div class = "d-flex justify-content-center">
                                    <button class="card-text btn btn-dark">Back to home</button>
                                </div>
                            </div>
                        </div>
                    </div>
        `
            mealDetailsDiv.innerHTML = details;
            const mealDetails = document.getElementById('mealDetails');
            mealDetails.appendChild(mealDetailsDiv);
            
        })

    }



    





//  api id = https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.id}