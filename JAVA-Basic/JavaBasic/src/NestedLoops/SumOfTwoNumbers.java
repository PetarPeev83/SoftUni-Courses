package NestedLoops;

import java.util.Scanner;

public class SumOfTwoNumbers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int startNumber = Integer.parseInt(scan.nextLine());
        int endNumber = Integer.parseInt(scan.nextLine());
        int magicNumber = Integer.parseInt(scan.nextLine());
        int combinationsCounter = 0;

        for (int k = startNumber; k <= endNumber; k++) {
            for (int l = startNumber; l <= endNumber; l++) {
                combinationsCounter++;
                if (k + l == magicNumber) {
                    System.out.printf("Combination N:%d (%d + %d = %d)", combinationsCounter, k, l, magicNumber);
                    return;
                }
            }
        }
        System.out.printf("%d combinations - neither equals %d", combinationsCounter, magicNumber);
    }
}
