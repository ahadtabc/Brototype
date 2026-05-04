/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

#include <stdio.h>

int main()
{
    int size=7;
    int arr[100]={12, 7, 16, 9, 20, 11, 8};
    int sum=0,i;
    
    printf("The Array is: ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    printf("\nZero on Multiple of 4 is in Array : ");
     for(i=0;i<size;i++){
         if(arr[i]%4==0){
             arr[i]=0;
         }      
         printf("%d ",arr[i]);
         }
         
    
    for(i=0;i<size;i++){
        sum=sum+arr[i];
    }
    
    
    printf("\nsum of remaining (non-zero) is : %d",sum);

    return 0;
}
