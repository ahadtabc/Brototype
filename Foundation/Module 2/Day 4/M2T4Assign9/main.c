/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main() {
    int arr[] = {10, 15, 10, 20, 15, 30};
    int n = sizeof(arr) / sizeof(arr[0]);
 

    printf("The Array is : ");
    for (int i = 0; i < n; i++) {
    printf("%d ",arr[i]);
    }
    
    for (int i = 0; i < n; i++) {
        if(arr[i]==-1)continue;
        
        for(int j=i+1; j<n; j++){
            if(arr[i]==arr[j]){
                arr[j]=-1;
            }
        }
    }

    printf("\nThe Modified Array is : ");
    for (int i = 0; i < n; i++) {
    printf("%d ",arr[i]);
    }

    return 0;
}



