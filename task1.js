let s = "abacabad";

function solution(s) {
    for(let char of s) {
        if(s.split('').filter(value => value == char).length == 1) {
            return char;
        }
    }
    return '_';
}

console.log(solution(s));