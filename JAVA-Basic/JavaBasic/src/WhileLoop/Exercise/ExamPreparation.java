package WhileLoop.Exercise;

import java.util.Scanner;

public class ExamPreparation {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int badGrades = Integer.parseInt(scan.nextLine());
        double gradeSum = 0;
        int badGradesCounter = 0;
        int gradeCounter = 0;
        String lastExerciseName = "";

        String exerciseName = scan.nextLine();

        while (!exerciseName.equals("Enough")) {
            int currentGrade = Integer.parseInt(scan.nextLine());
            gradeSum += currentGrade;
            gradeCounter++;

            if (currentGrade <= 4) {
                badGradesCounter++;
            }
            if (badGradesCounter >= badGrades) {
                System.out.printf("You need a break, %d poor grades.", badGrades);
                return;
            }
            lastExerciseName = exerciseName;
            exerciseName = scan.nextLine();
        }
        System.out.printf("Average score: %.2f\n", gradeSum / gradeCounter);
        System.out.printf("Number of problems: %d\n", gradeCounter);
        System.out.printf("Last problem: %s", lastExerciseName);
    }
}
