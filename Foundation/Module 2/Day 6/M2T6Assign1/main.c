/******************************************************************************

Write a C program to replace all multiples of 4 with 0, 
then find the sum of remaining (non-zero) elements. Array: {12, 7, 16, 9, 20, 11, 8}
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 7, 16, 9, 20, 11, 8};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,sum=0;
    printf("The OG Array is : ");
    for(i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
    
     for(i=0;i<n;i++){
         if(arr[i]%4==0){
             arr[i]=0;
         }
         sum+=arr[i];
     }
     
     
       printf("\nThe Array with Replace 0 for multiples of 4 is : ");
    for(i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
    printf("\nThe Sum of(non-zero) elements is %d ",sum);
    return 0;
}
