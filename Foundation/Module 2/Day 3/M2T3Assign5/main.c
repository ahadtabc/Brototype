/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=7,i,j;
    int arr[]={10, 15, 8, 20, 7, 30, 12};
    
    
    printf("The Array is : ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0;i<size;i++){
        if(arr[i]%5==0){
            for(j=i;j<size-1;j++){
            arr[j]=arr[j+1];
        }
        size--;
        i--;
        }
    }
    
    printf("\nThe Updated Array is : ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }

    return 0;
}