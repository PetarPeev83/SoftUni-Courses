package ConditionalStatementsAdvanced;

import java.io.InputStream;
import java.util.Scanner;

public class SkiTrip {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int days = Integer.parseInt(scan.nextLine()) - 1;
        String roomType = scan.nextLine();
        String feedback = scan.nextLine();

        double price = 0.0;

        switch (roomType) {
            case "room for one person":
                price = days * 18.00;
                break;
            case "apartment":
                if (days < 10) {
                    price = (days * 25) * 0.7;
                    break;
                } else if (days <= 15) {
                    price = (days * 25) * 0.65;
                } else if (days > 15) {
                    price = (days * 25) * 0.5;
                }
                break;
            case "president apartment":
                if (days < 10) {
                    price = (days * 35) * 0.9;
                } else if (days <= 15) {
                    price = (days * 35) * 0.85;
                } else if (days > 15) {
                    price = (days * 35) * 0.8;
                }
                break;
        }
        if (feedback.equals("positive")) {
            price *= 1.25;
        } else if (feedback.equals("negative")) {
            price *= 0.9;
        }
        System.out.printf("%.2f", price);
    }
}
