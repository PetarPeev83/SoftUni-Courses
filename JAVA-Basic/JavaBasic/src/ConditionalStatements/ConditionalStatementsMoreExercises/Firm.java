package ConditionalStatements.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Firm {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int projectHours = Integer.parseInt(scan.nextLine());
        int days = Integer.parseInt(scan.nextLine());
        int peopleOvertime = Integer.parseInt(scan.nextLine());

        int workingHours = (int) ((days * 8) * 0.9 + (2 * peopleOvertime * days));

        if (projectHours <= workingHours) {
            System.out.printf("Yes!%d hours left.", workingHours - projectHours);
        } else {
            System.out.printf("Not enough time!%d hours needed.", projectHours - workingHours);
        }
    }
}
