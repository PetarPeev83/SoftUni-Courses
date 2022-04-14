package ConditionalStatements;

import java.util.Scanner;

public class AreaOfFigures {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String figure = scan.nextLine();

        if (figure.equals("square")) {
            Double a = Double.parseDouble(scan.nextLine());
            Double S = a * a;
            System.out.printf("%.3f", S);
        } else if (figure.equals("rectangle")) {
            Double a = Double.parseDouble(scan.nextLine());
            Double h = Double.parseDouble(scan.nextLine());
            Double S = a * h;
            System.out.printf("%.3f", S);
        } else if (figure.equals("circle")) {
            Double r = Double.parseDouble(scan.nextLine());
            Double S = Math.PI * (r * r);
            System.out.printf("%.3f", S);
        } else if (figure.equals("triangle")) {
            Double a = Double.parseDouble(scan.nextLine());
            Double h = Double.parseDouble(scan.nextLine());
            Double S = (a * h) / 2;
            System.out.printf("%.3f", S);
        }
    }
}
