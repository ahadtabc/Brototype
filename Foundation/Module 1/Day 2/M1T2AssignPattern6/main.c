/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int n=5;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n;j++){
            if( j==1 || j==n || i==1 || i==n){
                printf("* ");
            }else{
                printf("  ");
            }
            
        }
    printf("\n");
}
    return 0;
}
