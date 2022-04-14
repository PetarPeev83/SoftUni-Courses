package WhileLoop.Exercise;

import java.util.Scanner;

public class OldBooks {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String searchingBook = scan.nextLine();
        String currentBook = scan.nextLine();
        int bookCounter = 0;

        while (!currentBook.equals(searchingBook) && !currentBook.equals("No More Books")) {
            bookCounter++;

            currentBook = scan.nextLine();
        }
        if (currentBook.equals("No More Books")) {
            System.out.println("The book you search is not here!");
            System.out.printf("You checked %d books.", bookCounter);
        } else {
            System.out.printf("You checked %d books and found it.", bookCounter);
        }
    }
}
