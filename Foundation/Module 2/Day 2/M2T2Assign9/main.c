/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=6,flag,i,j;
    int arr[]={7, 12, 13, 18, 11, 20};
    
    printf("The Array is: ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
     for(int i=0;i<size;i++){
         flag=1;
        if(arr[i]<2){
            flag=0;
        }else{
            for(j=2;j<=arr[i]/2;j++){
                if(arr[i]%j==0){
                    flag=0;
                    break;
                }
            }
        }
        
        
        if(flag==1){
            arr[i]=-1;
        }
        }

       
    printf("\nUpdated Array : ");
    for (i=0; i<size; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}
