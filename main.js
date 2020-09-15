function productExceptSelf(nums) {
    // We will need two arrays
    // One front and one from back
    let front = [];
     let back = [];
    
    // Set the first element of first to 1
    front[0] = 1; 
    
    // Set the last element of back to 1
    back[nums.length - 1] = 1;
    
    // Now multiply
    for(let i = 1; i < nums.length; i++) {
        front[i] = nums[i-1]*front[i-1];
    }
    
    for(let i = nums.length - 2; i >= 0; i--) {
        back[i] = nums[i+1]*back[i+1];
    }
    
    // Multiply front and back and put it in nums/ result
    for(let i = 0; i< front.length; i++) {
        nums[i] = front[i]*back[i];
    }
    

    // Return nums
    return nums;

};

let arry= [1,2,3,4];

console.log(productExceptSelf(arry));


