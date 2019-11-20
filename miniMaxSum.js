//https://www.hackerrank.com/challenges/mini-max-sum/problem'
//Given five positive integers, 
//find the minimum and maximum values 
// that can be calculated by summing exactly 
// four of the five integers. 
// Then print the respective minimum and maximum values
//  as a single line of two space-separated long integers.

function miniMaxSum(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0, max_sum = 0, min_sum = 0;
    for(let i = 0 ; i < arr.length; i ++){
        sum += arr[i];
        if(arr[i]>max){
            max = arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }  
        
    }
   max_sum = sum - min;
   min_sum = sum - max;

   return min_sum + " " + max_sum;
} 

console.log(miniMaxSum([8,8,3,2,1,5,6,6,10]));