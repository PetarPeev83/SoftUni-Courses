package ConditionalStatementsAdvanced.MoreExercise;

import java.util.Scanner;

public class Flowers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int hrisantemes = Integer.parseInt(scan.nextLine());
        int roses = Integer.parseInt(scan.nextLine());
        int tulips = Integer.parseInt(scan.nextLine());
        String season = scan.nextLine();
        String holiday = scan.nextLine();
        double flowersPrice = 0.00;

        switch (season) {
            case "Spring":
                flowersPrice += (hrisantemes * 2 + roses * 4.1 + tulips * 2.5);
                if (holiday.equals("Y")) {
                    flowersPrice *= 1.15;
                }
                if (tulips > 7) {
                    flowersPrice *= 0.95;
                }
                break;
            case "Summer":
                flowersPrice += (hrisantemes * 2 + roses * 4.1 + tulips * 2.5);
                if (holiday.equals("Y")) {
                    flowersPrice *= 1.15;
                }
                break;
            case "Autumn":
                flowersPrice += (hrisantemes * 3.75 + roses * 4.5 + tulips * 4.15);
                if (holiday.equals("Y")) {
                    flowersPrice *= 1.15;
                }
                break;
            case "Winter":
                flowersPrice += (hrisantemes * 3.75 + roses * 4.5 + tulips * 4.15);
                if (holiday.equals("Y")) {
                    flowersPrice *= 1.15;
                }
                if (roses >= 10) {
                    flowersPrice *= 0.9;
                }
                break;
        }
        if (hrisantemes + tulips + roses > 20) {
            flowersPrice *= 0.8;
        }
        flowersPrice += 2;

        System.out.printf("%.2f", flowersPrice);
    }
}
