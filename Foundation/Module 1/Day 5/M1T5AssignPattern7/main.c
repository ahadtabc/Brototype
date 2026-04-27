/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int row=3,col=4;
    for (int i=0;i<row;i++) {
        
        for (int j=1;j<=col;j++) {
            printf("%d ",j);
        }
        printf("\n");
        if (i<2) {
            printf("1\n1\n");
        }
    }

    return 0;
}
