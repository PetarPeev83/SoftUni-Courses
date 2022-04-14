package NestedLoops.Exercise;

import java.util.Scanner;

public class SumPrimeNonPrime {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String input = scan.nextLine();
        int primeSum = 0;
        int nonPrimeSum = 0;

        while (!input.equals("stop")) {
            int currentNumber = Integer.parseInt(input);
            int counter = 0;

            if (currentNumber < 0) {
                System.out.println("Number is negative.");
                input = scan.nextLine();
                continue;
            } else if (currentNumber < 2) {
                nonPrimeSum += currentNumber;
            } else {
                for (int x = 1; x <= currentNumber; x++) {
                    if (currentNumber % x == 0) {
                        counter++;
                    }
                }
            }
            if (counter <= 2) {
                primeSum += currentNumber;
            } else {
                nonPrimeSum += currentNumber;
            }
            input = scan.nextLine();
        }
        System.out.printf("Sum of all prime numbers is: %d%n", primeSum);
        System.out.printf("Sum of all non prime numbers is: %d", nonPrimeSum);
    }
}

