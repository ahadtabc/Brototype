/******************************************************************************

Write a C program to delete all even numbers from an array, 
then find the average of remaining elements: {10, 15, 8, 21, 30, 9, 12}

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 8, 21, 30, 9, 12};
    int size=sizeof(arr)/sizeof(arr[0]);
    int i,j,avg,sum=0;
    
    printf("The OG Array is: ");
    for(i=0;i<size;i++)
    printf("%d ",arr[i]);
    
    for(i=0;i<size;i++){
        if(arr[i]%2==0){
        for(j=i;j<size-1;j++){
            arr[j]=arr[j+1];
        }
        i--;
        size--;
    }
    }
    
    printf("\nWithout Even Numbers: ");
      for(i=0;i<size;i++){
    printf("%d ",arr[i]);
    sum+=arr[i];
    avg=sum/size;
      }
      
      printf("\nThe average Without even is : %d",avg);
      
    return 0;
}
