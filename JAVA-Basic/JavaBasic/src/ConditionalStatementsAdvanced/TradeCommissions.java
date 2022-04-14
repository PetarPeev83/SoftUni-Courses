package ConditionalStatementsAdvanced;

import java.util.Scanner;

public class TradeCommissions {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String town = scan.nextLine();
        double s = Double.parseDouble(scan.nextLine());

        switch (town) {
            case "Sofia":
                if (s < 0) {
                    System.out.println("error");
                } else if (s <= 500) {
                    System.out.printf("%.2f", s * 0.05);
                } else if (s <= 1000) {
                    System.out.printf("%.2f", s * 0.07);
                } else if (s <= 10000) {
                    System.out.printf("%.2f", s * 0.08);
                } else if (s > 10000) {
                    System.out.printf("%.2f", s * 0.12);
                } else {
                    System.out.println("error");
                }
                break;
            case "Varna":
                if (s < 0) {
                    System.out.println("error");
                } else if (s <= 500) {
                    System.out.printf("%.2f", s * 0.045);
                } else if (s <= 1000) {
                    System.out.printf("%.2f", s * 0.075);
                } else if (s <= 10000) {
                    System.out.printf("%.2f", s * 0.10);
                } else if (s > 10000) {
                    System.out.printf("%.2f", s * 0.13);
                } else {
                    System.out.println("error");
                }
                break;
            case "Plovdiv":
                if (s < 0) {
                    System.out.println("error");
                } else if (s <= 500) {
                    System.out.printf("%.2f", s * 0.055);
                } else if (s <= 1000) {
                    System.out.printf("%.2f", s * 0.08);
                } else if (s <= 10000) {
                    System.out.printf("%.2f", s * 0.12);
                } else if (s > 10000) {
                    System.out.printf("%.2f", s * 0.145);
                } else {
                    System.out.println("error");
                }
                break;
            default:
                System.out.println("error");
        }
    }
}
