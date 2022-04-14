package WhileLoop;

import java.util.Scanner;

public class MaxNumber {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String index = scan.nextLine();
        int maxNumber = Integer.MIN_VALUE;

        while (!index.equals("Stop")) {
            int currentNum = Integer.parseInt(index);

            maxNumber = Math.max(maxNumber , currentNum);

            index = scan.nextLine();
        }
        System.out.println(maxNumber);
    }
}
