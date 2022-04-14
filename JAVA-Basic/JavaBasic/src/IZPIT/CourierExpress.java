package IZPIT;

import java.util.Scanner;

public class CourierExpress {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double packageWeight = Double.parseDouble(scan.nextLine());
        String serviceType = scan.nextLine();
        int distance = Integer.parseInt(scan.nextLine());
        double price = 0;

        switch (serviceType) {
            case "standard":
                if (packageWeight < 1) {
                    price = distance * 0.03;
                } else if (packageWeight < 10) {
                    price = distance * 0.05;
                } else if (packageWeight < 40) {
                    price = distance * 0.1;
                } else if (packageWeight < 90) {
                    price = distance * 0.15;
                } else if (packageWeight <= 150) {
                    price = distance * 0.2;
                }
                break;
            case "express":
                if (packageWeight < 1) {
                    price = distance * 0.03 + (packageWeight * 0.03 * 0.8 * distance);
                } else if (packageWeight < 10) {
                    price = distance * 0.05 + (packageWeight * 0.05 * 0.4 * distance);
                } else if (packageWeight < 40) {
                    price = distance * 0.1 + (packageWeight * 0.1 * 0.05 * distance);
                } else if (packageWeight < 90) {
                    price = distance * 0.15 + (packageWeight * 0.15 * 0.02 * distance);
                } else if (packageWeight <= 150) {
                    price = distance * 0.2 + (packageWeight * 0.2 * 0.01 * distance);
                }
                break;
        }
        System.out.printf("The delivery of your shipment with weight of %.3f kg. would cost %.2f lv.", packageWeight, price);
    }
}
