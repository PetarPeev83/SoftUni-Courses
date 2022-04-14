package WhileLoop;

import java.util.Scanner;

public class Graduation {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String name = scan.nextLine();
        int classCounter = 1;
        double gradeSum = 0.0;
        int falseCounter = 0;

        while (classCounter <= 12 && falseCounter < 2) {
            double currentGrade = Double.parseDouble(scan.nextLine());

            if (currentGrade < 4.00) {
                falseCounter++;
            } else {
                gradeSum += currentGrade;
                classCounter++;
            }
        }
        if (falseCounter >= 2) {
            System.out.printf("%s has been excluded at %d grade", name, classCounter);
        } else {
            System.out.printf("%s graduated. Average grade: %.2f", name, gradeSum / 12);
        }
    }
}
