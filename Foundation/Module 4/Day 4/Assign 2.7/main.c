/******************************************************************************

Assignment 2.7
Write a C program to replace all prime numbers with -1, 
then delete all negative numbers: {7, 12, 13, 18, 11, 20, 9}.

The OG Array is: 7 12 13 18 11 20 9 
Replaced Prime No are: -1 12 -1 18 -1 20 9 
Delete Prime No are: 12 18 20 9 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={7, 12, 13, 18, 11, 20, 9};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,isPrime;
   
    
    printf("The OG Array is: ");
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
        arr[i]=-1;
        
    }
    }
    
    printf("\nReplaced Prime No are: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
     for(i=0; i<n; i++){
         if(arr[i]==-1){
             for(j=i; j<n-1; j++){
                 arr[j]=arr[j+1];
             }
             n--;
             i--;
             }
         }
    printf("\nDelete Prime No are: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    return 0;
}