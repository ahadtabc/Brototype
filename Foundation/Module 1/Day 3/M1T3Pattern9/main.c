/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int rows=5;
    char alpha ='A';
    for(int i=1;i<=rows;i++){
       
    for(int j=1;j<=i;j++){
        printf("%c ",alpha);
        alpha++;
    }
    printf("\n");
    }
    

    return 0;
}
