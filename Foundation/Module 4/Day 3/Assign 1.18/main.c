/******************************************************************************

Assignment 1.18
Write a C program to identify and print all duplicate elements 
in an array: {10, 15, 10, 20, 15, 30, 10}.

The Array is: 10 15 10 20 15 30 10 
Duplicate elements in Array is: 10 15 
Duplicate No of elements is 2 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30, 10};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,k,count=0,already=0;
    
    
    printf("The Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    
        printf("\nDuplicate elements in Array is: ");
     for(i=0; i<n; i++){
         already=0;
         
        for(k=0; k<i; k++){
            if(arr[i]==arr[k]){
                already=1;
                break;
            }
        }
            if(already==1)continue;
     
         for(j=i+1; j<n; j++){
             if(arr[i]==arr[j]){
                printf("%d ",arr[i]);
                 count++;
                 break;
             }
         }
         
     }
     
  
 
     printf("\nDuplicate No of elements is %d ",count);
    
    return 0;
}