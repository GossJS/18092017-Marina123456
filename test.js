let chai     = require('chai'),
	chaiHttp = require('chai-http'),
	server   = require('server'),
	expect   = chai.expect;

chai.use(chaiHttp);

let localServer = 'http://localhost:3000';

describe('add',()=>{
	it('it expect that GET add/5/6 return 11',(done)=>{
  		setTimeout(done, 300);
		chai.request(localServer)
			.get('/add/5/6')
			.end((err,res)=>{
				expect(res.text).to.equal('11'); 
				done();				
			})
	});
});

describe('subtract',()=>{
	it('it expect that GET /subtract/11/6 return 5',(done)=>{
  		setTimeout(done, 300);
		chai.request(localServer)
			.get('/subtract/11/6')
			.end((err,res)=>{
				expect(res.text).to.equal('5'); 
				done();				
			})
	});
});

describe('multiply',()=>{
	it('it expect that GET /multiply/2/7 return 14',(done)=>{
  		setTimeout(done, 300);
		chai.request(localServer)
			.get('/multiply/2/7')
			.end((err,res)=>{
				expect(res.text).to.equal('14'); 
				done();				
			})
	});
});

describe('divide',()=>{
	it('it expect that GET /divide/14/7 return 2',(done)=>{
  		setTimeout(done, 300);
		chai.request(localServer)
			.get('/divide/14/7')
			.end((err,res)=>{
				expect(res.text).to.equal('2'); 
				done();				
			})
	});
});

describe('pow',()=>{
	it('it expect that GET /pow/2/3 return 8',(done)=>{
  		setTimeout(done, 300);
		chai.request(localServer)
			.get('/pow/2/3')
			.end((err,res)=>{
				expect(res.text).to.equal('8'); 
				done();				
			})
	});
});

describe('kramer',()=>{
	it('it expect that GET /kramer/1/2/3/4/5/6 return {x1:-1, x2: 2}',(done)=>{
  		setTimeout(done, 300);
		chai.request(localServer)
			.get('/kramer/1/2/3/4/5/6')
			.end((err,res)=>{

				let obj = JSON.parse(res.text);

				expect(obj.x1).to.equal('-1');
				expect(obj.x2).to.equal('2');

				done();				
			})
	});
});