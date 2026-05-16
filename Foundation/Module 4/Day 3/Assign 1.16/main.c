/******************************************************************************

Assignment 1.16
Write a C program to count the frequency of each element 
in an array: {4, 5, 4, 6, 6, 7, 8}

The Array is : 4 5 4 6 6 7 8 

- Element Frequencies -

Element 4 appear 2 times
Element 5 appear 1 times
Element 6 appear 2 times
Element 7 appear 1 times
Element 8 appear 1 times
*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={4, 5, 4, 6, 6, 7, 8};
    int n=sizeof(arr)/sizeof(arr[0]);
    int i;
    int freq[100]={0};
 
    
    printf("The Array is : ");
    for(i=0; i<n; i++){
        printf("%d ",arr[i]);
    }
    
    printf("\n\n- Element Frequencies -\n");
    for(i=0; i<n; i++){
        freq[arr[i]]++;
    }
    
    for(i=0; i<100; i++){
        if(freq[i]>0){
                printf("\nElement %d appear %d times",i,freq[i]);
        }
    }
 
    
    return 0;
}