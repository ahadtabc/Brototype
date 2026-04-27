/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int n = 5; 
    char alpha ='A';

  
    for (int i=0; i<n; i++) {
        for (int j=0; j<n-i-1; j++) {
            printf("  ");
        }
        printf("%c ",alpha++);
        if (i>0) {
            for (int j=0; j<(2*i-1); j++) {
                printf("  ");
            }
        printf("%c",alpha++);
        }
        printf("\n");
    }


    for (int i=n-2; i>=0; i--) {
        
        for (int j=0;j<n-i-1; j++) {
            printf("  ");
        }
        printf("%c ",alpha++);

        if (i > 0) {
            for (int j=0; j<(2*i-1); j++) {
                printf("  ");
            }
           
            printf("%c", alpha++);
        }
        printf("\n");
    }

    return 0;
}