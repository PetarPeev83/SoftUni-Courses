package IZPIT;

import java.util.Scanner;

public class Excursion {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int peopleNum = Integer.parseInt(scan.nextLine());
        int nightsNum = Integer.parseInt(scan.nextLine());
        int cardsNum = Integer.parseInt(scan.nextLine());
        int museumTicketsNum = Integer.parseInt(scan.nextLine());

        double expenses = peopleNum * (nightsNum * 20 + cardsNum * 1.6 + museumTicketsNum * 6);
        expenses *= 1.25;

        System.out.printf("%.2f", expenses);
    }
}
