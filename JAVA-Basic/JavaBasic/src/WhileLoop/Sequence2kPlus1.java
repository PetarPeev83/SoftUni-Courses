package WhileLoop;

import java.util.Scanner;

public class Sequence2kPlus1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int x = Integer.parseInt(scan.nextLine());
        int number = 1;

        while (number <= x) {
            System.out.println(number);
            number = number * 2 + 1;
        }
    }
}
