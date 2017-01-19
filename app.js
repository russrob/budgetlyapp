// adding a event handler to the click button 
//getting the input vaules from the input field 
// adding any new items to our data structure 
//adding the new data to the UI 
//We need to calulated the new budget 
//update the user inferface 


//struction our code with modules 
//	impor


// budget Controller 
const budgetController = (() => {

	
})();

// UIController 
const UIController = (() => {


})();


// Global Controller 
const controller = ((budgetCtrl, UICtrl) => {

	var ctrlAddItem = () => {

		//1. Get the fiel input data 

		//2. Add the item to the budget controller 

		//3. Add the items to the UI 

		//4. Calulate the budget  

		//5. Display the budget in the UI 
		console.log('it works ')

	};

	document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

	document.addEventListener('keypress', (event) =>{
		if (event.keycode === 13 || event.which === 13 ) {
			ctrlAddItem();
			
		};
	})

})(budgetController, UIController);


















