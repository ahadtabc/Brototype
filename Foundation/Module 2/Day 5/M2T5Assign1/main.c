/******************************************************************************

Write a C program to replace all multiples of 3 with 0, 
then find the sum of all elements: {6, 15, 10, 9, 30, 25}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={6, 15, 10, 9, 30, 25};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,sum=0;
    
    printf("The OG Array is: ");
    for(i=0;i<n;i++)
    printf("%d ",arr[i]);
    
    printf("\nThe multiples of 3 is Replace by 0: ");
    for(i=0; i<n; i++){
    if(arr[i]%3==0){
        arr[i]=0;
    }
        printf("%d ",arr[i]);
    }
    
    
    printf("\nThe Sum of Final Array is: ");
     for(i=0;i<n;i++){
        sum+=arr[i];
     }
        printf("%d ",sum);

    return 0;
}
