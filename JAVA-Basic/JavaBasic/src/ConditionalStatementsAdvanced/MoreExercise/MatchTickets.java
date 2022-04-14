package ConditionalStatementsAdvanced.MoreExercise;

import java.util.Scanner;

public class MatchTickets {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double budget = Double.parseDouble(scan.nextLine());
        String category = scan.nextLine();
        int people = Integer.parseInt(scan.nextLine());
        double transportPrice = 0.0;
        double totalTicketPrice = 0.0;

        if (people < 5) {
            transportPrice = budget * 0.75;
        } else if (people < 10) {
            transportPrice = budget * 0.6;
        } else if (people < 25) {
            transportPrice = budget * 0.5;
        } else if (people < 50) {
            transportPrice = budget * 0.4;
        } else {
            transportPrice = budget * 0.25;
        }
        switch (category) {
            case "VIP":
                totalTicketPrice = people * 499.99;
                break;
            case "Normal":
                totalTicketPrice = people * 249.99;
                break;
        }
        if (budget >= totalTicketPrice + transportPrice) {
            System.out.printf("Yes! You have %.2f leva left.", budget - (totalTicketPrice + transportPrice));
        } else {
            System.out.printf("Not enough money! You need %.2f leva.", (totalTicketPrice + transportPrice) - budget);
        }
    }
}
