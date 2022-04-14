package ConditionalStatementsAdvanced.Exercise;

import java.util.Scanner;

public class OnTimeForTheExam {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int examH = Integer.parseInt(scan.nextLine());
        int examM = Integer.parseInt(scan.nextLine());
        int arriveH = Integer.parseInt(scan.nextLine());
        int arriveM = Integer.parseInt(scan.nextLine());

        int examTimeInMins = examH * 60 + examM;
        int arriveTimeInMins = arriveH * 60 + arriveM;
        int timeDifference = Math.abs(examTimeInMins - arriveTimeInMins);

        if (arriveTimeInMins > examTimeInMins) {
            System.out.println("Late");
            if (timeDifference < 60) {
                System.out.printf("%d minutes after the start", timeDifference);
            } else {
                if (timeDifference % 60 >= 10) {
                    System.out.printf("%d:%d hours after the start", timeDifference / 60, timeDifference % 60);
                } else {
                    System.out.printf("%d:0%d hours after the start", timeDifference / 60, timeDifference % 60);
                }
            }
        } else if (arriveTimeInMins >= examTimeInMins - 30) {
            if (arriveTimeInMins == examTimeInMins) {
                System.out.println("On time");
            } else {
                System.out.println("On time");
                System.out.printf("%d minutes before the start", timeDifference);
            }
        } else {
            System.out.println("Early");
            if (timeDifference < 60) {
                System.out.printf("%d minutes before the start", timeDifference);
            } else {
                if (timeDifference % 60 >= 10) {
                    System.out.printf("%d:%d hours before the start", timeDifference / 60, timeDifference % 60);
                } else {
                    System.out.printf("%d:0%d hours before the start", timeDifference / 60, timeDifference % 60);
                }
            }
        }
    }
}
