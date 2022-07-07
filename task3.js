let inputArray = ["aba", "bbb", "bab"];

function solution(inputArray) {
    let bool = false;
    function swap(lst, n) {
        
        if(n < 2) {
            bool = bool || checkSwap(lst);
            if(bool) {
                return;
            }
        } else {
            for(let i = n - 1; i >= 0; i--) {
                [lst[i], lst[n - 1]] = [lst[n - 1], lst[i]];
                swap(lst, n - 1);
                [lst[i], lst[n - 1]] = [lst[n - 1], lst[i]];
            }
        }
    }

    function checkSwap(lst) {
        for(let i = 0; i < lst.length - 1; i++) {
            let counter = 0;
            for(let j = 0; j < lst[i].length; j++) {
                if(lst[i][j] != lst[i + 1][j]) {
                    counter++;
                }
            }
            if(counter != 1) {
                return false;
            }
        }
        return true;
    }
    swap(inputArray, inputArray.length);
    return bool;
}

console.log(solution(inputArray));