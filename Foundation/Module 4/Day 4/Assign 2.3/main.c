/******************************************************************************

Assignment 2.3
Write a C program to delete all even numbers, 
then find the average of remaining elements: {10, 15, 8, 21, 30, 9, 12}

The OG Array is: 10 15 8 21 30 9 12 
Updated Array is: 15 21 9 
Sum of elements is: 45.00
Average of remaining elements is: 15.00
 
*******************************************************************************/
#include <stdio.h>

int main()
{
 
    int arr[]={10, 15, 8, 21, 30, 9, 12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
    float sum=0,avg;
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        if(arr[i]%2==0){
            for(j=i; j<n-1; j++){
                arr[j]=arr[j+1];
            }
            n--;
            i--;
        }
    }
   
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++){
    printf("%d ",arr[i]);
    sum+=arr[i];
    }
         printf("\nSum of elements is: %.2f",sum);
    avg=sum/n;
    
    printf("\nAverage of remaining elements is: %.2f",avg);
   
    return 0;
}

