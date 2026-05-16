/******************************************************************************

Assignment 2.2

Write a C program to delete all odd numbers, 
then find the sum of remaining elements: {10, 15, 8, 21, 30, 9, 12}

The OG Array is: 10 15 8 21 30 9 12 
Updated Array is: 10 8 30 12 
Sum of elements is: 60

*******************************************************************************/


#include <stdio.h>

int main() {
    int arr[]={10, 15, 8, 21, 30, 9, 12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,sum=0;
    
    printf("The OG Array is: ");
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
    for(i=0; i<n; i++){
    printf("%d ",arr[i]);
    sum+=arr[i];
    }
     printf("\nSum of elements is: %d",sum);
    
    return 0;
}