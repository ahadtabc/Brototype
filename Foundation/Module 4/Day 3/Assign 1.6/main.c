/******************************************************************************

Assignment 1.6
Write a C program to delete all odd numbers from 
an array: {12, 7, 18, 9, 24, 11, 30}.

The Array is:     12 7 18 9 24 11 30 
Updated Array is: 12 18 24 30 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 7, 18, 9, 24, 11, 30};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i,j;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        if(arr[i]%2!=0){
        for(j=i; j<n-1; j++){
            arr[j]=arr[j+1];
               
            }
            n--;
            i--;
        }
        }
    
    
   
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    return 0;
}

