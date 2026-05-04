/******************************************************************************

Write a C program to reverse an array, 
then delete all multiples of 3: {12, 15, 8, 9, 20, 7, 30}
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 15, 8, 9, 20, 7, 30};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j;
    
    
    printf("The Reversed Array is ");
    for(i=n-1;i>=0;i--){
        printf("%d ",arr[i]);
    }
    
    for(i=0;i<n;i++){
        if(arr[i]%3==0){
            for(j=i;j<n-1;j++){
                arr[j]=arr[j+1];
            }
            n--;
            i--;
        }
    }
    
    printf("\nThe Reversed Array without multiples of 3 is: ");
    for(i=n-1;i>=0;i--){
        printf("%d ",arr[i]);
    }
    
    return 0;
}