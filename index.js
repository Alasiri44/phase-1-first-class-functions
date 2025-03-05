function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function health(){
        return '';
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        return "";
    };
}