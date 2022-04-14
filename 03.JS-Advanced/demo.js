function demo(){
let tasks = [`${this.name} is working on a complicated task.`,
`${this.name} is taking time off work.`,
`${this.name} is supervising junior workers.`];


    let currentTask = tasks.shift();
    console.log(currentTask);
    tasks.push(currentTask);
    console.log(tasks);
}
demo();
demo();