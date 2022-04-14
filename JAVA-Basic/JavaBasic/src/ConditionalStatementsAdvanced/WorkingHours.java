package ConditionalStatementsAdvanced;

import java.util.Scanner;

public class WorkingHours {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int time = Integer.parseInt(scan.nextLine());
        String day = scan.nextLine();

        if (time < 10 || time > 18 || day.equals("Sunday")){
            System.out.println("closed");
        } else {
            System.out.println("open");
        }
    }
}
