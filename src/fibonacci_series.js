'use strict';

function fibonacci_series(n) {
    var fbnc = new Array();
    fbnc[0] = 0;
    fbnc[1] = 1;
    var num = 2;
    while(num<=n){
        fbnc[num] = fbnc[num-1]+fbnc[num-2];
        num++;
    }
    return fbnc;
}

module.exports = fibonacci_series;
