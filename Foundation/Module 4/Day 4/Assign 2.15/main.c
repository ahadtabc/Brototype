/******************************************************************************

Assignment 2.15
Write a C program to replace all elements at odd  positions with 0, 
only if the element at that position is an even number.
Given Array: {10, 14, 8, 6, 20, 12, 7}

The OG Array is: 10 14 8 6 20 12 7 
Updated Array : 10 0 8 0 20 0 7 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 14, 8, 6, 20, 12, 7};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i;
    
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
       if(i%2!=0 &&arr[i]%2==0){
           arr[i]=0;
       }
    }
    
    printf("\nUpdated Array : ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    return 0;
}