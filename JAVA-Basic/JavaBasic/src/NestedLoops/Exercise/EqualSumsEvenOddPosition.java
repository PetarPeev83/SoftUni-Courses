package NestedLoops.Exercise;

import java.util.Scanner;

public class EqualSumsEvenOddPosition {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int firstNum = Integer.parseInt(scan.nextLine());
        int secondNum = Integer.parseInt(scan.nextLine());

        for (int i = firstNum; i <= secondNum; i++) {

            String currentNum = i +"";

            int odd = 0;
            int even = 0;

            for (int j = 0; j < currentNum.length(); j++) {

                int currentCheck = Integer.parseInt("" + currentNum.charAt(j));

                if (j % 2 == 0){
                    even += currentCheck;
                } else {
                    odd += currentCheck;
                }
            }
            if (even == odd) {
                System.out.print(i + " ");
            }
        }
    }
}
