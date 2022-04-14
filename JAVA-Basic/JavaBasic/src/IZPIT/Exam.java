package IZPIT;

import java.util.Scanner;

public class Exam {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int studentsNum = Integer.parseInt(scan.nextLine());
        int poor = 0;
        int average = 0;
        int good = 0;
        int excellent = 0;
        double sumOfRatings = 0;

        for (int i = 1; i <= studentsNum; i++) {

            double currentCheck = Double.parseDouble(scan.nextLine());

            if (currentCheck >= 2 && currentCheck <= 2.99) {
                poor++;
                sumOfRatings += currentCheck;
            } else if (currentCheck >= 3 && currentCheck <= 3.99) {
                average++;
                sumOfRatings += currentCheck;
            } else if (currentCheck >= 4 && currentCheck <= 4.99) {
                good++;
                sumOfRatings += currentCheck;
            } else {
                excellent++;
                sumOfRatings += currentCheck;
            }
        }
        System.out.printf("Top students: %.2f%%\n", (1.0 * excellent / studentsNum) * 100);
        System.out.printf("Between 4.00 and 4.99: %.2f%%\n", (1.0 * good / studentsNum) * 100);
        System.out.printf("Between 3.00 and 3.99: %.2f%%\n", (1.0 * average / studentsNum) * 100);
        System.out.printf("Fail: %.2f%%\n", (1.0 * poor / studentsNum) * 100);
        System.out.printf("Average: %.2f\n", sumOfRatings / studentsNum);
    }
}
