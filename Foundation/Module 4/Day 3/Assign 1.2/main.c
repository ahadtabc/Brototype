/******************************************************************************

Assignment 1.2
Write a C program to replace all multiples of 4 with 0 in 
an array: {8, 15, 12, 7, 16, 20, 9}.

The Array is:     8 15 12 7 16 20 9 
Updated Array is: 0 15 0 7 0 0 9 
*******************************************************************************/
#include <stdio.h>

int main()
{
   int arr[]={8, 15, 12, 7, 16, 20, 9};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
     for(i=0; i<n; i++){
         if(arr[i]%4==0){
             arr[i]=0;
         }
     }
     
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    return 0;
}