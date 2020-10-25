



// function isValidSubsequence(array, sequence){
//     let seqIdx = 0;
//     for (const value of array){
//         if(seqIdx === sequence.length) break;
//         if (sequence[seqIdx] === value) seqIdx ++
//     }
//     return seqIdx === sequence.length
// }





    // function isValidSubsequence(array, sequence) {
    //       let arrIdx = 0;
    //       let seqIdx = 0;

    //       while(arrIdx < array.length && seqIdx < sequence.length){
    //           if (array[arrIdx] === sequence[seqIdx]) 
    //             console.log(array[arrIdx]);
    //             console.log(sequence[seqIdx])
    //           seqIdx++;
    //           arrIdx++
    //       }
    //       return seqIdx === sequence.length
    //     }  
    
    


// let arr1 = [5,1,22,25,6,-1,8,10]
// let arr2 = [1, 6, -1, 10]

// console.log(isValidSubsequence(arr1,arr2))


// function twoNumberSum(array, targetSum){
//     for(let i = 0; i < array.length - 1; i++){
//     const first = array[i];
//     for (let j = i + 1; j< array.length; j++){
//         const secondNum = array[j]
//         if(first + secondNum === targetSum)
//             return [first, secondNum]
//      }
//     }
//     return [];
// }

// array  = [3,5, -4, 8, 11, 1, -1, 6]
// targetSum = 10 

// console.log( add(array, targetSum))


// function add(array, targetSum){
//     const nums = {};
//     for(const num of array){
//         const potentialMatch = targetSum - num

//         if(potentialMatch in nums){
//         return [potentialMatch, num]
//     } else {
//         nums[num] = true
//     }
// }
//     return [];

// }