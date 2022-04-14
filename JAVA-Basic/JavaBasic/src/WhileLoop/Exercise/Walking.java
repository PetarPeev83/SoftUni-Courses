package WhileLoop.Exercise;

import java.util.Scanner;

public class Walking {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int stepsCounter = 0;

        while (stepsCounter < 10000) {
            String currentCheck = scan.nextLine();

            if (currentCheck.equals("Going home")) {
                stepsCounter += Integer.parseInt(scan.nextLine());
                break;
            } else {
                int currentSteps = Integer.parseInt(currentCheck);
                stepsCounter += currentSteps;
            }
        }
        int difference = Math.abs(10000 - stepsCounter);
        if (stepsCounter >= 10000) {
            System.out.println("Goal reached! Good job!");
            System.out.printf("%d steps over the goal!", difference);
        } else {
            System.out.printf("%d more steps to reach goal.", difference);
        }
    }
}
