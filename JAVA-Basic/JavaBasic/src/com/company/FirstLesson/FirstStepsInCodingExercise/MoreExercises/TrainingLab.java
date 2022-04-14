package com.company.FirstLesson.FirstStepsInCodingExercise.MoreExercises;

import java.util.Scanner;

public class TrainingLab {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double w = Double.parseDouble(scan.nextLine());   //дължина в метри
        double h = Double.parseDouble(scan.nextLine()); // широчина в метри

        double rows = Math.floor(w / 1.2);
        double cols = Math.floor((h - 1) / 0.7);

        double totalWorkPlaces = rows * cols - 3;

        System.out.println(totalWorkPlaces);
    }
}
