function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆
        
    //Write your code here:
    var generation = [0, 1];
        
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else {
        for (var i = 2; i < n; i++) {
            generation.push(generation[i - 2] + generation[i - 1]);
        }
        return generation;
    }

    //Do NOT change any of the code below 👇
}
