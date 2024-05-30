const str = "The quick brown fox jumps over the lazy dog"

function findLongestWord (str) {
    const arr = str.split(" ")
    let largest = arr[0].length
    let longestWords = []
    let index = 0

    for(let i=1;i<arr.length;i++){
        if(arr[i].length>largest){
            largest = arr[i].length
        }
    }

    for(i=0;i<arr.length;i++){
        if(arr[i].length==largest){
            longestWords[index] = arr[i]
            index++
        }
    }

    return longestWords
    
}

console.log(findLongestWord(str));