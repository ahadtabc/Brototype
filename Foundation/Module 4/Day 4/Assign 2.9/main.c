/******************************************************************************

Assignment 2.9
Write a C program to replace all multiples of 4 with 0,
then find the sum of remaining (non-zero) elements. 
Array: {12, 7, 16, 9, 20, 11, 8}.

The OG Array is: 12 7 16 9 20 11 8 
Zero on Multiple of Four: 0 7 0 9 0 11 0 
Final Sum of Array is : 27
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 7, 16, 9, 20, 11, 8};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,sum=0;
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    printf("\nZero on Multiple of Four: ");
     for(i=0; i<n; i++){
     if (arr[i]%4==0){
         arr[i]=0;
     }
         printf("%d ",arr[i]);
     
     }
     
      for(i=0; i<n; i++){
          sum+=arr[i];
      }
      
      printf("\nFinal Sum of Array is : %d",sum);
      
    return 0;
}