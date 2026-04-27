/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int row=9;

    for (int i=1;i<=9;i++) {
        
        for (int j=0;j<row;j++) {
            printf("%d ",i);
        }
        printf("\n");
        row--;

        if (i%3==0 && i<9) {
            printf("0 0\n0 0\n");
        }
    }

    return 0;
}
