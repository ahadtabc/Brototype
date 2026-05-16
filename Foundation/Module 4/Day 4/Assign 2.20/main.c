/******************************************************************************

Assignment 2.20
Write a C program to find the average of all unique elements in an array.
Array: {10, 15, 10, 20, 15, 30, 25}.

The OG Array is: 10 15 10 20 15 30 25 
Sum is :75.00
Average is :25.00
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30, 25};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
    int count=0,isUnique=0;
    float sum=0,avg;
    
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
    count=0;
    for(j=0; j<n; j++){
        if(arr[i]==arr[j]){
            count++;
        }
    }
    if(count==1){
        sum+=arr[i];
        isUnique++;
    }
    }
    avg=sum/isUnique;
    
    printf("\nSum is :%.2f",sum);
    printf("\nAverage is :%.2f",avg);

    return 0;
}