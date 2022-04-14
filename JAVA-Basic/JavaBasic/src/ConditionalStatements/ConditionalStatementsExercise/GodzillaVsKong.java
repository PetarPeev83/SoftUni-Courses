package ConditionalStatements.ConditionalStatementsExercise;

import java.util.Scanner;

public class GodzillaVsKong {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        int actors = Integer.parseInt(scan.nextLine());
        double priceOneActorClothes = Double.parseDouble(scan.nextLine());

        double dekorPrice = budget * 0.1;
        double actorsClothesPrice = actors * priceOneActorClothes;

        if (actors > 150) {
            actorsClothesPrice *= 0.9;
        }
        double totalExpenses = dekorPrice + actorsClothesPrice;
        double budgetExpensesDifference = Math.abs(budget - totalExpenses);

        if (budget >= totalExpenses) {
            System.out.println("Action!");
            System.out.printf("Wingard starts filming with %.2f leva left.", budgetExpensesDifference);
        } else {
            System.out.println("Not enough money!");
            System.out.printf("Wingard needs %.2f leva more.", budgetExpensesDifference);
        }
    }
}
