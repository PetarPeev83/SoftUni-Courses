package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class VacationBooksList {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int numPapersInBook = Integer.parseInt(scan.nextLine());
        int numPapersPerHour = Integer.parseInt(scan.nextLine());
        int daysToReadBook = Integer.parseInt(scan.nextLine());

        int totalHoursToReadBook = numPapersInBook / numPapersPerHour;
        int hoursToReadPerDay = totalHoursToReadBook / daysToReadBook;

        System.out.println(hoursToReadPerDay);
    }
}
