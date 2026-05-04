/******************************************************************************

Write a C program to display an array after skipping 
one element next to each multiple of 5. Array: {5, 10, 15, 8, 20, 7, 25, 12, 30}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 15, 8, 20, 7, 25, 12, 30};
    int n=sizeof(arr)/sizeof(arr[0]);
    int k,i,j;
    
    printf("The OG Array is: ");
    for(i=0; i<n ;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0; i<n ;i++){
        if(arr[i]%5==0){
            for(k=0;k<1;k++){
                if(i+1<n){
                    for(j=i+1;j<n-1;j++){
                        arr[j]=arr[j+1];
                    }
                    n--;
                }
            }
        }
    }
    
     printf("\nThe Updated Array is: ");
    for(i=0; i<n ;i++){
        printf("%d ",arr[i]);
    }

    return 0;
}



