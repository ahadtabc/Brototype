/******************************************************************************

Assignment 2.8
Write a C program to find the sum of all elements. 
If sum > 50, delete all odd numbers. If sum ≤ 50, 
delete all even numbers. Array: {10, 15, 8, 22, 7, 30, 12}.

The OG Array is: 10 15 8 22 7 30 12 
The Sum of all elements is: 104
Final Array is: 10 8 22 30 12 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 8, 22, 7, 30, 12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,sum=0;
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
  
    for(i=0; i<n; i++){
    sum+=arr[i];
    }
     printf("\nThe Sum of all elements is: %d",sum);
     
      for(i=0; i<n; i++){
          if(sum>50){
              if(arr[i]%2!=0){
                  for(j=i; j<n-1; j++){
                      arr[j]=arr[j+1];
                  }
                  n--;
                  i--;
              }
          }else{ 
              if(arr[i]%2==0){
                  for(j=i; j<n-1; j++){
                      arr[j]=arr[j+1];
                  }
                  n--;
                  i--;
              }
              
          }
      }
    
     printf("\nFinal Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    return 0;
}
