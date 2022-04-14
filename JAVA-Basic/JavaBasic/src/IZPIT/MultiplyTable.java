package IZPIT;

import java.util.Scanner;

public class MultiplyTable {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int x = Integer.parseInt(scan.nextLine());

        int currentMax1 = x % 10;
        int currentMax2 = x / 10 % 10;
        int currentMax3 = x / 10 / 10 % 10;

        for (int i = 1; i <= currentMax1; i++) {
            for (int j = 1; j <= currentMax2; j++) {
                for (int k = 1; k <= currentMax3; k++) {

                    System.out.printf("%d * %d * %d = %d;\n", i, j, k, i * j * k);
                }
            }
        }
    }
}
