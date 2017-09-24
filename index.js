const express = require('express');
const app     = express();

let count = 0; 

app.use((req,res,next)=> {console.log(`Номер вызовa - ${++count}`); next(); } )
   .get('/add/:a/:b'                       ,(req,res) => res.send(String( +req.params.a + +req.params.b )))
   .get('/subtract/:a/:b'                  ,(req,res) => res.send(String( +req.params.a - +req.params.b )))
   .get('/multiply/:a/:b'                  ,(req,res) => res.send(String( +req.params.a * +req.params.b )))
   .get('/divide/:a/:b'                    ,(req,res) => res.send(String( +req.params.a / +req.params.b )))
   .get('/pow/:a/:b'                       ,(req,res) => res.send(String( Math.pow(req.params.a, req.params.b) )))
   .get('/kramer/:a1/:b1/:c1/:a2/:b2/:c2'  ,(req,res) => {
   		let a1 = +req.params.a1,
   			b1 = +req.params.b1,
   			c1 = +req.params.c1,
   			a2 = +req.params.a2,
   			b2 = +req.params.b2,
   			c2 = +req.params.c2;

   		res.json({
   			x1 : String( (b2*c1 - b1*c2) / (a1*b2 - a2* b1) ),
   			x2 : String( (a1*c2 - a2*c1) / (a1*b2 - a2* b1) )
   		});
   	});

app.listen(3000, ()=>console.log('Ready'));
