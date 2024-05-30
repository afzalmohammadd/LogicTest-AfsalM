  const arr = [3, 4, 9, 3, 8, 0, 4, 9];

function removeDuplicates(arr) {
    const result = [arr[0]]

    for (let i = 1; i < arr.length; i++) {
        let isUnique = true;
        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                isUnique = false
                break
            }
        }
        if (isUnique) {
            result.push(arr[i])
        }
    }

    return result
}

console.log(removeDuplicates(arr))
