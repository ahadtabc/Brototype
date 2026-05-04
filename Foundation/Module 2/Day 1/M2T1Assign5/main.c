/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
   
    int arr[5] = {12,8,15,20,9};
    int i;

    printf("The Indices values of even numbers is :");
    for(i=0;i<5;i++){
        if(arr[i]%2==0){
            printf("%d ",i);
        }
    }
    return 0;
}
