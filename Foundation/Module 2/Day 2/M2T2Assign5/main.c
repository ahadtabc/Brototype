/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   
    int size=6;
    int arr[100]={10, 15, 8, 21, 30, 9};
    
    printf("The Array is : ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    for(int i=1;i<size;i++){
       if(arr[i]%2==1){
        arr[i]=0;
    }   
    }
  
    printf("\nThe Updated Array without Odd numbers :");
    for(int i=0;i<size;i++){
    printf("%d ",arr[i]);
    }
    return 0;
}
