/*var botoi1 = document.getElementById("calcular");




function getPrimes() {
	var max= document.getElementById("number").value;
    var sieve = [],
        i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    console.log(primes);
}

if (botoi1) {
        botoi1.addEventListener("click", getPrimes, false);
    }
*/
window.onload=function(){
var botoi1 = document.getElementById("calcular");
var input=document.getElementById("number");
var results=document.getElementById("results");

var worker=new Worker('assets/js/primes.es');
botoi1.addEventListener('click', function(e){

e.preventDefault();
worker.postMessage(num);

results.innerHTML=primes.join(" ");

});

worker.addEventListener('message', function(e){
	var primes=e.data;
	results.innerHTML=primes.join(" ");


});





};