package ForLoop;

import java.util.Scanner;

public class LeftAndRightSum {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int n = Integer.parseInt(scan.nextLine());
        int leftSum = 0;
        int rightSum = 0;

        for (int i = 1; i <= n; i++) {
            int current = Integer.parseInt(scan.nextLine());
            leftSum += current;
        }
        for (int i = 1; i <= n; i++) {
            int current = Integer.parseInt(scan.nextLine());
            rightSum += current;
        }
        if (leftSum == rightSum) {
            System.out.printf("Yes, sum = %d", leftSum);
        } else {
            System.out.printf("No, diff = %d", Math.abs(leftSum - rightSum));
        }
    }
}
