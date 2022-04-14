package ConditionalStatementsAdvanced.Exercise;

import java.util.Scanner;

public class HotelRoom {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String month = scan.nextLine();
        int days = Integer.parseInt(scan.nextLine());
        double apartmentPrice = 0.0;
        double studioPrice = 0.0;

        switch (month) {
            case "May":
            case "October":
                studioPrice = 50.00;
                apartmentPrice = 65.00;
                if (days > 14) {
                    studioPrice *= 0.7;
                } else if (days > 7) {
                    studioPrice *= 0.95;
                }
                break;
            case "June":
            case "September":
                studioPrice = 75.20;
                apartmentPrice = 68.70;
                if (days > 14) {
                    studioPrice *= 0.8;
                }
                break;
            case "July":
            case "August":
                studioPrice = 76.00;
                apartmentPrice = 77.00;
                break;
        }
        if (days > 14) {
            apartmentPrice *= 0.9;
        }
        System.out.printf("Apartment: %.2f lv.\n", apartmentPrice * days);
        System.out.printf("Studio: %.2f lv.", studioPrice * days);
    }
}
