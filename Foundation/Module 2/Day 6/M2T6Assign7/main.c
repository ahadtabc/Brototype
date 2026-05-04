/******************************************************************************

Write a C program to replace all elements 
at ODD positions with 0 if the element is EVEN. Array: {10, 15, 8, 7, 20, 9, 12}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 8, 7, 20, 9, 12};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i;
    
    printf("The OG Array: ");
    for(i=0;i<n;i++)
    printf("%d ",arr[i]);
    
    for(i=0;i<n;i++){
        if((i+1)%2!=0 && arr[i]%2==0){
            arr[i]=0;
        }
        }

    
      printf("\nThe Updated Array: ");
    for(i=0;i<n;i++)
    printf("%d ",arr[i]);

    return 0;
}
