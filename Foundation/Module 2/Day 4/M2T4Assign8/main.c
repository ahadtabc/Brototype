/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int arr[] = {12, 7, 18, 9, 24, 11, 9, 7};
    int n = sizeof(arr) / sizeof(arr[0]);
    int visited[n];
    int count ,i,j;

    printf("The Array is :");
    for(i=0;i<n;i++){
        printf("%d ",arr[i]);
    }
    
    for (i = 0; i < n; i++) {
        visited[i] = 0;
    }

    printf("\nFrequency of odd numbers:\n");

    for (i = 0; i < n; i++) {

        if (arr[i] % 2 != 0 && visited[i] == 0) {
           count = 1; 

            for (j = i + 1; j < n; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                    visited[j] = 1;
                }
            }
            printf("Number %d: %d times\n", arr[i], count);
        }
    }

    return 0;
}
