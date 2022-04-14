package ConditionalStatementsAdvanced.Exercise;

import java.util.Scanner;

public class Journey {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        String season = scan.nextLine();
        String destination = "";
        String destinationType = "";
        double price = 0.0;

        if (budget <= 100) {
            destination = "Bulgaria";
            switch (season) {
                case "summer":
                    destinationType = "Camp";
                    price = budget * 0.30;
                    break;
                case "winter":
                    destinationType = "Hotel";
                    price = budget * 0.70;
                    break;
            }
        } else if (budget <= 1000) {
            destination = "Balkans";
            switch (season) {
                case "summer":
                    destinationType = "Camp";
                    price = budget * 0.40;
                    break;
                case "winter":
                    destinationType = "Hotel";
                    price = budget * 0.80;
                    break;
            }
        } else {
            destination = "Europe";
            destinationType = "Hotel";
            price = budget * 0.90;
        }
        System.out.printf("Somewhere in %s\n", destination);
        System.out.printf("%s - %.2f\n", destinationType, price);
    }
}
