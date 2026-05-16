/******************************************************************************
 
Assignment 1.13
Write a C program to sort an array in ascending order 
(without using built-in functions). Array: {5, 2, 8, 1, 9, 3}.

The Array is : 5 2 8 1 9 3 
Sorted Array is : 1 2 3 5 8 9

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 2, 8, 1, 9, 3};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,temp;
    
    printf("The Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }

    for(i=0; i<n; i++){
        for(j=i+1; j<n; j++){
               if(arr[i]>arr[j]){
                   temp=arr[i];
                   arr[i]=arr[j];
                   arr[j]=temp;
               }
            }
           
        }
 
    
    printf("\nSorted Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }
    return 0;
}