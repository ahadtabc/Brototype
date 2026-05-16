/******************************************************************************

Assignment 1.3
Write a C program to replace all multiples of 3 with 0 and 
all multiples of 2 with 1 in an array: {9, 10, 15, 8, 12, 25, 30}. 
(If multiple of both, replace with 1)

The Array is:     9 10 15 8 12 25 30 
Updated Array is: 0 1 0 1 0 25 0 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={9, 10, 15, 8, 12, 25, 30};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
     for(i=0; i<n; i++){
         if(arr[i]%3==0){
             arr[i]=0;
         }else if(arr[i]%2==0){
             arr[i]=1;
         }
     }
     
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    return 0;
}
