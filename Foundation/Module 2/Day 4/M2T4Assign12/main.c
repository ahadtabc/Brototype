/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int arr[] = {10, 15, 10, 20, 15, 30, 25};
    int n = 7,value;
    int freq[100] ={0}; 
    
    for( int i=0;i<n;i++){
        value=arr[i];
        freq[value]++;
    }
    
    
    printf("Diplay Duplicates Only ");
    for (int i = 0; i < n; i++) {
        value = arr[i];
        if(freq[value]>1){
            printf("%d ",value);
        }
    }
        
    return 0;
}