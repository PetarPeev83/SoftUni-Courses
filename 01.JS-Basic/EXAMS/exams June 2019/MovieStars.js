function movieStars(input) {

    let budget = input.shift();
    let actor = String(input.shift());

    while (actor !== "ACTION") {

        let currentActorSallary = 0;

        if (actor.length > 15) {
            currentActorSallary = budget * 0.2;
        } else {
            currentActorSallary = Number(input.shift());
        }
        budget -= currentActorSallary;
        if (budget < 0) {
            console.log(`We need ${Math.abs(budget).toFixed(2)} leva for our actors.`);
            return;
        }
        actor = String(input.shift());
    }
    console.log(`We are left with ${budget.toFixed(2)} leva.`);
}
movieStars//(["90000", "Christian Bale", "70000.50", "Leonard DiCaprio", "Kevin Spacey", "24000.99"]);
    (["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);