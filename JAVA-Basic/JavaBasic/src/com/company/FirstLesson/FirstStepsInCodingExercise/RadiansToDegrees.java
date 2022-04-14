package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class RadiansToDegrees {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double radians = Double.parseDouble(scan.nextLine());

        // градус = радиан * 180 / π.
        double degreece = radians * 180 / Math.PI;

        System.out.printf("%.0f", degreece);
    }
}
