package IZPIT;

import java.util.Scanner;

public class DeerOfSanta {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int daysAway = Integer.parseInt(scan.nextLine());
        int foodLefted = Integer.parseInt(scan.nextLine());
        double firstDeerFood = Double.parseDouble(scan.nextLine());
        double secondDeerFood = Double.parseDouble(scan.nextLine());
        double thirdDeerFood = Double.parseDouble(scan.nextLine());

        double totalFoodNeeded = firstDeerFood * daysAway + secondDeerFood * daysAway + thirdDeerFood * daysAway;
        double kgDifference = Math.abs(totalFoodNeeded - foodLefted);

        if (totalFoodNeeded <= foodLefted) {
            System.out.printf("%.0f kilos of food left.", Math.floor(kgDifference));
        } else {
            System.out.printf("%.0f more kilos of food are needed.", Math.ceil(kgDifference));
        }
    }
}
