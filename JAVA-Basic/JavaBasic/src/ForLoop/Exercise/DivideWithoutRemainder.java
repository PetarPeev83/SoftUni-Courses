package ForLoop.Exercise;

import java.util.Scanner;

public class DivideWithoutRemainder {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int x = Integer.parseInt(scan.nextLine());
        double p1 = 0;
        double p2 = 0;
        double p3 = 0;

        for (int i = 0; i < x; i++) {
            int check = Integer.parseInt(scan.nextLine());

            if (check % 2 == 0) {
                p1++;
            }
            if (check % 3 == 0) {
                p2++;
            }
            if (check % 4 == 0) {
                p3++;
            }
        }
        System.out.printf("%.2f%%\n", p1 / x * 100);
        System.out.printf("%.2f%%\n", p2 / x * 100);
        System.out.printf("%.2f%%\n", p3 / x * 100);
    }
}
