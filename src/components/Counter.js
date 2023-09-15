import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react'



const Counter = () => {
  const[ userInput, setUserInput] = useState("");

	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.counter.showCounter)

  const toggleText = showCounter ? 'Hide increase by set amount tool' : 'Use input tool';
  console.log({show: showCounter})

  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
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
					onClick={() => dispatch({ type: "decrement" })}>
					-
				</button>
				{showCounter && (
					<button
						onClick={() =>
							dispatch({ type: "increase", value: Number(userInput) })
						}>
						Increase by set Input Amount
					</button>
				)}
				<button
					aria-label='increment'
					onClick={() => dispatch({ type: "increment" })}>
					+
				</button>
			</div>
			<br></br>
			<div className={classes.toggle}>
				<button onClick={toggleCounterHandler}>{toggleText}</button>
			</div>
			<button onClick={() => dispatch({ type: "reset" })}>Reset Counter</button>
		</main>
	);
};

export default Counter;
