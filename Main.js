
// Oefening 1A
function add(a, b) {
    return a + b;
}

// Oefening 1B
let addExercise = (a, b) => {
    return a + b;
}

// Oefening 2
function operate(a, b, fn) {
    return fn(a, b);
}

function multiply(a, b) {
    return a * b;
}

// Oefening 3
operate(addExercise(2, 3, multiply))