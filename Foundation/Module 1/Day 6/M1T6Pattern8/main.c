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
    char alpha = 65;
    printf("%c \n", alpha);

    for (int i=2; i<=n; i++)
    {
        for (int j=1; j<=i; j++)
        {
            printf("%d ", i-1);
                }

        printf("\n");

        for (int j=1; j<=i; j++)
        {
            alpha +=1;
            printf("%c ", alpha);
        }
        printf("\n");
    }
}