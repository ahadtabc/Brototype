/******************************************************************************

Assignment 1.12
Write a C program to Delete TWO elements after every multiple of 5 in 
an array: {5, 10, 7, 8, 20, 7, 25, 12, 30}.

The Array is : 5 10 7 8 20 7 25 12 30 
Updated Array is : 5 7 8 20 25 30 

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 7, 8, 20, 7, 25, 12, 30};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,k;
    
    printf("The Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }

    for(i=0; i<n; i++){
        if(arr[i]%5==0){
            for(k=1; k<2; k++){
               if(i+1<n){ 
            
            for(j=i+1; j<n-1; j++){
                arr[j]=arr[j+1];
            }
            n--;
        }
    }
    }
    }
    printf("\nUpdated Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }
    return 0;
}