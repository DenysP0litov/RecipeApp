import axios from "axios";

const API_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';

const headers = {
	'X-RapidAPI-Key': 'b33b942c2fmsh6344311c99b707ep15b96bjsnaaf623b7b4ac',
	'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
};

export const getRandomRecipes = (number: number) => {
	const options = {
		method: 'GET',
		url: `${API_URL}/recipes/random`,
		params: {number},
		headers,
	};
	
	return axios.request(options)
		.then(response => response.data.recipes)
		.catch(error => console.log(error));
};

export const getRecipe = (recipeId: number) => {
	const options = {
		method: 'GET',
		url: `${API_URL}/recipes/${recipeId}/information`,
		headers,
	};
	
	return axios.request(options)
		.then(response => response.data)
		.catch(error => console.log(error));
};