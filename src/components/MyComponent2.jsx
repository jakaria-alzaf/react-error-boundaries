import { useState } from "react";


const MyComponent2 = () => {
	const [counter, setCounter] = useState(0)
	const handleCounter = () => {
		setCounter(prev => prev + 1)
	}
	if (counter === 10) {
		throw new Error("There was an error")
	}
	return (
		<div style={{ marginTop: '20px' }}>
			<h3>MyComponent 2 {counter}</h3>
			<button onClick={handleCounter}>Increment</button>
		</div>
	);
};

export default MyComponent2;