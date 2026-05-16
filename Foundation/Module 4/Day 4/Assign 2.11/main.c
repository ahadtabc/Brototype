/******************************************************************************

Assignment 2.11
Write a C program to replace all prime numbers with -1, 
then delete all negative numbers, 
then reverse the remaining array. Array: {7, 12, 13, 18, 11, 20, 9}

The Array is: 7 12 13 18 11 20 9 
Prime -1 Array is: -1 12 -1 18 -1 20 9 
Delete -1 Array is: 12 18 20 9 
Reverse Array is: 9 20 18 12 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={7, 12, 13, 18, 11, 20, 9};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,isPrime,temp;
    
    printf("The Array is: ");
    for(i=0; i<n; i++){
    printf("%d ",arr[i]);
    }
    
    
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

     printf("\nPrime -1 Array is: ");
    for(i=0; i<n; i++){
    printf("%d ",arr[i]);
    }
    
      for(i=0; i<n; i++){
          if(arr[i]==-1){
              for(j=i; j<n-1; j++){
                  arr[j]=arr[j+1];
              }
              n--;
              i--;
              }
          }
          
     printf("\nDelete -1 Array is: ");
    for(i=0; i<n; i++){
    printf("%d ",arr[i]);
    }
    
     for(i=0,j=n-1;i<j;i++,j--){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
   
    
      printf("\nReverse Array is: ");
    for(i=0; i<n; i++){
    printf("%d ",arr[i]);
    }
    
    //   printf("\nReverse Array is: ");
    // for(i=n-1; i>=0; i--){
    // printf("%d ",arr[i]);
    // }
    
    return 0;
}