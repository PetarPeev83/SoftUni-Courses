package ForLoop;

import java.util.Scanner;

public class CleverLily {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int age = Integer.parseInt(scan.nextLine());
        double washingMachinePrice = Double.parseDouble(scan.nextLine());
        int toyPrice = Integer.parseInt(scan.nextLine());
        int toysCounter = 0;
        int money = 0;
        double totalMoney = 0;

        for (int i = 1; i <= age; i++) {
            if (i % 2 != 0) {
                toysCounter++;
            } else {
                money += 10;
                totalMoney += money - 1;
            }
        }
        totalMoney += (toyPrice * toysCounter);
        double moneyDiff = Math.abs(totalMoney - washingMachinePrice);

        if (totalMoney >= washingMachinePrice) {
            System.out.printf("Yes! %.2f", moneyDiff);
        } else {
            System.out.printf("No! %.2f", moneyDiff);
        }
    }
}
