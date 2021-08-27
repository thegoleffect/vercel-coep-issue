import { useEffect, useRef, useState } from "react";

export const IndexPage = () => {
	const workerRef = useRef<Worker>();
	const [value, setValue] = useState(0);
	useEffect(() => {
		workerRef.current = new Worker(
			new URL("../worker/test.ts", import.meta.url)
		);
		workerRef.current.onmessage = (event: any) => {
			setValue(event.data);
		};

		return () => {
			workerRef.current.terminate();
		};
	}, []);

	const sendMessage = () => {
		workerRef.current.postMessage(true);
	};

	return (
		<>
			<span>{value}</span>
			<button onClick={sendMessage}>Worker:adder</button>
		</>
	);
};

export default IndexPage;
