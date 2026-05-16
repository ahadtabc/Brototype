/******************************************************************************

Assignment 1.19

Write a C program to delete all duplicate elements 
(keep only first occurrence): {10, 15, 10, 20, 15, 30, 10}.

The Array is: 10 15 10 20 15 30 10 
Updated with first occurrence only: 10 15 20 30 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30, 10};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,k;
    
    
    printf("The Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        for(j=i+1; j<n; j++){
            if(arr[i]==arr[j]){
                for(k=j; k<n-1; k++){
                    arr[k]=arr[k+1];
                }
                n--;
                i--;
            }
        }
    }
    
    printf("\nUpdated with first occurrence only: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    return 0;
}
