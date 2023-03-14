

let resultField: HTMLParagraphElement = null!
let input = ''

function updateResult() {
	if (input.length === 0) {
		resultField.innerHTML = '0';

		return;
	}

	try {
		// @ts-ignore
		const res = evaluateString(input);	

		if (res !== null && res.toString() !== input) {
			resultField.innerHTML = `${input} = ${res}`;

			return;
		}
	} catch { }

	resultField.innerHTML = `${input}`;
}

window.onload = function () {
	resultField = document.getElementById('result') as unknown as HTMLParagraphElement

	for (const btn of document.getElementsByClassName('calc-btn') as unknown as HTMLButtonElement[]) {
		btn.onclick = onBtnPress;
	}

	reset();
};

function onBtnPress(this: GlobalEventHandlers, e: MouseEvent) {
	let text = (e.target as HTMLButtonElement).innerHTML.trim();

	if (text === 'Clear') {
		reset();

		return;
	}

	handleKey(text);
}

function handleKey(key: string) {
	if (key === 'Backspace') {
		input = input.slice(0, -1);
	} else {
		input += `${key}`;
	}

	updateResult();
}

function reset() {
	input = '';

	updateResult();
}

document.addEventListener('keydown', function (event) {
	const key = event.key;

	if (
		!Number.isNaN(+key) ||
		key === '+' ||
		key === '-' ||
		key === '*' ||
		key === '/' ||
		key === 'Backspace'
	) {
		handleKey(key);
	}
});
