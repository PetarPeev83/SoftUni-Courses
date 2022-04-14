package ConditionalStatementsAdvanced.Exercise;

import java.util.Scanner;

public class FishingBoat {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int budget = Integer.parseInt(scan.nextLine());
        String season = scan.nextLine();
        int fisherMens = Integer.parseInt(scan.nextLine());
        double shipPrice = 0.0;
        boolean discount = true;

        switch (season) {
            case "Spring":
                shipPrice = 3000;
                break;
            case "Summer":
                shipPrice = 4200;
                break;
            case "Autumn":
                shipPrice = 4200;
                discount = false;
                break;
            case "Winter":
                shipPrice = 2600;
                break;
        }
        if (fisherMens <= 6) {
            shipPrice *= 0.9;
        } else if (fisherMens <= 11) {
            shipPrice *= 0.85;
        } else if (fisherMens > 11) {
            shipPrice *= 0.75;
        }
        if (fisherMens % 2 == 0 && discount) {
            shipPrice *= 0.95;
        }
        if (budget >= shipPrice) {
            System.out.printf("Yes! You have %.2f leva left.", budget - shipPrice);
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", shipPrice - budget);
        }
    }
}
