package IZPIT;

import java.util.Scanner;

public class Everest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int currentScore = 5364;
        int days = 1;
        int i = 0;
        String currentCheck = scan.nextLine();

        while (!currentCheck.equals("END")) {
            int currentDistance = 0;

            if (currentCheck.equals("No")) {
                currentDistance = Integer.parseInt(scan.nextLine());
                currentScore += currentDistance;
            } else if (currentCheck.equals("Yes")) {
                days++;
                if (days > 5) {
                    break;
                } else {
                    currentDistance = Integer.parseInt(scan.nextLine());
                    currentScore += currentDistance;
                }
            }
            if (currentScore >= 8848) {
                break;
            }
            currentCheck = scan.nextLine();
        }
        if (currentScore < 8848) {
            System.out.println("Failed!");
            System.out.println(currentScore);
        } else {
            System.out.printf("Goal reached for %d days!", days);
        }
    }
}
