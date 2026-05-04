/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=7,i,j;
    int arr[]={10, 15, 8, 21, 30, 9, 12};
    
    printf("The Array is : ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
        for(i=0;i<size;i++){
            if(arr[i]%2==1){
                for(j=i;j<size-1;j++){
                    arr[j]=arr[j+1];
                }
                size--;
                i--;
            }
        }
        
     printf("\nUpdated Array is : ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    return 0;
}
