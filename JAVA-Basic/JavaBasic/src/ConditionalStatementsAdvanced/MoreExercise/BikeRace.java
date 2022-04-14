package ConditionalStatementsAdvanced.MoreExercise;

import java.util.Scanner;

public class BikeRace {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int juniorsCyclists = Integer.parseInt(scan.nextLine());
        int seniorsCyclists = Integer.parseInt(scan.nextLine());
        String typeRoad = scan.nextLine();
        double money = 0.00;

        switch (typeRoad) {
            case "trail":
                money = seniorsCyclists * 7 + juniorsCyclists * 5.5;
                break;
            case "cross-country":
                if (seniorsCyclists + juniorsCyclists >= 50) {
                    money = seniorsCyclists * (9.5 * 0.75) + juniorsCyclists * (8 * 0.75);
                } else {
                    money = seniorsCyclists * 9.5 + juniorsCyclists * 8;
                }
                break;
            case "downhill":
                money = seniorsCyclists * 13.75 + juniorsCyclists * 12.25;
                break;
            case "road":
                money = seniorsCyclists * 21.5 + juniorsCyclists * 20;
                break;
        }
        System.out.printf("%.2f", money * 0.95);
    }
}
