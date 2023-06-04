
const on = Array.from(document.querySelectorAll(".on"));
const off = Array.from(document.querySelectorAll(".off"));

console.log("popup start");

on.forEach((btn) => {
	btn.addEventListener("click", () => {
		chrome.storage.local.set({on : btn.src});
	});
});

off.forEach((btn) => {
	btn.addEventListener("click", () => {
		chrome.storage.local.remove("on");
	});
});


