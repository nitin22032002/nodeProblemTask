/*
Task : Our Task is to find the two element from array in which one element whose frequency is maximum and other whose frequency is minimum ?
  
                                    Algorithm
                                ==================

    1) We Take Array of bird which contain integer which represent bird type id .
    
    2) Now we check our array is sorted or not it take O(n) time .
        I do this step to save the space complexity if possible.
    
    3) Check The array is sorted or not.

    If Array is sorted then consider five variable minCount,maxCount,minElement,MaxElement,count.
    
        4) Initialize maxCount,minElement,maxElement variable with 0 value count by 1 and  minValue by length of array+1.

        5) Now Traverse the array start from 1 and iterate variable i=1 initialize
        
        6) now do count+=1 until a[i]==a[i-1]

        7) if(a[i]!=a[i-1])
            
            then
                compare count with minCount,MaxCount 
                    if(count>maxCount)
                        update maxCount and maxElement
                    if(count<minCount)
                        update minCount and minElement
                    count=1

        8) At the end when traverse end
             then
                compare count with minCount,MaxCount 
                    if(count>maxCount)
                        update maxCount and maxElement
                    if(count<minCount)
                        update minCount and minElement
        
        9) Return minElement and Maxelement

        10) Exit
    
    else

        4) Then Create an empty object countObj={}

        5) Traverse the array and add values in object as:
            
            if(a[i] in countObj)
                countObj[a[i]]+=1
            else
                countObj[a[i]]=1
        
        6) consider four variable minCount,maxCount,minElement,MaxElement.

        7) Initialize maxCount,minElement,maxElement variable with 0 value  and  minValue by length of array+1

        8) Now Traverse the countObj
            In Each Iteration Compare
                if(countObj[key]>maxCount)
                    update maxCount=countObj[key] and maxElement=key
                if(countObj[key]<minCount)
                    update minCount=countObj[key] and minElement=key
                if(countObj[key]==maxCount and maxElement>key)
                    update maxCount=countObj[key] and maxElement=key
                if(countObj[key]==minCount and minElement>key)
                    update minCount=countObj[key] and minElement=key
        
        9) Return MinElement and MaxElement
        
        10) Exit




*/

// function to check is array sorted O(n) time complexity and O(1) space complexity
function isArraySorted(array){
    for(let i=1;i<array.length;i++){
        if(array[i]<array[i-1])
            return false;
    }    
    return true;
}

// function to find min and max frequecy element 
    /*
    if array sorted
        O(n) time complexity and O(1) space complexity
    else
        O(n) time complexity and O(n) space complexity
    */
function findMinAndMaxFrequencyElement(array){
    let minCount = array.length+1
    let maxCount = 0
    let minElement = 0
    let maxElement = 0
    if(isArraySorted(array)){
        let count=1;
        
        for(let i=1;i<array.length;i++){
            
            if(array[i]!=array[i-1]){
                if(minCount>count){
                    minCount=count;
                    minElement=array[i-1];
                }
                if(maxCount<count){
                    maxCount=count;
                    maxElement=array[i-1];
                }
                count=0;
            }
            count+=1;
        }
        if(minCount>count && array.length>0){
            minCount=count;
            minElement=array[array.length-1];
        }
        else if(maxCount<count && array.length>0){
            maxCount=count;
            maxElement=array[array.length-1];
        }
        return [maxElement,minElement];
    }
    else{
        countObj={}
        for(let i=0;i<array.length;i++){
            if(array[i] in countObj){
                countObj[array[i]]+=1
            }
            else{
                countObj[array[i]]=1
            }
        }
        for(let key in countObj){
            key=parseInt(key)
            if(countObj[key]>maxCount){
                    maxCount=countObj[key] 
                    maxElement=key}
            if(countObj[key]<minCount)
                   { minCount=countObj[key] 
                    minElement=key}
            if(countObj[key]==maxCount && maxElement>key)
                   { maxCount=countObj[key] 
                    maxElement=key}
            if(countObj[key]==minCount && minElement>key)
                    {minCount=countObj[key] 
                    minElement=key}
        }
        return [maxElement,minElement];
    }

}
// given test case array are sorted

console.log("1",findMinAndMaxFrequencyElement([1,1,2,2,4,4,4,4,5]))
console.log("2",findMinAndMaxFrequencyElement([2,2,2,2,4,4,4,4,5]))
console.log("3",findMinAndMaxFrequencyElement([1,2,2,4,4,4,4,5]))

//custom test case array not sorted

console.log("4",findMinAndMaxFrequencyElement([2,2,2,1,1,1,1,4,4,4,3,3,3,7,7,7,7,5,5,7,5,3,2,1]))

