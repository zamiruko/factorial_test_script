'use stricts'

let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://qainterview.pythonanywhere.com';


describe('Obtener página: ',()=>{

	it('Devuelve el HTML de la página', (done) => {
		chai.request(url)
			.get('/')
			.end( function(err,res){
				console.log(res.body)
				expect(res).to.have.status(200);
				done();
			});
	});

});

for(var i=-1000; i<=1000; i+=10){
	let valor = i.toString();

	describe('Obtener Factorial: ',()=>{
		
		it(('Factorial de '+valor), (done) => {
			chai.request(url)
				.post('/factorial')
				.type('form')
				.send({number:valor})
				.end( function(err,res){
					console.log(res.body)
					expect(res).to.have.status(200);
					done();
				});
		});
	});
}