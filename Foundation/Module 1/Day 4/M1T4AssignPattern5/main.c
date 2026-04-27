/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
#include <stdlib.h>

int main()
{

    int rows=6,col=11;
    for(int i=1;i<=rows;i++){
        for(int j=1;j<=col;j++){
            if(i==1||i+j==rows+6||j==i){
            printf("* ");
            }else{
            printf("  ");
            }
        }
        printf("\n");
    }

    return 0;
}