package NestedLoops;

import java.util.Scanner;

public class CinemaTickets {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String input = scan.nextLine();
        int totalTickets = 0;
        int studentTickets = 0;
        int standardTickets = 0;
        int kidTickets = 0;

        while (!input.equals("Finish")) {
            String movie = input;
            int freeSpaces = Integer.parseInt(scan.nextLine());
            int tickets = 0;
            String command = scan.nextLine();

            while (!command.equals("End")) {
                String ticketType = command;
                tickets++;

                switch (ticketType) {
                    case "student":
                        studentTickets++;
                        break;
                    case "standard":
                        standardTickets++;
                        break;
                    case "kid":
                        kidTickets++;
                        break;
                }
                if (tickets == freeSpaces) {
                    break;
                }
                command = scan.nextLine();
            }
            totalTickets += tickets;
            System.out.printf("%s - %.2f%% full.%n", movie, tickets * 1.0 / freeSpaces * 100);
            input = scan.nextLine();
        }
        System.out.println("Total tickets: " + totalTickets);
        System.out.printf("%.2f%% student tickets.%n", studentTickets * 1.0 / totalTickets * 100);
        System.out.printf("%.2f%% standard tickets.%n", standardTickets * 1.0 / totalTickets * 100);
        System.out.printf("%.2f%% kids tickets.%n", kidTickets * 1.0 / totalTickets * 100);
    }
}
