/******************************************************************************

Assignment 2.19
Write a C program to sort an array and count the number of unique elements. 
Array: {4, 5, 4, 6, 6, 7, 8}.


*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={4, 5, 4, 6, 6, 7, 8};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i,j,temp;
    int count=1;

    printf("The OG Array is: ");
    for(i=0; i<n; i++)
        printf("%d ",arr[i]);

  
    for(i=0; i<n-1; i++)
    {
        for(j=i+1; j<n; j++)
        {
            if(arr[i]>arr[j])
            {
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }

    printf("\nSorted Array is: ");
    for(i=0; i<n; i++)
        printf("%d ",arr[i]);

   
    for(i=1; i<n; i++)
    {
        if(arr[i]!=arr[i-1])
        {
            count++;
        }
    }

    printf("\nNumber of unique elements: %d",count);

    return 0;
}
    
  
