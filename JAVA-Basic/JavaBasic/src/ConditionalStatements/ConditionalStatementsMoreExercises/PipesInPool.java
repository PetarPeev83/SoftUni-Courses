package ConditionalStatements.ConditionalStatementsMoreExercises;

import java.util.Scanner;

public class PipesInPool {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int V = Integer.parseInt(scan.nextLine());
        int p1 = Integer.parseInt(scan.nextLine());
        int p2 = Integer.parseInt(scan.nextLine());
        double h = Double.parseDouble(scan.nextLine());

        double totalLitres = (p1 * h) + (p2 * h);
        double percentFromP1 = (p1*h / totalLitres) * 100;
        double percentFromP2 = (p2*h / totalLitres) * 100;

        if (totalLitres > V) {
            System.out.printf("For %.2f hours the pool overflows with %.2f liters.", h, totalLitres - V);
        } else {
            System.out.printf("The pool is %.2f%% full. Pipe 1: %.2f%%. Pipe 2: %.2f%%.", (totalLitres / V)*100, percentFromP1, percentFromP2);
        }
    }
}
