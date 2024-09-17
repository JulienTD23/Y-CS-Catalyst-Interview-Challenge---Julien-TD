// How do I run this script? 
// node Task2.ts    

todoList = [
    "Apply to y/cs!",
    "Pick out my classes",
    "Have dinner with my suite"
];
 
/**
 * YOUR OBJECTIVE
 * Write a function that takes in an index of the todoList array 
 * and deletes the corresponding string (assume 0-indexing).
 * 
 * Only modify the file under the "// YOUR CODE HERE" comments.
 * 
 * Ex: 
 * todoList[0] = "Apply to y/cs!", and after deleteTodo(0) has been ran
 * the todoList array should look like this:
 * 
 * const todoList = [
    "Pick out my classes",
    "Have dinner with my suite"
];
 */


/* DOCUMENTATION:
   Used the delete operator to delete the todoList entry at [index]. 
   Slightly tweaked the print statements for a cleaner, more readable output. 
 */
function deleteTodo(index) {
    console.log("Before: " + todoList.join(', ') + '.');
    // YOUR CODE HERE
    delete todoList[index];
    console.log("After:" + (todoList.join(', ')).slice(1) + '.');
}

/**
 * Main is considered the entry point to a procedural program. Within y/cs,
 * it's rare for us to write procedures in JS, but for learning purposes
 * we do it here
 */
function mainTask2() {
    deleteTodo(0);
}

// This bit of code ensures that a main method exists! If it doesn't, then it throws an error
if (require.main === module) {
    // unlike other languages like Java, there is no built in main method. We use a funciton called
    // main by convention.
    mainTask2();
}
