import { adder } from "./lib";

let value = 0;

addEventListener("message", (event: any) => {
	value = adder(value);
	postMessage(value);
});
