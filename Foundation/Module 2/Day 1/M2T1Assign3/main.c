/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[10]={10,20,30,40,50,60,70,80,90,100};
    int i,sum=0;
  
    
    for(i=0;i<10;i++){
        sum+=arr[i];
    }
    printf("Sum of Array is: %d ",sum);

    return 0;
}


