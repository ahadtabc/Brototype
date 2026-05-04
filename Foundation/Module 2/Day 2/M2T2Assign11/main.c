/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=6;
    int arr[100]={10, 15, 8, 21, 30, 9};
    int sum=0;
    
    printf("The Array is : ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }

    for(int i=0;i<size;i++){
        if(arr[i]%2==0){
            arr[i]=1;
        }
        
    }
    for(int i=0;i<size;i++){
       sum=sum+arr[i];
    }
        
     printf("\nThe Updated Array (Even replaced with 1) ");
    for(int i=0;i<size;i++){
       printf("%d ",arr[i]);   
    } 
  
    printf("\nThe Update with Array sum is : %d",sum);
        
    return 0;
}