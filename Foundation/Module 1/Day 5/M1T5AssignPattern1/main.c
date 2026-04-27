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
    for(int i=n-1;i>=1;i--){
      for(int j=1;j<=n-i;j++){
            printf("  ");
        }
        for(int k=1;k<=(2*i)-1;k++){
             printf("%d ",k);
        }
         printf("\n");
    }


    return 0;
}

