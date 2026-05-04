/******************************************************************************

Write a C program 
to merge two arrays into a single array: arr1 = {10, 20, 30}, arr2 = {40, 50, 60}.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr1[]={10,20,30},arr2[]={40,50,60};
    int n1=sizeof(arr1)/sizeof(arr1[0]);
    int n2=sizeof(arr2)/sizeof(arr2[0]);
    int n3=n1+n2,arr3[n3];
    int i;
    
    printf("\n1st Array: ");
    for(i=0;i<n1;i++){
        printf("%d ",arr1[i]);
    }

     printf("\n2nd Array: ");
    for(i=0;i<n2;i++){
        printf("%d ",arr2[i]);
    }
    
    for(i=0;i<n1;i++){
        arr3[i]=arr1[i];
    }
    
      for(i=0;i<n2;i++){
        arr3[n1+i]=arr2[i];
    }
    
    printf("\nMerged Array is: ");
      for(i=0;i<n3;i++){
       printf("%d ",arr3[i]);
    }
    
    return 0;
}
