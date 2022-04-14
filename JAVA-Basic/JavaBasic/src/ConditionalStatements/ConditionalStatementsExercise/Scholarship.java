package ConditionalStatements.ConditionalStatementsExercise;

import java.util.Scanner;

public class Scholarship {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double income = Double.parseDouble(scan.nextLine());
        double averageGrade = Double.parseDouble(scan.nextLine());
        double minimalWage = Double.parseDouble(scan.nextLine());

        double socialScholarship = Math.floor(minimalWage * 0.35);
        double excellentResultsScholarship = Math.floor(averageGrade * 25);

        if (income < minimalWage && averageGrade >= 5.5) {
            if (excellentResultsScholarship >= socialScholarship) {
                System.out.printf("You get a scholarship for excellent results %.0f BGN", excellentResultsScholarship);
            } else {
                System.out.printf("You get a Social scholarship %.0f BGN", socialScholarship);
            }
        } else if (income < minimalWage && averageGrade >= 4.5) {
            System.out.printf("You get a Social scholarship %.0f BGN", socialScholarship);
        } else if (averageGrade >= 5.5) {
            System.out.printf("You get a scholarship for excellent results %.0f BGN", excellentResultsScholarship);
        } else {
            System.out.println("You cannot get a scholarship!");
        }
    }
}
