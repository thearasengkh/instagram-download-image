function downloadImage() {

	var link = document.createElement("a");

	link.setAttribute("href", $('body > div:nth-child(15) > div > div.zZYga > div > article > div._97aPb > div > div > div.KL4Bh > img').src);
	link.setAttribute("download", "");
	link.setAttribute("target", "_blank");
	link.click();

}


function downloadImageByIndex(index) {

	var link = document.createElement("a");

	link.setAttribute("href", $('body > div:nth-child(14) > div > div.zZYga > div > article > div._97aPb > div > div > div > div.tN4sQ.zRsZI > div > div > div > ul > li:nth-child('+index+') > div > div > div > div.KL4Bh > img').src);
	link.setAttribute("download", "");
	link.setAttribute("target", "_blank");
	link.click();

}
