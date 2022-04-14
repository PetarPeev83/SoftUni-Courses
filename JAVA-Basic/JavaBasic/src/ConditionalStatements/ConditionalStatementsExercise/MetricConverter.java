package ConditionalStatements.ConditionalStatementsExercise;

import java.util.Scanner;

public class MetricConverter {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        double numToConvert = Double.parseDouble(scan.nextLine());
        String metricFrom = scan.nextLine();
        String metricTo = scan.nextLine();

        double numInMilimeters = 0;

        switch (metricFrom) {
            case "mm":
                numInMilimeters = numToConvert;
                break;
            case "cm":
                numInMilimeters = numToConvert * 10;
                break;
            case "m":
                numInMilimeters = numToConvert * 1000;
                break;
        }
        if (metricTo.equals("mm")) {
            System.out.printf("%.3f", numInMilimeters);
        } else if (metricTo.equals("cm")) {
            System.out.printf("%.3f", numInMilimeters / 10);
        } else if (metricTo.equals("m")) {
            System.out.printf("%.3f", numInMilimeters / 1000);
        }
    }
}

