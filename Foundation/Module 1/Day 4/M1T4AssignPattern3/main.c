/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdlib.h>

int main()
{
    int row=6;
    int col=11;
    for(int i=1;i<=row;i++){
        for(int j=1;j<=col;j++){
                if(i==6||j+i==1+6||j-i==6-1){
                  printf("* ");
                }else{
                  printf("  ");
                }

        }
        printf("\n");
    }

    return 0;
}
