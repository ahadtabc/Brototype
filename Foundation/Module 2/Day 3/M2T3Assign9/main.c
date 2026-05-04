/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=9,i,j,k;
    int arr[]={5, 10, 15, 8, 7, 20, 9, 12, 18};

    printf("The Array is: ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0;i<size;i++){
        if(arr[i]%2!=0){
            for(k=0;k<2;k++){
             if(i+1<size){
                 for(j=i+1;j<size-1;j++){
                     arr[j]=arr[j+1];
                     }
                     size--;
                 
                 }
        }   }
    }

    printf("\nThe Updated Array is: ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }   
    return 0;

}

