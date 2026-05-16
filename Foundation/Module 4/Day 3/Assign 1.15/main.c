/******************************************************************************

Assignment 1.15
Write a C program to sort an array, then count the number of unique elements. 
Array: {4, 5, 4, 6, 6, 7, 8}.

The Array is : 4 5 4 6 6 7 8 
Sorted Array is : 4 4 5 6 6 7 8 
Number of unique elements are: 5 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={4, 5, 4, 6, 6, 7, 8};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,temp,count=0;
    
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
         for(i=0; i<n; i++){
             if(arr[i]!=arr[i-1]){
                     count++;
                
                 
             }
         }
        printf("\nNumber of unique elements are: %d ",count);
    
    
    return 0;
}