var expect = chai.expect;

describe (" aumArray", function() {
    it ("returns the total of all the numbers in 'arr'", function(){
        var arr = [4, 8, 15, 16, 23, 42];

        var result = sumArray (arr);

        expect(result).to.eql(108);
    });
});