/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=8,i,j;
    int arr[]={5, 10, 15, 8, 20, 7, 25, 12};

    printf("The Array is : ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0;i<size;i++){
        if(arr[i]%5==0){
                if( i+1 <size){
                    for(j=i+1;j<size-1;j++){
                        arr[j]=arr[j+1];
                    }
                        size--;
                    }
        }
    }
         printf("\nThe Updated Array is : ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    return 0;
}
