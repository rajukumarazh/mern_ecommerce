function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = src;
		script.onload = () => {
			resolve(true);
		};
		script.onerror = () => {
			resolve(false);
		};
		document.body.appendChild(script);
	});
}

function CheckoutForm() {
	async function displayRazorpay() {
		const res = await loadScript(
			"https://checkout.razorpay.com/v1/checkout.js",
		);

		if (!res) {
			alert("Razorpay SDK failed to load...");
			return;
		}
	}

	return (
		<div className="App">
			<button className="App-link" onClick={displayRazorpay}>
				Pay ₹5 hello
			</button>
		</div>
	);
}

export default CheckoutForm;
