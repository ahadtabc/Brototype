/******************************************************************************

Write a C program to find all prime numbers in an array and replace them with 0, 
then find the sum of the array. Array: {5, 8, 13, 9, 4, 17}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5,8,13,9,4,17};
    int n=sizeof(arr)/sizeof(arr[0]);
    int isPrime,i,j,sum=0;
    
    printf("The OG Array is: ");
    for(i=0; i<n ;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0; i<n ;i++){
        isPrime=1;
        
        if(arr[i]<2){
        isPrime=0;
        }
        
        for(j=2;j<=arr[i]/2;j++){
            if(arr[i]%j==0){
                isPrime=0;
                break;
            }
        }
        if(isPrime==1){
            arr[i]=0;
        }
    }
    
    printf("\nWithout Prime No: in Array is: ");
    for(i=0; i<n ;i++){
        printf("%d ",arr[i]);
        sum+=arr[i];
    }
    
    printf("\nThe Sum of Array is %d",sum);
        
    return 0;
}