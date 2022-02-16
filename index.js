function peek(stack) {
    return stack[stack.length - 1];
}

function isBalanced(str) {
    let stack = [];
    stack.push();
    stack.pop();

    // iterasi melalui setiap huruf dari string
    for (let i = 0; i < str.length; i++) {
        let letter = str.charAt(i);
        // jika letter itu adalah paren pembuka, dorong ke tumpukan
        if (letter === '(') {
            stack.push(letter);
        } else if (letter === ')') {
            // jika huruf itu adalah tanda kurung penutup, pastikan itu memiliki tanda kurung buka yang cocok
            if (peek(stack) === '(') {
                stack.pop();
            } else {
                return false;
            }
        }
    }

    // jika nilai stack kosong
    return stack.length === 0;
}

console.log("1. () = " + isBalanced("() "));
console.log("2. ()() = " + isBalanced("()()"));
console.log("3. )( = " + isBalanced(")("));
console.log("4. " + isBalanced(""));
console.log("5.((())) = " + isBalanced("((()))"));
console.log("6. ((() = " + isBalanced("((()"));