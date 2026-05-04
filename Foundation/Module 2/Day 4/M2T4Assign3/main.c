/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 2, 8, 1, 9};
    int length=sizeof(arr)/sizeof(arr[0]);
    int i,j,temp;

    printf("The Array is : ");
    for(i=0;i<length;i++){
        printf("%d ",arr[i]);
    }
        
    for(i=0;i<length;i++){
        for(j=i+1;j<length;j++){
            if(arr[i]>arr[j]){
                
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    
    printf("\nThe Sorted Array is : ");
    for(i=0;i<length;i++){
        printf("%d ",arr[i]);
    }
    
    return 0;
}