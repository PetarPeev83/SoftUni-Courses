package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class CharityCampaign {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int campaignDays = Integer.parseInt(scan.nextLine());
        int cookersNum = Integer.parseInt(scan.nextLine());
        int cakes = Integer.parseInt(scan.nextLine());
        int waffles = Integer.parseInt(scan.nextLine());
        int pancakes = Integer.parseInt(scan.nextLine());

        double dayProfit = (cakes * 45 + waffles * 5.8 + pancakes * 3.2) * cookersNum;
        double expenses = (campaignDays * dayProfit) / 8;
        double totalProfit = campaignDays * dayProfit - expenses;

        System.out.printf("%.2f", totalProfit);
    }
}
