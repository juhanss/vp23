const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const pageHead = '<!DOCTYPE html>\n<html><head>\n\t<meta charset="utf-8"><title>Juhan Saar, veebiprogrammeerimine 2023</title>\n</head>\n<body>';
const pageBanner = '\n\t<img src="banner.png" alt="Kursuse bänner">'
const pageBody = '\n\t<h1>Juhan Saar</h1>\n\t<p>See veebileht on valminud TLÜ Digitehnoloogiate instituudi informaatika eriala õppetöö raames.</p><hr>';
const pageFoot = '\n\t<ht>\n</body>\n</html>';
http.createServer(function(req, res){
	let currentURL = url.parse(req.url, true);
	//console.log(currentURL);
	if (currentURL.pathname === "/") {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('\n\t<hr>\n\<p><a href="addname">Lisa oma nimi</a>!</p>');
		res.write(pageFoot);
		//console.log("Keegi vaatab!");
		return res.end()
	}
	else if (currentURL.pathname === "/addname"){
		(currentURL.pathname === "/") {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(pageHead);
		res.write(pageBanner);
		res.write(pageBody);
		res.write('\n\t<hr>\n\<h2> href="addname">Lisa oma nimi</h2>');
		res.write('\n\t<hr>\n\<h2> href="addname">Edaspidi lisame siia asju</h2>');
		res.write(pageFoot);
	}
	
	else if (currentURL.pathname === "/banner.png"); {
		console.log("Tahame pilti!");
		let bannerPath = path.join(__dirname, "public", "banner");
		//console.log(bannerPath + currentURL.pathname);
		fs.readFile(bannerPath + currentURL.pathname, (err,data)=>{
			if (err) {
				throw err;
			}
			else {
				res.writeHead(200, {"Content-type": "image/png"});
				res.end(data);
			}
		});
	}
	else {
		res.end("ERROR 404");
	}
	//valmis, saada ära
}).listen(5117);