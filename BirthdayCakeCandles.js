//https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
    var max = 0, count = 0;
    for(let i=0; i< ar.length; i ++){
        if(ar[i] > max ){
            max = ar[i];
            count = 1;
        }else if (ar[i]==max){
            count ++;
        }
    }
    return count;

}

console.log(birthdayCakeCandles([2,4,3,4,5,6]));