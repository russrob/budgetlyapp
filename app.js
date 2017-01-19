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
	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value'
	

	};

	return{
		getInput: () => {
			return{
			 type: document.querySelector(DOMstrings.inputType).value,//will be either inc(for income) or exp(for expense)
			 description: document.querySelector(DOMstrings.inputDescription).value,
			 value: document.querySelector(DOMstrings.inputValue).value
			}


			//
			
		}
		//return the DOMstrings that is
	}
})();


// Global Controller 
const controller = ((budgetCtrl, UICtrl) => {

	var ctrlAddItem = () => {

		//1. Get the field input data 
		var input = UICtrl.getInput();
		console.log(input);

		//2. Add the item to the budget controller 

		//3. Add the items to the UI 

		//4. Calulate the budget  

		//5. Display the budget in the UI 

	};
// Added event listener on the click button 
	document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
// Added event listener on the keycode aka the return button
	document.addEventListener('keypress', (event) =>{
		if (event.keycode === 13 || event.which === 13 ) {
			ctrlAddItem();
			
		};

	})

})(budgetController, UIController);


















