var qr = require('qr-image');
var express = require('express');
var app = express();

app.get('/qr', function(req, res) {
	
	try {
		if(!req.query.text){
			console.error('Missing querystring text=');
		}else{
			var text = req.query.text; // $_GET["id"]
			var code = '';

			if(text != ''){
				code = qr.image(text, { 
					//type: 'svg' 
				});
			}else{
				code = qr.image(new Date().toString(), { 
					//type: 'svg' 
				});
			}
			//res.type('svg');
			code.pipe(res);
		}
	}catch(err) {
		console.log('[Exception][index.js]' + err);
		//document.getElementById("demo").innerHTML = err.message;
	}
});
app.listen(3000); 
