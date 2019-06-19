function callbackTest(a, b, callback)
{
    console.log("callbackTest, a:%s, b:%s", a, b);
    callback('success call callbackTest()');
}

callbackTest(1, 2, function(msg){
    console.log(msg);
});


var test = 1; 
var fun_callback = callbackTest(1,2);