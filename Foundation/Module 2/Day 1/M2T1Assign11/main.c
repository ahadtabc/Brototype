/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[7]={25, 12, 8, 45, 3, 67, 19};
    
    int small=arr[0];
    
    for(int i=1;i<7;i++){
        if(arr[i]<small){
            small=arr[i];
        }
    }
    printf("The Smallest number is : %d",small);

    return 0;
}
