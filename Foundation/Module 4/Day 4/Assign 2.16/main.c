/******************************************************************************

Assignment 2.16
Write a C program to delete two elements after every odd number. 
Array: {5, 10, 15, 8, 7, 20, 9, 12, 18}.

The OG Array is: 5 10 15 8 7 20 9 12 18 
Updated Array is: 5 8 7 12 18 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 15, 8, 7, 20, 9, 12, 18};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,k;
    
    
    printf("The OG Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);

     for(i=0; i<n; i++){
         if(arr[i]%2!=0){
             for(k=0; k<2; k++){
                 if(i+1<n){
                for(j=i+1; j<n-1;j++){
                    arr[j]=arr[j+1];
                } 
                n--;
                 }
             }
         }
     }
     
       printf("\n Updated Array is: ");
    for(i=0; i<n; i++)
    printf("%d ",arr[i]);
    return 0;
}