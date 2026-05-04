/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=6,i;
    int arr[100]={6, 15, 10, 9, 30, 25};
    
    printf("The Array is: ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    for(int i=0;i<size;i++){
        if(arr[i]%5==0){
            arr[i]=1;
        }  else if(arr[i]%3==0){
            arr[i]=0;
        }
    }
    printf("\nUpdated Array : ");
    for(i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    return 0;
}
