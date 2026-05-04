/******************************************************************************

Write a C program to separate even and odd numbers into two different arrays,
then print the array that has more elements. Array: {12, 7, 18, 9, 24, 11, 30, 5}

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 7, 18, 9, 24, 11, 30, 5};
    int n=sizeof(arr)/sizeof(arr[0]);
    int odd[8],even[8];
    int evenCount=0,oddCount=0;
    int i;
    
    printf("The OG Array is: ");
    for(i=0; i<n ;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0; i<n ;i++){
        if(arr[i]%2==0){
            even[evenCount++]=arr[i];
        }else{
            odd[oddCount++]=arr[i];
        }
    }
    
    if(evenCount>oddCount){
        printf("\nEven is the larger size is %d",evenCount);
        for(i=0;i<evenCount;i++){
            printf("%d ",even[i]);
        }
    }else if(oddCount>evenCount){
        printf("\nOdd is the larger size is %d",oddCount);
        for(i=0;i<oddCount;i++){
            printf("%d ",odd[i]);
        }
    }else{
        printf("\nBoth arrays have the same no: of elements is : %d", evenCount);
    }
    
    printf("\nEven: ");
        for(i=0; i<evenCount; i++) {
        printf("%d ", even[i]);
        }
        printf("\nOdd: ");
        for(i=0; i<oddCount; i++){
            printf("%d ", odd[i]);
            
        }
    
    return 0;
}