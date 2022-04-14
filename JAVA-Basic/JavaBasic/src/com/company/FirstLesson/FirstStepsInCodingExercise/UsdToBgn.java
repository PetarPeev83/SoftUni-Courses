package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class UsdToBgn {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double Usd = Double.parseDouble(scan.nextLine());
        double Bgn = Usd * 1.79549;

        System.out.println(Bgn);
    }
}
