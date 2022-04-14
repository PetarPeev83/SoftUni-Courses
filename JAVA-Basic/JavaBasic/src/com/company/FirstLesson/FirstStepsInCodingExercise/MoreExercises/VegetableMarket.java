package com.company.FirstLesson.FirstStepsInCodingExercise.MoreExercises;

import java.util.Scanner;

public class VegetableMarket {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double euro = 1.94;
        double vegetablesPriceLeva = Double.parseDouble(scan.nextLine());
        double fruitsPriceLeva = Double.parseDouble(scan.nextLine());
        int vegetablesKg = Integer.parseInt(scan.nextLine());
        int fruitsKg = Integer.parseInt(scan.nextLine());

        double totalProfitEuro = (vegetablesKg * vegetablesPriceLeva + fruitsPriceLeva * fruitsKg) / euro;

        System.out.printf("%.2f", totalProfitEuro);
    }
}
