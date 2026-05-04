/******************************************************************************

Write a C program to delete repeating 
elements from an array: {10, 15, 10, 20, 15, 30, 10}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30, 10};
    int n=sizeof(arr)/sizeof(arr[0]);
    int freq[100]={0};
    
    printf("The OG Array is: ");
    for(int i=0;i<n;i++){
    printf("%d ",arr[i]);
    }
    
    
    printf("\nWithout Repeating Elemets: ");
    for(int i=0;i<n;i++){
       if(freq[arr[i]] == 0){
            printf("%d ", arr[i]);
        
            freq[arr[i]] = 1;
        }
    }
    return 0;
}
