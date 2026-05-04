/******************************************************************************

Write a C program to delete all odd numbers from an array, 
then find the sum of remaining elements: {10, 15, 8, 21, 30, 9, 12}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]= {10, 15, 8, 21, 30, 9, 12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,sum=0;
    
    printf("The OG Array is : ");
    for(i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
    
    
    for(i=0;i<n;i++){
    if(arr[i]%2==1){
       for(j=i;j<n-1;j++){
           arr[j]=arr[j+1];
       }
        n--;
        i--;
    }
    }
    
   printf("\nDeleted Odd No: in Array : ");
    for(i=0;i<n;i++){
        printf("%d ",arr[i]);
        sum+=arr[i];
    }
  
  printf("\nThe Sum without odd Numbers is %d ",sum);
    return 0;

}
