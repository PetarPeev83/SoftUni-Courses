function highJump(input) {

    let target = Number(input[0]);
    let currentHeight = 0;
    let index = 1;
    let currentTarget = target - 30;
    let totalJumps = 0;

    for (currentTarget; currentTarget <= target; currentTarget += 5) {
        let fails = 0;
        while (fails <3) {
            currentHeight = Number(input[index]);
            totalJumps++;
            if (currentHeight > currentTarget) {
                index++;
                break;
            } else {
                fails++;
            }
            index++;
        }
        if (fails >= 3) {
            console.log(`Tihomir failed at ${currentTarget}cm after ${totalJumps} jumps.`);
            return;
        }
    }
    console.log(`Tihomir succeeded, he jumped over ${target}cm after ${totalJumps} jumps.`);
}
highJump//(["231", "205", "212", "213", "228", "229", "230", "235"]);
(["250","225","224","225","228","231","235","234","235"]);