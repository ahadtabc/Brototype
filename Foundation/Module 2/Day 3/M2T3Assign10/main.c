/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>


int main()
{
    int size=7,i;
    int low=0;
    int arr[]={12, 7, 18, 5, 22, 9, 14};
    
    printf("The Array is: ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
         for(i=0;i<size;i++){
            if(arr[i]<arr[low]){
                low=i;
            }
         }
        
        for(i=low;i<size-1;i++){
            arr[i]=arr[i+1];
        }
         
        size--;
        
         printf("\nThe Deleted with lowest element Array is: ");
        for(i=0;i<size;i++){
        printf("%d ",arr[i]);
        }
    return 0;
}
