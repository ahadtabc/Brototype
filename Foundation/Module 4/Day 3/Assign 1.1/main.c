/******************************************************************************

Assignment 1.1

Write a C program to replace all even numbers with 1 and 
all odd numbers with 0 in an array: {12, 7, 18, 9, 24, 11, 30}.

The Array is:     12 7 18 9 24 11 30 
Updated Array is: 1 0 1 0 1 0 1 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 7, 18, 9, 24, 11, 30};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
     for(i=0; i<n; i++){
         if(arr[i]%2==0){
             arr[i]=1;
         }else{
             arr[i]=0;
         }
     }
     
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
     

    return 0;
}