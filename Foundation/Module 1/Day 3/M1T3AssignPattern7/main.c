/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int row=3;
    int col=4;
    for(int i=1;i<=row;i++){
        for(int j=1;j<=col;j++){
            printf("* ");
        }
        if(i==3)break;
        for(int k=1;k<=col;k++){
            printf("\n*");
        }
         printf("\n");
    }
   

    return 0;
}