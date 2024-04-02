import { useState } from "react";

const MyComponent = () => {
	const [counter, setCounter] = useState(0)

	const handleCounter = () => {
		setCounter(prev => prev + 1)
	}

	if (counter === 5) {
		throw new Error("There was an error")
	}
	return (
		<div>
			<h3>MyComponent {counter}</h3>
			<button onClick={handleCounter}>Increment</button>
		</div>
	);
};

export default MyComponent;