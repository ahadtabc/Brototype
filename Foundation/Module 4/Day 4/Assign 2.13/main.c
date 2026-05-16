/******************************************************************************
Assignment 2.13
Write a C program to display an array after skipping one element next 
to each multiple of 5. Array: {5, 10, 15, 8, 20, 7, 25, 12, 30}.

The OG Array is: 5 10 15 8 20 7 25 12 30 
The Updated Array is: 5 15 20 25 30 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 15, 8, 20, 7, 25, 12, 30};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
    
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
     for(i=0; i<n; i++){
         if(arr[i]%5==0){
             printf("%d ",arr[i]);
             i+=1;
         }else{
             printf("%d ",arr[i]);
         }
     }
    return 0;
}