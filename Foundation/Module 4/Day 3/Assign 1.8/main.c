/******************************************************************************

Assignment 1.8
Write a C program to delete all prime numbers from an 
array: {7, 12, 13, 18, 11, 20, 9}

The Array is:     7 12 13 18 11 20 9 
Updated Array is: 12 18 20 9 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={7, 12, 13, 18, 11, 20, 9};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i,j,isPrime;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        isPrime=1;
        if(arr[i]<2){
            isPrime=0;
        }else{
        for(j=2; j<=arr[i]/2; j++){
            if(arr[i]%j==0){
                isPrime=0;
                break;
            }
        }
        }
        
        if(isPrime==1){
            for(j=i; j<=n-1; j++){
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