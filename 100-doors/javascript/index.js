/* There are 100 doors in a row that are all initially closed.

You make 100 passes by the doors.

The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).

The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.

The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the 100th door.


Task
Answer the question:   what state are the doors in after the last pass?   Which are open, which are closed? */

const doors = Array.from({ length: 100 }, () => false);

console.time("nested loops");
for (let i = 1; i < doors.length + 1; i += 1) {
  for (let j = i; j < doors.length + 1; j += i) {
    doors[j - 1] = !doors[j - 1];
  }
}

for (let i = 0; i < doors.length; i++) {
  const door = doors[i];
  if (door) {
    console.log("Door %d is open", i + 1);
  }
}
console.timeEnd("nested loops");

// observation: every position where the door is open (true) is a perfect square

// optimized
console.time("optimized");
for (let door = 1; door < doors.length + 1; door++) {
  const sqrt = Math.sqrt(door);
  if (sqrt === (sqrt | 0)) {
    console.log("Door %d is open", door);
  }
}
console.timeEnd("optimized");

// optimized++
console.time("optimized++");
for (let door = 1; door < Math.sqrt(doors.length + 1); door++) {
  console.log("Door %d is open", door ** 2);
}
console.timeEnd("optimized++");

// optimized++
console.time("optimized+++");
const length = Math.sqrt(doors.length + 1);
for (let door = 1; door < length; door++) {
  console.log("Door %d is open", door ** 2);
}
console.timeEnd("optimized+++");

// Environment: Bun

// Benchmark 1
// [0.48ms] nested loops
// [0.09ms] optimized
// [0.07ms] optimized++
// [0.05ms] optimized+++

// Benchmark 2
// [0.28ms] nested loops
// [0.13ms] optimized
// [0.06ms] optimized++
// [0.03ms] optimized+++

// Benchmark 3
// [0.76ms] nested loops
// [0.14ms] optimized
// [0.05ms] optimized++
// [0.04ms] optimized+++
