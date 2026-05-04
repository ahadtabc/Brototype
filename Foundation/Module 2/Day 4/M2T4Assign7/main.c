/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30, 10};
    int size=sizeof(arr)/sizeof(arr[0]);
    int i,j,flag;
    
    printf("The Array is : ");
        for(i=0;i<size;i++){
            printf("%d ",arr[i]);
        }

       printf("\nThe Duplicated elements in Array is : ");
        for(i=0; i<size; i++){
               flag=0;
                for(j=0; j<i; j++){
                    if(arr[i]==arr[j]){
                    flag=1;
                    break;
                      
                }
            }
            if(flag){
                continue;
            }
            
           for(int k=i+1;k<size;k++){
               if(arr[i]==arr[k]){
                   printf("%d ",arr[i]);
                   break;
               }
           } 
        }
    return 0;
}

