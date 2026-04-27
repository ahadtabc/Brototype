/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    float firstNum,secondNum,thirdNum,avg;
    printf("Enter 3 Numbers: \n");
    scanf("%f%f%f",&firstNum,&secondNum,&thirdNum);
    avg=(firstNum+secondNum+thirdNum)/3;
    
    printf("The Average is : %f",avg);

    return 0;
}