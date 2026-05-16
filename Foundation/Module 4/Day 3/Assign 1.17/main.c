/******************************************************************************

Assignment 1.17
Write a C program to find and print all unique elements in an array 
(elements that appear only once): {10, 15, 10, 20, 15, 30}.

The Array is: 10 15 10 20 15 30 
Elements that appear only once 20 30 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,unique;
    
    
    printf("The Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
     printf("\nElements that appear only once ");
    for(i=0; i<n; i++){
        unique=1;
        
    for(j=0; j<n; j++){
        
        if(i!=j && arr[i]==arr[j]){
            unique=0;
            break;
        }
    }
    if(unique==1){
       printf("%d ",arr[i]);
    }
    }

    return 0;
}