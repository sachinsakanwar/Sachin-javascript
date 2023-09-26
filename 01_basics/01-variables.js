const accountId = 12345;
let emailId = "sachin@yahoo.com";
var accountPass = 123567;
accountCity = "pune";
let accountState ;

// accountId = 2 // not allowed

accountPass = '2497957';
accountState = "Mumbai";

console.log(accountState);
console.table([accountId,accountPass,accountState,accountCity]);

/* prefer to not use var due to block scope and functional scope issue */