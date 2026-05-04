/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int arr[]={10, 15, 10, 20, 15, 30};
    int size=sizeof(arr)/sizeof(arr[0]);
    int i,j,count;
    
    printf("The Array is :");
        for(i=0;i<size;i++){
            printf("%d ",arr[i]);
        }
    
    printf("\nElements that appear only once : ");
    for(i=0;i<size;i++){
         count=0;
         for(j=0;j<size;j++){
             if(arr[i]=arr[j]){
                 count++;
             }
         }
         
     if(count==1){
         printf("%d ",arr[i]);
     }    
    }
    return 0;
}
