//search first letter = https://www.themealdb.com/api/json/v1/1/search.php?f=a

function search(){
    console.log("clicked")

    let inputValue = document.getElementById("input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then(response => response.json())
    .then(data => {
        displayMeals(data.meals);
        console.log(data.meals);
    })
    const displayMeals = mealsList => {
        mealsList.forEach(meals => {
            const mealsDiv = document.getElementById("allMeal");
            console.log(meals.meals);
            const mealDiv = document.createElement("div");
            const mealInfo = `
                <div class="col">
                    <div class="card">
                        <img src="${meals.strMealThumb}" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title text-center">${meals.strMeal}</h5>
                            <div class = "d-flex justify-content-center">
                                <button  onclick="mealsDetails()" class="card-text btn btn-dark">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            `
            mealDiv.innerHTML=mealInfo;
            mealsDiv.appendChild(mealDiv);
        })
    }

    const mealsDetails =id => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
        })
    }

    // function showDetails() {

    //     const mealsId = idMeal =>{
    //         const idUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.idMeal}`
    //         console.log(idUrl);
    //     }
    
    //     const mealsDetails = document.getElementById('mealsDetails');
    //     const details = `
        
    //                 <div class="col">
    //                     <div class="card">
    //                         <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
    //                         <div class="card-body">
    //                             <h5 class="card-title text-center">${meals.strMeal}</h5>
    //                             <p>Meal Id : ${meals.strMeal.idMeal}</p>
    //                             <p></p>
    //                             <p></p>
    //                             <p></p>
    //                             <p></p>
    //                             <p></p>
    //                             <p></p>
    //                             <p></p>
    //                             <p></p>
    //                             <div class = "d-flex justify-content-center">
    //                                 <button class="card-text btn btn-dark">Details</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
        
    //     `
    // }
}



//  api id = https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meals.id}