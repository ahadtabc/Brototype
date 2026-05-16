/******************************************************************************

Assignment 2.14
Write a C program to separate even and odd numbers into two different arrays, 
then print the array that has more elements. Array: {12, 7, 18, 9, 24, 11, 30, 5}.

The OG Array is: 12 7 18 9 24 11 30 5 
Both Array's have equal elements 4
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 7, 18, 9, 24, 11, 30, 5};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i;
    int even[100],odd[100];
    int evenCount=0, oddCount=0;
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
        if(arr[i]%2==0){
            even[evenCount]=arr[i];
            evenCount++;
        }else{
            odd[oddCount]=arr[i];
            oddCount++;
        }
    }
    if(evenCount>oddCount){
        printf("\n Even Array's elements is %d",evenCount);
        for(i=0; i<evenCount; i++){
            printf("%d ",even[i]);
        }
    }else if(oddCount>evenCount){
        printf("\n Odd Array's elements is %d",oddCount);
        for(i=0; i<oddCount; i++){
            printf("%d ",odd[i]);
        }
    }else{
        printf("\nBoth Array's have equal elements %d",evenCount);
    }
    return 0;
}

