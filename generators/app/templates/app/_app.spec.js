var App = require('./app');

describe("Something", function(){

    it("should be called hello", function(){
        var app = new App();
        expect(app.name).to.equal('hello');
    });

});
