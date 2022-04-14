package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class FruitMarket {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double strawberryPrice = Double.parseDouble(scan.nextLine());
        double bananasNeeded = Double.parseDouble(scan.nextLine());
        double orangesNeeded = Double.parseDouble(scan.nextLine());
        double raspberryNeeded = Double.parseDouble(scan.nextLine());
        double strawberryNeeded = Double.parseDouble(scan.nextLine());

        double raspberryPrice = strawberryPrice * 0.5;
        double orangesPrice = raspberryPrice * 0.6;
        double bananasPrice = raspberryPrice * 0.2;

        double totalMoneyNeeded = strawberryNeeded * strawberryPrice + bananasNeeded * bananasPrice +
                orangesNeeded * orangesPrice + raspberryNeeded * raspberryPrice;
        System.out.printf("%.2f", totalMoneyNeeded);
    }
}
