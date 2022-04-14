package WhileLoop;

import java.util.Scanner;

public class MinNumber {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String index = scan.nextLine();
        int minNumber = Integer.MAX_VALUE;

        while (!index.equals("Stop")) {
            int currentNum = Integer.parseInt(index);

            minNumber = Math.min(minNumber, currentNum);

            index = scan.nextLine();
        }
        System.out.println(minNumber);
    }
}
