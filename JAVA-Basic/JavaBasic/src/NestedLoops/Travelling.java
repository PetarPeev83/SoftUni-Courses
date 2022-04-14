package NestedLoops;

import java.util.Scanner;

public class Travelling {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String destination = scan.nextLine();

        while (!destination.equals("End")) {

            double budget = Double.parseDouble(scan.nextLine());

            while (budget > 0) {
                double currentSum = Double.parseDouble(scan.nextLine());
                budget -= currentSum;
            }
            System.out.printf("Going to %s!\n", destination);
            destination = scan.nextLine();
        }
    }
}
