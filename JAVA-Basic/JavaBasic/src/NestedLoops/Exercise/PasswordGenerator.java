package NestedLoops.Exercise;

import java.util.Scanner;

public class PasswordGenerator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int x = Integer.parseInt(scan.nextLine());
        int y = Integer.parseInt(scan.nextLine());

        for (int i = 1; i <= x; i++) {
            for (int j = 1; j <= x; j++) {
                int letterCounter1 = 0;
                for (char k = 'a'; letterCounter1 < y; k++) {
                    letterCounter1++;
                    int letterCounter2 = 0;
                    for (char l = 'a'; letterCounter2 < y; l++) {
                        letterCounter2++;
                        for (int m = 1; m <= x; m++) {
                            if (m > i && m > j) {
                                System.out.print(" " + i + j + k + l + m);
                            }
                        }
                    }
                }
            }
        }
    }
}
