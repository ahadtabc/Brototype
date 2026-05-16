/******************************************************************************

Assignment 2.4
Write a C program to find the average of all 
unique array elements: {10, 15, 10, 20, 15, 30}

The OG Array is: 10 15 10 20 15 30 
Updated Array is: 20 30 
Average of remaining elements is: 25.00

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,isUnique;
    float sum=0,avg;
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++){
        isUnique=1;
    for(j=0; j<n; j++){
        if(i!=j && arr[i]==arr[j]){
            isUnique=0;
            break;
    }
    }
    
    if(isUnique==1){
        printf("%d ",arr[i]);
        sum+=arr[i];
        isUnique++;
    }
    }
   
        avg=sum/isUnique;
          printf("\nAverage of remaining elements is: %.2f",avg);
    
    return 0;
}

