/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int row=3;
    for(int i=0; i<=row; i++){
        for(int j=0; j<=(2*i)-1; j++){
            printf("* ");
        }
        if(i==3)break;
        for(int k=0; k<=(2*i); k++){
        printf("\n*");
    }
     printf("\n");
    }
    
    return 0;
}
