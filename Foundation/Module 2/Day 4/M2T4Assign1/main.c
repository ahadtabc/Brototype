/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={5, 10, 15, 20, 25};
    int length=sizeof(arr)/sizeof(arr[0]);
    int i;

    printf("The OG Array is: ");
    for(i=0;i<length;i++){
        printf("%d ",arr[i]);
    }
    
     printf("\nThe Reversed Array is: ");
    for(i=length-1;i>=0;i--){
        printf("%d ",arr[i]);
    }
    

    return 0;
}