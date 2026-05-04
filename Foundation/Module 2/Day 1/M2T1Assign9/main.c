/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[7]={12, 7, 18, 5, 22, 9, 14};
    int count =0;
    
     printf("The numbers are multiples of 3 is :");
    for(int i=0;i<7;i++){
        if(arr[i]%3==0){
            count++;
     
        }
    }
          printf(" %d ",count);

    return 0;
}
