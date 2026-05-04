/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 15, 8, 20, 7, 25, 12, 30};
    int size=sizeof(arr)/sizeof(arr[0]);
    int i;
    
    printf("The Array is : ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    printf("\nSkipping 2 after multiples of 5 is: ");
    for(i=0;i<size;i++){
        if(arr[i]%5==0){
            printf("%d ",arr[i]);
            i=i+2;
        }else
            {
            printf("%d ",arr[i]);
    }    
    }
    return 0;
}