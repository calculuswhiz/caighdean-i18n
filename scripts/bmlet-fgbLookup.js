javascript:(() => {
	/* Bookmarklet to look up selected word in FGB*/
	const source = "https://www.teanglann.ie/en/fgb/";
	const selection = window.getSelection();
	let word = selection.toString().trim();
	if (word) {
		if (word[1] === 'h' && confirm('De-lenite?')) {
			word = word[0] + word.slice(2);
		}
		const url = `${source}${encodeURIComponent(word)}`;
		window.open(url, "_blank");
	}
})();