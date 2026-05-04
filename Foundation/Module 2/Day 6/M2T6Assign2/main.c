/******************************************************************************

Write a C program to delete next three elements 
that come immediately after a multiple of 4. Array: {6, 10, 8, 15, 12, 7, 18, 20}.
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={6, 10, 8, 15, 12, 7, 18, 20};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,k;
    
    printf("The OG Array is : ");
    for(i=0;i<n;i++){
    printf("%d ",arr[i]);
    }
    
      for(i=0;i<n;i++){
          if(arr[i]%4==0)
      
      
      for(k=0;k<3;k++){
          if(i+1<n){
              for(j=i;j<n-1;j++){
                  arr[j]=arr[j+1];
              }
              n--;
          }
      }
    }

        printf("\nThe Updated Array is : ");
    for(i=0;i<n;i++){
    printf("%d ",arr[i]);
    }
    
    return 0;
}
