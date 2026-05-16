/******************************************************************************

Assignment 1.4
Write a C program to replace all prime numbers with -1 in 
an array: {7, 12, 13, 18, 11, 20, 9}.

The Array is:     7 12 13 18 11 20 9 
Updated Array is: -1 12 -1 18 -1 20 9 


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
       if(isPrime==1)
       arr[i]=-1;
     }
     
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    return 0;
}