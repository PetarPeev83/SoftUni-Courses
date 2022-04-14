package ConditionalStatementsAdvanced.Exercise;

import java.util.Scanner;

public class NewHouse {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String flowers = scan.nextLine();
        int flowersNum = Integer.parseInt(scan.nextLine());
        int budget = Integer.parseInt(scan.nextLine());
        double price = 0.0;

        switch (flowers) {
            case "Roses":
                price = flowersNum * 5;
                if (flowersNum > 80) {
                    price *= 0.9;
                }
                break;
            case "Dahlias":
                price = flowersNum * 3.8;
                if (flowersNum > 90) {
                    price *= 0.85;
                }
                break;
            case "Tulips":
                price = flowersNum * 2.8;
                if (flowersNum > 80) {
                    price *= 0.85;
                }
                break;
            case "Narcissus":
                price = flowersNum * 3;
                if (flowersNum < 120) {
                    price *= 1.15;
                }
                break;
            case "Gladiolus":
                price = flowersNum * 2.5;
                if (flowersNum < 80) {
                    price *= 1.2;
                }
                break;
        }
        double priceDifference = Math.abs(price - budget);
        if (budget >= price) {
            System.out.printf("Hey, you have a great garden with %d %s and %.2f leva left.", flowersNum, flowers, priceDifference);
        } else {
            System.out.printf("Not enough money, you need %.2f leva more.", priceDifference);
        }
    }
}
