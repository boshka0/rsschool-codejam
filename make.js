function make(a){
    let array = [a];
    function b(c){
        if(typeof c === "function") return array.reduce(c);
        else {
            array.push(...arguments);
            return b;
        }
    }
    return b;
}