package ConditionalStatements.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class SleepyTomCat {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int yearHolidays = Integer.parseInt(scan.nextLine());

        int tomTargetMins = 30000;
        int workingDays = 365 - yearHolidays;
        int workingDaysPlayMins = workingDays * 63;
        int restDaysPlayMins = yearHolidays * 127;
        int totalYearPlay = workingDaysPlayMins+restDaysPlayMins;
        int differencePlay = Math.abs(tomTargetMins-totalYearPlay);

        if (totalYearPlay > tomTargetMins) {
            System.out.println("Tom will run away");
            System.out.printf("%d hours and %d minutes more for play", differencePlay / 60, differencePlay % 60);
        }else {
            System.out.println("Tom sleeps well");
            System.out.printf("%d hours and %d minutes less for play", differencePlay / 60, differencePlay % 60);
        }
    }
}
