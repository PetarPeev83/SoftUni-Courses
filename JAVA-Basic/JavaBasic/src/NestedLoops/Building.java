package NestedLoops;

import java.util.Scanner;

public class Building {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int floors = Integer.parseInt(scan.nextLine());
        int rooms = Integer.parseInt(scan.nextLine());

        for (int i = floors; i > 0; i--) {
            for (int j = 0; j < rooms; j++) {
                if (i == floors) {
                    System.out.print("L" + i + j + " ");
                } else if (i % 2 == 0) {
                    System.out.print("O" + i + j + " ");
                } else {
                    System.out.print("A" + i + j + " ");
                }
            }
            System.out.println();
        }
    }
}
