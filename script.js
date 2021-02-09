const searchBtn = () => {
    let input = document.getElementById('searchInput').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        searchResult(data.meals);
        console.log(data.meals)
    })
    .catch(error => showError(error));
}

const searchResult = input =>{
    const resultDiv = document.getElementById("searchResult");
    resultDiv.innerHTML = '';
    input.forEach(meal => {
        const result = document.createElement("div");
        const resultInfo = `
            <div  class="col" onclick="showDetails(${meal.idMeal})">
            <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
            </div>
            </div>
            </div>
            ` 
            result.innerHTML = resultInfo ;
            resultDiv.appendChild(result);
    });
}

const showDetails = id =>{
    console.log(id);
    const searchById = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(searchById)
    .then(result => result.json())
    .then(data =>{
        getData(data.meals[0]);
    })
}

const getData = input =>{
    console.log(input);
    const details = document.getElementById("showDetail");
    details.innerHTML = '';
    const detailsDiv = document.createElement("div");
    const detailsDivData = `
    
    <div id="backToHome"  class="col ">
    <div class="card">
      <img src="${input.strMealThumb}" class="card-img-top rounded mx-auto d-block mt-3" alt="...">
      <div class="card-body">
        <h3 class="card-title">${input.strMeal}</h3>
        <h5>StrCategory : ${input.strCategory}</h5>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient1}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient2}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient3}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient4}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient5}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient6}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient7}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient8}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient9}</p>
        <p><i class="fas fa-arrow-circle-right"></i>  ${input.strIngredient10}</p>
      </div>
      <button onclick="backToHome()" class="btn btn-dark">Back to Home</button>
        </div>
    </div>
    `
    detailsDiv.innerHTML = detailsDivData ;
    details.appendChild(detailsDiv);

}

const backToHome = () => {
    document.getElementById("backToHome").style.display = "none";
}

const showError = () => {
    document.getElementById("showError").innerText = 'Something is wrong , please try again later .'

}