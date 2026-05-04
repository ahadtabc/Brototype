/******************************************************************************

Write a C program to find the sum of all elements. 
If sum > 100, delete all odd numbers. If sum <= 100, 
delete all even numbers. Array: {10, 15, 8, 22, 7, 30, 12}.


*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 8, 22, 7, 30, 12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,sum=0;
    
    printf("The OG Array is: ");
    for(i=0;i<n;i++)
    printf("%d ",arr[i]);

    printf("\nThe Sum of Array is: ");
      for(i=0;i<n;i++){
          sum+=arr[i];
      }
      printf("%d ",sum);
      
      
      for(i=0;i<n;i++){
          if(sum>100 && arr[i]%2!=0){
              for(j=i;j<n-1;j++){
                  arr[j]=arr[j+1];
              }
              n--;
              i--;
          }else if (sum<=100 && arr[i]%2==0){
              for(j=i;j<n-1;j++){
                  arr[j]=arr[j+1];
              }
              n--;
              i--;
      }
      }
      
      printf("\nThe Update Array is: ");
       for(i=0;i<n;i++)
    printf("%d ",arr[i]);
      
    return 0;
}
