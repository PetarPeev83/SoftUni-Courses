package ConditionalStatementsAdvanced.Exercise;

import java.util.Scanner;

public class Volleyball {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String yearType = scan.nextLine();
        int p = Integer.parseInt(scan.nextLine());
        int h = Integer.parseInt(scan.nextLine());

        double daysPlaying =(double) ((48 - h) * 3) / 4 + h + (double)((p * 2) / 3);

        if (yearType.equals("leap")) {
            daysPlaying *= 1.15;
        }
        System.out.printf("%.0f", daysPlaying);
    }
}
