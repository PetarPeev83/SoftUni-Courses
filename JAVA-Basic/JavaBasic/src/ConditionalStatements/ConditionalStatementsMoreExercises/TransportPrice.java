package ConditionalStatements.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class TransportPrice {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        String dayOrNight = scan.nextLine();

        if (n >= 100) {
            System.out.printf("%.2f", n * 0.06);
        } else if (n >= 20) {
            System.out.printf("%.2f", n * 0.09);
        } else {
            if (dayOrNight.equals("day")) {
                System.out.printf("%.2f", n * 0.79 + 0.7);
            } else if (dayOrNight.equals("night")) {
                System.out.printf("%.2f", n * 0.9 + 0.7);
            }
        }
    }
}
