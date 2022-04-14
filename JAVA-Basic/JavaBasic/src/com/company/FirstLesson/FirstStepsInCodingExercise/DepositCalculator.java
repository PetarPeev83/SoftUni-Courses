package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class DepositCalculator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double depositSum = Double.parseDouble(scan.nextLine());
        int depositMounts = Integer.parseInt(scan.nextLine());
        double percentInterestRatePerYear = Double.parseDouble(scan.nextLine()) / 100;

        double sumForMonth = depositSum * percentInterestRatePerYear / 12;
        double totalSum = depositSum + depositMounts * sumForMonth;
        System.out.println(totalSum);
    }
}
