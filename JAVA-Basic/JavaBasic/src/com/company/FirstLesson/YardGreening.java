package com.company.FirstLesson;

import java.util.Scanner;

public class YardGreening {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double greeningSqMeters = Double.parseDouble(scan.nextLine());

        double fullPrice = greeningSqMeters * 7.61;
        double discount = fullPrice * 0.18;

        System.out.println("The final price is: " + (fullPrice - discount) + " lv.");
        System.out.println("The discount is: " + discount + " lv.");
    }
}