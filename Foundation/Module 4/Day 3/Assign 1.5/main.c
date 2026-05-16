/******************************************************************************

Assignment 1.5
Write a C program to replace all duplicate numbers with -1 in 
an array: {10, 15, 10, 20, 15, 30}.

The Array is:     10 15 10 20 15 30 
Updated Array is: 10 15 -1 20 -1 30 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i,j;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        for(j=i+1; j<n; j++){
            if(arr[i]==arr[j]){
                arr[j]=-1;
               
            }
           
        }
    }
    
   
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    return 0;
}