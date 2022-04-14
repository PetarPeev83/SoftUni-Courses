package com.company.FirstLesson.FirstStepsInCodingExercise.MoreExercises;

import java.util.Scanner;

public class CelsiusToFahrenheit {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double celsius = Double.parseDouble(scan.nextLine());
        //°F = °C × 1,8 + 32.
        double farenhait = celsius * 1.8 +32;

        System.out.printf("%.2f", farenhait);
    }
}
