/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[6]={12, 25, 8, 30, 15, 20};
   int largest=arr[0];
   
     printf("The Largest Even Number is : ");

   for(int i=0;i<6;i++){
       if(i%2==0){
       }if(arr[i]>largest){
           largest=arr[i];
       }
   }
   printf("%d", largest);

    return 0;
}
