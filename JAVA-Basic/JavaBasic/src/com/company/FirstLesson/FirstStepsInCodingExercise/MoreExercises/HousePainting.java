package com.company.FirstLesson.FirstStepsInCodingExercise.MoreExercises;

import java.util.Scanner;

public class HousePainting {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double x = Double.parseDouble(scan.nextLine());
        double y = Double.parseDouble(scan.nextLine());
        double h = Double.parseDouble(scan.nextLine());

        double roofSize = (h * x / 2) * 2 + (x * y) * 2;
        double wallsSize = (x * y - 1.5 * 1.5) * 2 + ((x * x) * 2 - 1.2 * 2);

        double green = wallsSize / 3.4;
        double red = roofSize / 4.3;

        System.out.printf("%.2f\n", green);
        System.out.printf("%.2f", red);
    }
}
