/******************************************************************************

Assignment 2.18
Write a C program to delete all unique elements from an array 
(keep only duplicate values). Array: {10, 15, 10, 20, 15, 30, 25}.

The OG Array is: 10 15 10 20 15 30 25 
Only duplicate values: 10 15 10 15 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30, 25};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,k,count=0;
    
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        count=0;
    for(j=0; j<n; j++){
        if(arr[i]==arr[j]){
            count++;
        }
    } 
    
    if(count==1){
        for(k=i; k<n-1; k++){
            arr[k]=arr[k+1];
        }
        n--;
        i--;
    }
    }
    
    printf("\nOnly duplicate values: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    return 0;
}