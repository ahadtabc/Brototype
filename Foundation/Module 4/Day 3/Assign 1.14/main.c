/******************************************************************************

Assignment 1.14
Write a C program to sort an array in descending order. 
Array: {12, 5, 18, 3, 20, 8}.

The Array is : 12 5 18 3 20 8 
Sorted in descending order Array is : 20 18 12 8 5 3 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 5, 18, 3, 20, 8};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,temp;
    
    printf("The Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }

    for(i=0; i<n; i++){
        for(j=i+1; j<n; j++){
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    
    printf("\nSorted in descending order Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }
    return 0;
}