/******************************************************************************

Assignment 1.10
Write a C program to delete all elements that come immediately 
AFTER an odd number in an array: {5, 10, 8, 15, 12, 7, 20}.

The Array is : 5 10 8 15 12 7 20 
Updated Array is : 5 8 15 7 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 8, 15, 12, 7, 20};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
    
    printf("The Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }

    for(i=0; i<n; i++){
        if(arr[i]%2!=0){
            for(j=i+1; j<n-1; j++){
                arr[j]=arr[j+1];
            }
            n--;
        }
    }
    
    printf("\nUpdated Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }
    return 0;
}