const blocks_1 = [2, 6, 8, 5]

const blocks_2 = [1, 5, 5, 2, 6]

function solution(blocks, index) {
    const N = blocks.length
    let maxIndex = index;

    let longestDistance = 0;
    
    // Move first frog to the left
    let leftBlock = maxIndex;
    for (let i = maxIndex - 1; i >= 0; i--) {
        if (blocks[i] >= blocks[leftBlock]) {
            leftBlock = i;
        } else {
            break;
        }
    }

    // Move second frog to the right
    let rightBlock = maxIndex;
    for (let i = maxIndex + 1; i < N; i++) {
        if (blocks[i] >= blocks[rightBlock]) {
           rightBlock = i;
        } else {
            break;
        }
    }

    // Compute the distance between the blocks
    longestDistance = Math.abs(rightBlock - leftBlock) + 1;
    return longestDistance;
}
console.log(solution(blocks_1, 0))
console.log(solution(blocks_2, 3))
