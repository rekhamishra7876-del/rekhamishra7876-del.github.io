const firstNumberInput = document.querySelector("#first-number");
const secondNumberInput = document.querySelector("#second-number");
const resultOutput = document.querySelector("#result");
const message = document.querySelector("#message");
const operationButtons = document.querySelectorAll("[data-operation]");

function calculate(operation) {
	const firstValue = firstNumberInput.value.trim();
	const secondValue = secondNumberInput.value.trim();

	message.textContent = "";

	if (firstValue === "" || secondValue === "") {
		resultOutput.textContent = "Enter two numbers";
		message.textContent = "Both number fields are required.";
		return;
	}

	const firstNumber = Number(firstValue);
	const secondNumber = Number(secondValue);
	let result;

	switch (operation) {
		case "add":
			result = firstNumber + secondNumber;
			break;
		case "subtract":
			result = firstNumber - secondNumber;
			break;
		case "multiply":
			result = firstNumber * secondNumber;
			break;
		default:
			return;
	}

	resultOutput.textContent = String(result);
}

operationButtons.forEach((button) => {
	button.addEventListener("click", () => {
		calculate(button.dataset.operation);
		button.classList.remove("is-glowing");
		void button.offsetWidth;
		button.classList.add("is-glowing");
	});

	button.addEventListener("animationend", () => {
		button.classList.remove("is-glowing");
	});
});
