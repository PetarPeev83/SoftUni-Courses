package WhileLoop.Exercise;

import java.util.Scanner;

public class Vacation {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double holidayPrice = Double.parseDouble(scan.nextLine());
        double budget = Double.parseDouble(scan.nextLine());
        int dayCounter = 0;
        int spendDayInRaw = 0;

        while (spendDayInRaw < 5 && budget < holidayPrice) {
            String currentAct = scan.nextLine();
            double currentSum = Double.parseDouble(scan.nextLine());
            dayCounter++;
            if (currentAct.equals("spend")) {
                budget -= currentSum;
                if (budget < 0) {
                    budget = 0;
                }
                spendDayInRaw++;
            } else if (currentAct.equals("save")) {
                budget += currentSum;
                spendDayInRaw = 0;
            }
        }
        if (spendDayInRaw == 5) {
            System.out.println("You can't save the money.");
            System.out.println(dayCounter);
        } else {
            System.out.printf("You saved the money for %d days.", dayCounter);
        }
    }
}
