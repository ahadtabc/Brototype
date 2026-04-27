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
    for (int i=1; i<n; i++)
    {
        for (int j=1; j<=n-i;j++)
        {
            printf("%d ", j);
        }
         for (int k=1; k<i-1; k++)
        {
            if (i>1)
            {
                printf("* ");
            }
        }
        for (int m=1; m<i+1; m++)
        {
            if (i>1)
            {
                printf("* ");
            }
        }
        
        
         for (int j=n-i; j>=1;j--)
        {
            printf("%d ", j);
        }
        printf("\n");
    }
}