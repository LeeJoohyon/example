function showScope() {
    return scope;
}
var scope = "global";
console.log(scope); // "global"
console.log(showScope()); // "global"