package ConditionalStatementsAdvanced.Exercise;

import java.util.Scanner;

public class Cinema {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String type = scan.nextLine();
        int r = Integer.parseInt(scan.nextLine());
        int c = Integer.parseInt(scan.nextLine());
        double totalPlaces = r * c;

        switch (type) {
            case "Premiere":
                System.out.printf("%.2f leva", totalPlaces * 12);
                break;
            case "Normal":
                System.out.printf("%.2f leva", totalPlaces * 7.5);
                break;
            case "Discount":
                System.out.printf("%.2f leva", totalPlaces * 5);
                break;
        }
    }
}
