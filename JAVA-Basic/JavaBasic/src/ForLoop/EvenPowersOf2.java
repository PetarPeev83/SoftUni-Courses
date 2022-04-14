package ForLoop;

import java.util.Scanner;

public class EvenPowersOf2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double num = Integer.parseInt(scan.nextLine());

        for (double i = 0; i <= num; i += 2) {
            System.out.printf("%.0f\n", Math.pow(2, i));
        }
    }
}
