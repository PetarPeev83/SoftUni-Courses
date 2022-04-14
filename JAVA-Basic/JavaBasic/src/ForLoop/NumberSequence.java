package ForLoop;

import java.util.Scanner;

public class NumberSequence {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        int min = Integer.parseInt(scan.nextLine());
        int max = min;

        for (int i = 1; i < n; i++) {
            int check = Integer.parseInt(scan.nextLine());

           max = Math.max(max , check);
           min = Math.min(min , check);
        }
        System.out.printf("Max number: %d\n", max);
        System.out.printf("Min number: %d", min);
    }
}
