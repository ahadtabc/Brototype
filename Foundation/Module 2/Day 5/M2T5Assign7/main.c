/******************************************************************************

Write a C program to 
separate even and odd elements into two different 
arrays: {12, 7, 18, 9, 24, 11, 30}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[100]={12, 7, 18, 9, 24, 11, 30};
    int n=7;
    int i,odd[100],even[100],isOdd=0,isEven=0;
    
    printf("The OG Array is : ");
    for(i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0;i<n;i++){
    if(arr[i]%2==0){
        even[isEven]=arr[i];
        isEven++;
    }else{
        odd[isOdd]=arr[i];
        isOdd++;
    }
    }
     printf("\nThe Even Array is : ");
    for(i=0;i<isEven;i++){
        printf("%d ",even[i]);
    }
    
      printf("\nThe Odd Array is : ");
    for(i=0;i<isOdd;i++){
        printf("%d ",odd[i]);
    }
    
    return 0;
}
