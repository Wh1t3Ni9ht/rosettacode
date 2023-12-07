/* There are 100 doors in a row that are all initially closed.

You make 100 passes by the doors.

The first time through, visit every door and  toggle  the door  (if the door is closed,  open it;   if it is open,  close it).

The second time, only visit every 2nd door   (door #2, #4, #6, ...),   and toggle it.

The third time, visit every 3rd door   (door #3, #6, #9, ...), etc,   until you only visit the 100th door.


Task
Answer the question:   what state are the doors in after the last pass?   Which are open, which are closed? */

public class Main {
  public static void main(String[] args) {
    boolean[] doors = new boolean[100];

    // for (int i = 0; i < doors.length; i++) {
    // for (int j = i; j < doors.length; j += i + 1) {
    // doors[j] = !doors[j];
    // }
    // }

    // for (int i = 0; i < doors.length; i++) {
    // if (doors[i])
    // System.out.printf("Door %d is opened\n", i + 1);
    // }

    // Optimized
    double length = Math.sqrt(doors.length);
    for (int i = 1; i <= length; i++) {
      System.out.printf("Door %d is opened\n", i * i);
    }
  }
}