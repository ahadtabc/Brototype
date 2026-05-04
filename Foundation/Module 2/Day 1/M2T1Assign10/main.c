/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[7]={12, 45, 23, 67, 34, 89, 10};
    
    int i,largest=arr[0];
   
   for(i=0;i<7;i++){
       if(arr[i]>largest){
       largest=arr[i];
       }
   }
   printf("The Largest Number is %d",largest);

    return 0;
}
