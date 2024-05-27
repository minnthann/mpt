var expect = chai.expect;

before (function(){
    window._temp = {};
    window._temp.log = console.log;
    window.console.log = (function(...args){
        var values = [];

        var log = function(args){
            values.push(args);
            window._temp.log(args);
        };
        log.callerdWith = function(){
        return values;
        };
        return log;
    })();
});

describe ("countdown", function(){
    it("should log numbers fron 'num' down to 1", function(){
        var num = 15 ;
        conutdown (num);
        expect(console.log.callerdWith()).to.eql([
            15,
            14,
            13,
            12,
            11,
            10,
            9,
            8,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
        ]);
    });
});
after (function(){
    console.log = window._temp.log;
    delete window._temp;
});