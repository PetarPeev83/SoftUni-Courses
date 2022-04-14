package ForLoop.Exercise;

import java.util.Scanner;

public class OddEvenPosition {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        double oddSum = 0;
        double oddMin = Double.MAX_VALUE;
        double oddMax = Double.NEGATIVE_INFINITY;
        double evenSum = 0;
        double evenMin = Double.MAX_VALUE;
        double evenMax = Double.NEGATIVE_INFINITY;

        for (int i = 1; i <= n; i++) {
            double x = Double.parseDouble(scan.nextLine());
            if (i % 2 != 0) {
                oddSum += x;
                oddMin = Math.min(oddMin, x);
                oddMax = Math.max(oddMax, x);
            } else {
                evenSum += x;
                evenMin = Math.min(x, evenMin);
                evenMax = Math.max(x, evenMax);
            }
        }
        System.out.printf("OddSum=%.2f,\n", oddSum);
        if (oddMin == Double.MAX_VALUE) {
            System.out.println("OddMin=No,");
        } else {
            System.out.printf("OddMin=%.2f,\n", oddMin);
        }
        if (oddMax == Double.NEGATIVE_INFINITY) {
            System.out.println("OddMax=No,");
        } else {
            System.out.printf("OddMax=%.2f,\n", oddMax);
        }
        System.out.printf("EvenSum=%.2f,\n", evenSum);
        if (evenMin == Double.MAX_VALUE) {
            System.out.println("EvenMin=No,");
        } else {
            System.out.printf("EvenMin=%.2f,\n", evenMin);
        }
        if (evenMax == Double.NEGATIVE_INFINITY) {
            System.out.println("EvenMax=No");
        } else {
            System.out.printf("EvenMax=%.2f\n", evenMax);
        }
    }
}
