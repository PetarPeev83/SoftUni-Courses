package ConditionalStatementsAdvanced;

import java.util.Scanner;

public class SmallShop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String product = scan.nextLine();
        String town = scan.nextLine();
        double quantity = Double.parseDouble(scan.nextLine());

        switch (town) {
            case "Sofia":
                switch (product) {
                    case "coffee":
                        System.out.println(quantity * 0.5);
                        break;
                    case "water":
                        System.out.println(quantity * 0.8);
                        break;
                    case "beer":
                        System.out.println(quantity * 1.2);
                        break;
                    case "sweets":
                        System.out.println(quantity * 1.45);
                        break;
                    case "peanuts":
                        System.out.println(quantity * 1.6);
                        break;
                }
                break;
            case "Plovdiv":
                switch (product) {
                    case "coffee":
                        System.out.println(quantity * 0.4);
                        break;
                    case "water":
                        System.out.println(quantity * 0.7);
                        break;
                    case "beer":
                        System.out.println(quantity * 1.15);
                        break;
                    case "sweets":
                        System.out.println(quantity * 1.30);
                        break;
                    case "peanuts":
                        System.out.println(quantity * 1.5);
                        break;
                }
                break;
            case "Varna":
                switch (product) {
                    case "coffee":
                        System.out.println(quantity * 0.45);
                        break;
                    case "water":
                        System.out.println(quantity * 0.7);
                        break;
                    case "beer":
                        System.out.println(quantity * 1.1);
                        break;
                    case "sweets":
                        System.out.println(quantity * 1.35);
                        break;
                    case "peanuts":
                        System.out.println(quantity * 1.55);
                        break;
                }
                break;
        }
    }
}
