package com.company.FirstLesson;

import java.util.Scanner;

public class PetShop {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int dogs = Integer.parseInt(scan.nextLine());
        int otherAnimals = Integer.parseInt(scan.nextLine());

        double total = dogs * 2.5 + otherAnimals * 4 ;

        System.out.println(total + " " + "lv.");
    }
}
