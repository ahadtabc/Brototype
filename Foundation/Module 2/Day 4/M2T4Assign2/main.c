/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 8, 12, 3};
    int length=sizeof(arr)/sizeof(arr[0]);
    
    printf("The OG Array is : ");
    int i=0;
    while(i<length){
        printf("%d ",arr[i]);
        i++;
    }
    
    printf("\nThe Reversed Array is : ");
    int j=length-1;
    while(j>=0){
        printf("%d ",arr[j]);
        j--;
    }
    return 0;
}
