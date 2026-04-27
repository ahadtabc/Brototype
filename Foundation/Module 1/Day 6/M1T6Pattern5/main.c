/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>
int main()
{
    int rows=11;
    for(int i=1;i<=rows;i++){
        int stars;
       if(i==1||i==2){
            stars=10;
        }else if (i==6||i==7){
        stars=8;
        }else{
        stars=2;
        }
        for(int k=1;k<=stars;k++){
            printf("*");
        }
           printf("\n");
    }

    return 0;
}
