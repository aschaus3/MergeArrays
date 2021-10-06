
var one = [1,2,6,7];
var two = [3,4,5,9];

console.log(mergeArrays(one,two).toString());


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

