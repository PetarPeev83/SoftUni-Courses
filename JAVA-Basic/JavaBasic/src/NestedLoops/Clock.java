package NestedLoops;

public class Clock {
    public static void main(String[] args) {

        for (int i = 0; i <= 23; i++) {
            for (int x = 0; x <= 59; x++) {
                System.out.println(i + ":" + x);
            }
        }
    }
}
