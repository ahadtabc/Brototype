/******************************************************************************

Assignment 1.9
Write a C program to delete the smallest element from an 
array: {12, 7, 18, 5, 22, 9, 14}.

The Array is:     12 7 18 5 22 9 14 
Updated Array is: 12 7 18 22 9 14 
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={12, 7, 18, 5, 22, 9, 14};
    int n= sizeof(arr)/sizeof(arr[0]);
    int i,j,smallest=0;
    
    printf("The Array is:     ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    
    for(i=0; i<n; i++){
      if(arr[i]<arr[smallest]){
          smallest=i;
      }
    }
            for(j=smallest; j<=n-1; j++){
                arr[j]=arr[j+1];
            }
            n--;
          
            
        
    
    
    
    
    printf("\nUpdated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

    return 0;
}