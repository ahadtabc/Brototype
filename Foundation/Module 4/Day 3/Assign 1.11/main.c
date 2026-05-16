/******************************************************************************

Assignment 1.11
Write a C program to Skip  Two  elements after every multiple of 3 in 
an array: {3, 10, 15, 8, 20, 9, 25, 12}.

The Array is : 3 10 15 8 20 9 25 12 
Updated Array is : 3 8 20 9 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={3, 10, 15, 8, 20, 9, 25, 12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i;
    
    printf("The Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }

     printf("\nUpdated Array is : ");
    for(i=0; i<n; i++){
        if(arr[i]%3==0){
           printf("%d ",arr[i]);
           i+=2;
        }else{
             printf("%d ",arr[i]);
        }
    }
    
    return 0;
}