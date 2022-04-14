package ConditionalStatements.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Pets {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int days = Integer.parseInt(scan.nextLine());
        int kgFoodLefted = Integer.parseInt(scan.nextLine());
        double kgDogDayfood = Double.parseDouble(scan.nextLine());
        double kgCatDayFood = Double.parseDouble(scan.nextLine());
        double kgTurtleDayFood = Double.parseDouble(scan.nextLine()) / 1000;

        double totalKgFoodNeeded = days * kgDogDayfood + days * kgCatDayFood + days * kgTurtleDayFood;

        if (kgFoodLefted >= totalKgFoodNeeded) {
            System.out.printf("%.0f kilos of food left.", Math.floor(kgFoodLefted - totalKgFoodNeeded));
        } else {
            System.out.printf("%.0f more kilos of food are needed.", Math.ceil(totalKgFoodNeeded - kgFoodLefted));
        }
    }
}
