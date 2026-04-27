/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
   int n;
   int num=1;
   
   printf("Enter How many Odd Numbers: ");
   scanf("%d",&n);
   
       do{
           printf("%d ",num);
           num+=2;
           n--;
       }while(n>0);

    return 0;
}

