package WhileLoop.Exercise;

import java.util.Scanner;

public class Cake {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int w = Integer.parseInt(scan.nextLine());
        int l = Integer.parseInt(scan.nextLine());

        int cakeSize = w * l;

        String command = scan.nextLine();

        while (!command.equals("STOP")) {
            int currentPieces = Integer.parseInt(command);
            cakeSize -= currentPieces;
            if (cakeSize < 0) {
                System.out.printf("No more cake left! You need %d pieces more.", Math.abs(cakeSize));
                return;
            }
            command = scan.nextLine();
        }
        System.out.printf("%d pieces are left.", cakeSize);
    }
}
