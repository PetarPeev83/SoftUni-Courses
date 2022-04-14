package ConditionalStatements;

import java.util.Scanner;

public class ToyShop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        Double holidayPrice = Double.parseDouble(scan.nextLine());
        Double puzzles = Double.parseDouble(scan.nextLine());
        Double barbieToy = Double.parseDouble(scan.nextLine());
        Double teddyBear = Double.parseDouble(scan.nextLine());
        Double minion = Double.parseDouble(scan.nextLine());
        Double truckToy = Double.parseDouble(scan.nextLine());

        Double puzzlesProfit = puzzles * 2.6;
        Double barbieToyProfit = barbieToy * 3;
        Double teddyBearProfit = teddyBear * 4.1;
        Double minionProfit = minion * 8.2;
        Double truckToyProfit = truckToy * 2;

        Double totalProfit = puzzlesProfit + barbieToyProfit + teddyBearProfit + minionProfit + truckToyProfit;

        if (puzzles + barbieToy + teddyBear + minion + truckToy >= 50) {
            totalProfit *= 0.75;
        }
        totalProfit *= 0.9;

        if (totalProfit >= holidayPrice) {
            System.out.printf("Yes! %.2f lv left.", totalProfit - holidayPrice);
        } else {
            System.out.printf("Not enough money! %.2f lv needed.", holidayPrice - totalProfit);
        }
    }
}
