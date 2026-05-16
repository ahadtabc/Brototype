/******************************************************************************

Assignment 2.6
Write a C program to reverse an array, 
then delete all multiples of 3: {12, 15, 8, 9, 20, 7, 30}.

The OG Array is: 12 15 8 9 20 7 30 
Reversed Array: 30 7 20 9 8 15 12 
Final Array is: 7 20 8
*******************************************************************************/
#include <stdio.h>

int main()
{
    
     int arr[]={12, 15, 8, 9, 20, 7, 30};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
   
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    printf("\nReversed Array: ");
    for(i=n-1; i>=0; i--){
         printf("%d ",arr[i]); 
    }
    
     for(i=0; i<n; i++){
        if(arr[i]%3==0){
        for(j=i; j<n-1; j++){
            arr[j]=arr[j+1];
        }
        n--;
        i--;
        }
    }
    
     printf("\nFinal Array is: ");
    for(i=n-1; i>=0; i--)
    printf("%d ",arr[i]);
    
 
    
    return 0;
}