#[  There are 100 doors in a row that are all initially closed.

You make 100 passes by the doors.

The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).

The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.

The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the 100th door.


Task
Answer the question:   what state are the doors in after the last pass?   Which are open, which are closed?  ]#
import std/math

var doors: array[100, bool]

# for i in countup(0, 4, 1+1):
#   echo i

# for i in 0..<100:
#   for j in countup(i, 99, i+1):
#     doors[j] = not doors[j]

# for i in 0..<100:
#   if doors[i]:
#     echo "Door ", i+1, " is open"

# Optimized
var length = int(sqrt(float(doors.len)))
for i in 1..length:
  echo "Door ", i * i, " is open"
