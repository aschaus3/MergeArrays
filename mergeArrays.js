
var one = [1,2,6,7];
var two = [3,4,5,9];

console.log(mergeArrays(one,two).toString());
console.log(mergeArraysTwo(one,two).toString());


function mergeArrays(arr1, arr2)
{
    const answer = [];
    var length = arr1.length + arr2.length;
    var i = 0, j = 0;
    
    for(var k = 0; k < length; k++)
    {
        if(arr1[i] <= arr2[j])
        {
            answer.push(arr1[i])
            i++;
        }
        else if(arr2[j] < arr1[i])
        {
            answer.push(arr2[j])
            j++;
        }
        else if(i === arr1.length && j != arr2.length)
        {
            answer.push(arr2[j])
            j++;
        }
        else
        {
            answer.push(arr1[i]);
            i++;
        }
    }
    return answer;
}

function mergeArraysTwo(arr1, arr2)
{
    var length = arr1.length + arr2.length;
    var j = 0;

    for(var i = 0; i < length; i++)
    {
        if(arr2[j] < arr1[i])
        {
            arr1.splice(i,0,arr2[j]);
            j++;
        }

        if(i >= arr1.length && j != arr2.length)
        {
            arr1.push(arr2[j]);
            j++;
        }

    }
    return arr1;
}

