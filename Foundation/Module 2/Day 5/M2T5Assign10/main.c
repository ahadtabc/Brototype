/******************************************************************************

Write a C program to merge two unsorted arrays and remove 
all duplicates: arr1 = {10, 20, 30}, arr2 = {20, 40, 30}.


*******************************************************************************/
#include <stdio.h>

int main()
{   int arr1[] = {10, 20, 30}, arr2[]= {20, 40, 30};
    int n1=sizeof(arr1)/sizeof(arr1[0]);
    int n2=sizeof(arr2)/sizeof(arr2[0]);
    int n3=n1+n2;
    int i,arr3[n3];
    int freq[100]={0};
    
    for(i=0;i<n1;i++){
        arr3[i]=arr1[i];
    }
    
    for(i=0;i<n2;i++){
        arr3[n1+i]=arr2[i];
    }
    
    
    printf("\nRemove Duplicated and Merge 2 Arrays: ");
    for(i=0;i<n3;i++){
        int merge=arr3[i];
    if(freq[merge]==0){
        printf("%d ",merge);
        freq[merge]=1;
    }
    }

    return 0;
}
