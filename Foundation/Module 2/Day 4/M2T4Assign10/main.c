/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int n = sizeof(arr) / sizeof(arr[0]);
    int isUnique = 1; 

    for (int i = 0; i < n; i++) {
        for(int j=i+1; j<n ;j++){
            if(arr[i]==arr[j]){
                isUnique=0;
                break;
            }
        }
        
        if (isUnique == 0) break;
    }

    if (isUnique) {
        printf("All elements are unique.\n");
    } else {
        printf("The array contains duplicate elements.\n");
    }

    return 0;
}
