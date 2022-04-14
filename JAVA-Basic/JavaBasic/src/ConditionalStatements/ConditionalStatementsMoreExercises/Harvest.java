package ConditionalStatements.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class Harvest {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int x = Integer.parseInt(scan.nextLine());
        double y = Double.parseDouble(scan.nextLine());
        int z = Integer.parseInt(scan.nextLine());
        int workers = Integer.parseInt(scan.nextLine());

        double grapeForWine = (x * y) * 0.40;
        double wineProduction = grapeForWine / 2.5;

        if (wineProduction < z) {
            System.out.printf("It will be a tough winter! More %.0f liters wine needed.", Math.floor(z - wineProduction));
        } else {
            System.out.printf("Good harvest this year! Total wine: %.0f liters.\n", Math.floor(wineProduction));
            System.out.printf("%.0f liters left -> %.0f liters per person.", Math.ceil(wineProduction - z), Math.ceil((wineProduction - z) / workers));
        }
    }
}
