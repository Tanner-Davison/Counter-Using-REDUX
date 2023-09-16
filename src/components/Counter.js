import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { counterActions } from "../store";

const Counter = () => {
	const [userInput, setUserInput] = useState("");

	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
	const showCounter = useSelector((state) => state.counter.showCounter);

	const toggleText = showCounter
		? "Hide input Tool"
		: "Use input tool";
	console.log({ show: showCounter });

	const toggleCounterHandler = () => {
		dispatch(counterActions.showCounter());
	};

	return (
		<main className={classes.counter}>
			<h1>Tanner's Redux Counter app</h1>
			<div className={classes.value}>{counter.counter}</div>
			{showCounter && (
				<input
					className={classes.input}
					onChange={(event) => setUserInput(event.target.value)}
					placeholder='set input amount'
				/>
			)}

			<div className={classes.buttons}>
				<button
					aria-label='decrement'
					onClick={() => dispatch(counterActions.decrement())}>
					-
				</button>
				{showCounter && (
					<button
						onClick={() =>
							dispatch(counterActions.increase(userInput))
						}>
						Increase by set Input Amount
					</button>
				)}
				<button
					aria-label='increment'
					onClick={() => dispatch(counterActions.increment())}>
					+
				</button>
			</div>
			<br></br>
			<div className={classes.toggle}>
				<button onClick={toggleCounterHandler}>{toggleText}</button>
			</div>
			<button onClick={() => dispatch(counterActions.reset())}>Reset Counter</button>
		</main>
	);
};

export default Counter;
