/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{

    int n=6;
    int size=2*n-1;
    for(int i=1;i<=size;i++){
        for(int j=1;j<=size;j++){
            if((j+i==n+1)||(j-i==n-1)||(i-j==n-1)||(j+i==size+n)){
            printf("* ");
            }else{
            printf("  ");
            }
        }
        printf("\n");
    }

    return 0;
}
