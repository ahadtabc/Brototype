/******************************************************************************

Assignment 2.12
Write a C program to find the average of all elements. 
If average > 15, delete all odd numbers. 
If average ≤ 15, delete all even numbers. Array: {10, 12, 8, 20, 15, 18}.

The OG Array is: 10 12 8 20 15 18 
Sum is : 83.00
Average is : 13.83
Updated Array is: 15
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 12, 8, 20, 15, 18};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
    float sum=0,avg;
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        sum+=arr[i];
    }
    avg=sum/n;
     printf("\nSum is : %.2f",sum);
    printf("\nAverage is : %.2f",avg);
    
    for(i=0; i<n; i++){
        if(avg>15){
            if(arr[i]%2!=0){
                for(j=i; j<n-1; j++){
                    arr[j]=arr[j+1];
                }
                n--;
                i--;
            }
        
        }else if(avg <= 15){
            if(arr[i]%2==0){
                for(j=i; j<n-1; j++){
                    arr[j]=arr[j+1];
                }
                n--;
                i--;
                }
            }
    }
    
     printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    return 0;
}