/******************************************************************************

Assignment 1.7
Write a C program to delete all multiples of 4 from 
an array: {12, 15, 8, 9, 20, 7, 30}.

The Array is:     12 15 8 9 20 7 30 
Updated Array is: 15 9 7 30 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 15, 8, 9, 20, 7, 30};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i,j;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        if(arr[i]%4==0){
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