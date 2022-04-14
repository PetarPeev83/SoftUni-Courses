package com.company.FirstLesson.FirstStepsInCodingExercise;

import java.util.Scanner;

public class BirthdayParty {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int salonRent = Integer.parseInt(scan.nextLine());
        double cakePrice = salonRent * 0.2;
        double drinksPrice = cakePrice * 0.55;
        double animatorPrice = salonRent / 3;

        System.out.println(salonRent + cakePrice + drinksPrice + animatorPrice);
    }
}
