let inputString = "foo(bar(baz))blim";

function solution(st) {

    while(st.indexOf('(') != -1) {
        st = st.substring(0, st.substring(0, st.indexOf(')')).lastIndexOf('(')) +
             st.substring(st.substring(0, st.indexOf(')')).lastIndexOf('(') + 1, st.indexOf(')')).split('').reverse().join('') +
             st.substring(st.indexOf(')') + 1);
    }
    return st;
}

console.log(solution(inputString));