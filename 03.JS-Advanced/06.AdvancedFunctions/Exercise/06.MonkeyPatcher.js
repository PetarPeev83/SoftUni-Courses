function solution(input) {
    // console.log(this);
    let obj = this;
    if (input == 'upvote') {
        obj.upvotes++;
    } else if (input == 'downvote') {
        obj.downvotes++;
    } else if (input == 'score') {
        command = 'score';
        return score(obj.upvotes, obj.downvotes);
    }
    function score(up, down) {
        // console.log(obj);
        let rating = "";
        let greaterNum = Math.max(up, down);
        if (up + down > 50) {
            let numToAdd = Math.ceil(greaterNum * 0.25)
            up += numToAdd;
            down += numToAdd;
        }
        let percentPositive = (obj.upvotes / (obj.upvotes + obj.downvotes)) * 100;
        if (obj.upvotes + obj.downvotes < 10) {
            rating = 'new';
        }
        else if (percentPositive > 66) {
            rating = 'hot';
        } else if (obj.upvotes >= obj.downvotes && obj.upvotes + obj.downvotes > 100) {
            rating = 'controversial';
        } else if (obj.upvotes < obj.downvotes) {
            rating = 'unpopular';
        } else {
            rating = 'new';
        }
        return [up, down, (obj.upvotes - obj.downvotes), rating];
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100

};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');         // (executed 50 times)
}
console.log(score);
score = solution.call(post, 'score');
console.log(score);