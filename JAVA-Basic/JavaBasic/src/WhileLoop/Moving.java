package WhileLoop;

import java.util.Scanner;

public class Moving {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int w = Integer.parseInt(scan.nextLine());
        int l = Integer.parseInt(scan.nextLine());
        int h = Integer.parseInt(scan.nextLine());

        int freeSpace = w * l * h;

        String input = scan.nextLine();

        while (!input.equals("Done")) {
            int current = Integer.parseInt(input);

            freeSpace -= current;

            if (freeSpace < 0) {
                System.out.printf("No more free space! You need %d Cubic meters more.", Math.abs(freeSpace));
                return;
            }
            input = scan.nextLine();
        }
        System.out.printf("%d Cubic meters left.", freeSpace);
    }
}
