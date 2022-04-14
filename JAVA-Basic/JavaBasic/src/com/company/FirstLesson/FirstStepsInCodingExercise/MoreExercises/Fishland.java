package com.company.FirstLesson.FirstStepsInCodingExercise.MoreExercises;

import java.util.Scanner;

public class Fishland {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double scumriaPrice = Double.parseDouble(scan.nextLine());
        double cacaPrice = Double.parseDouble(scan.nextLine());
        double palamudKg = Double.parseDouble(scan.nextLine());
        double safridKg = Double.parseDouble(scan.nextLine());
        int midiKg = Integer.parseInt(scan.nextLine());

        double palamudPrice = scumriaPrice * 1.6;
        double safridPrice = cacaPrice * 1.8;
        double midiPrice = 7.5;

        double totalMoneyNeeded = palamudKg * palamudPrice + safridPrice * safridKg + midiPrice * midiKg;

        System.out.printf("%.2f", totalMoneyNeeded);
    }
}
