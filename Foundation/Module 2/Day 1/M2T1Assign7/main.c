/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   
    int arr[5]={3, 6, 9, 12, 15};
    
    printf("Even Indices like : ");
    
    for(int i=0;i<5;i++){
        if(i%2==0){
            printf("%d, ",arr[i]);
        }
    }

    return 0;
}
