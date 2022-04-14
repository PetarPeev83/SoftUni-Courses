package ForLoop.Exercise;

import java.util.Scanner;

public class Histogram {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int x = Integer.parseInt(scan.nextLine());
        double p1 = 0;
        double p2 = 0;
        double p3 = 0;
        double p4 = 0;
        double p5 = 0;

        for (int i = 0; i < x; i++) {
            int currentNum = Integer.parseInt(scan.nextLine());

            if (currentNum < 200) {
                p1++;
            } else if (currentNum < 400) {
                p2++;
            } else if (currentNum < 600) {
                p3++;
            } else if (currentNum < 800) {
                p4++;
            } else {
                p5++;
            }
        }
        System.out.printf("%.2f%%\n", p1 / x * 100);
        System.out.printf("%.2f%%\n", p2 / x * 100);
        System.out.printf("%.2f%%\n", p3 / x * 100);
        System.out.printf("%.2f%%\n", p4 / x * 100);
        System.out.printf("%.2f%%\n", p5 / x * 100);
    }
}
