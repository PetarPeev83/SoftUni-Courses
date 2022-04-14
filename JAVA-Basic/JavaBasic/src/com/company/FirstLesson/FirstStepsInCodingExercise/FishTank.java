package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class FishTank {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int length = Integer.parseInt(scan.nextLine());
        int width = Integer.parseInt(scan.nextLine());
        int height = Integer.parseInt(scan.nextLine());
        double sandPercent = Double.parseDouble(scan.nextLine()) / 100;

        double aquariumTotalLitres = length * width * height * 0.001;
        double waterLitres = aquariumTotalLitres - (aquariumTotalLitres * sandPercent) ;

        System.out.printf("%.2f", waterLitres);
    }
}
