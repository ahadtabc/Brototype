/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int rows = 9;    // Total rows in the diamond
    int spaces, symbols, i, j;
    char displayChar;

    for (i = 1; i <= rows; i++) {
        // 1. Calculate how many symbols and spaces based on row number
        if (i <= 5) { // Top half
            spaces = 5 - i;
            symbols = (2 * i) - 1;
        } else {      // Bottom half
            spaces = i - 5;
            symbols = (2 * (10 - i)) - 1;
        }

        // 2. Assign the specific character for this row
        switch(i) {
            case 1: displayChar = 'A'; break;
            case 2: displayChar = '1'; break;
            case 3: displayChar = 'B'; break;
            case 4: displayChar = '2'; break;
            case 5: displayChar = 'C'; break;
            case 6: displayChar = '3'; break;
            case 7: displayChar = 'D'; break;
            case 8: displayChar = '4'; break;
            case 9: displayChar = 'E'; break;
        }

        // 3. Print the calculated spaces
        for (j = 1; j <= spaces; j++) {
            printf(" ");
        }

        // 4. Print the symbols
        for (j = 1; j <= symbols; j++) {
            printf("%c", displayChar);
        }

        printf("\n");
    }

    return 0;
}