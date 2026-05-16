/******************************************************************************

Assignment 2.10
Write a C program to delete all elements that 
come immediately after a multiple of 2. Array: {6, 10, 9, 15, 12, 7, 18, 20}.

The OG Array is: 6 10 9 15 12 7 18 20 
The Update Array is: 6 9 15 12 18

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
