javascript:(() => {
	/* Bookmarklet to look up selected word in FGB*/
	const source = "https://www.teanglann.ie/en/fgb/";
	const selection = window.getSelection();
	const word = selection.toString().trim();
	if (word) {
		const url = `${source}${encodeURIComponent(word)}`;
		window.open(url, "_blank");
	}
})();