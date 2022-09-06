
function Spy() {
    console.log('Spy')
}
function receivesAFunction(Spy){
    Spy();
}   
receivesAFunction();



    

function returnsANamedFunction(){
    const named = function namedFunction() {
        console.log("I am named!");
    }
        return named;
 }
returnsANamedFunction();

function returnsAnAnonymousFunction() {
    return function() {
        console.log('just call me anonymous')
    }
}  
     
    

returnsAnAnonymousFunction();