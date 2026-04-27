/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    float firstNum,secondNum,thirdNum;
    printf("Enter 3 Numbers: \n");
    scanf("%f%f%f",&firstNum,&secondNum,&thirdNum);
    
   if(firstNum>=secondNum && firstNum>=thirdNum)
        {
       printf("The A = %f is the largest",firstNum);
       }
    else if(secondNum>=firstNum && secondNum>=thirdNum)
        {
        printf("The B = %f is the largest",secondNum);
        }
       else{
       printf("The C = %f is the largest",thirdNum);
        }

    return 0;
}
