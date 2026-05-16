/******************************************************************************

Assignment 2.1
Write a C program to replace all multiples of 5 with 0, 
then find the sum of all elements: {6, 15, 10, 9, 30, 25}.

The OG Array is: 6 15 10 9 30 25 
Sum of elements is: 15
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={6, 15, 10, 9, 30, 25};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,sum=0;
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++){
    printf("%d ",arr[i]);
    }
    
    for(i=0; i<n; i++){
        if(arr[i]%5==0){
            arr[i]=0;
        }
    }
        
        for(i=0; i<n; i++){
         sum =sum +arr[i];
    }
    printf("\nSum of elements is: %d",sum);
    
    return 0;
}