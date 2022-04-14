package NestedLoops.Exercise;

import java.util.Scanner;

public class TrainTheTrainers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        String input = scan.nextLine();
        double totalGradeSum = 0;
        int totalGradeCounter = 0;

        while (!input.equals("Finish")) {
            String presentationName = input;
            int currentPresentationGradeCounter = 0;
            double currentPresentationGradeSum = 0;

            for (int i = 0; i < n; i++) {
                double currentGrade = Double.parseDouble(scan.nextLine());
                currentPresentationGradeSum += currentGrade;
                currentPresentationGradeCounter++;
                totalGradeCounter++;
                totalGradeSum += currentGrade;
            }
            System.out.printf("%s - %.2f.\n", presentationName, currentPresentationGradeSum / currentPresentationGradeCounter);
            input = scan.nextLine();
        }
        System.out.printf("Student's final assessment is %.2f.", totalGradeSum / totalGradeCounter);
    }
}
