/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=7,i,j,flag;
     int arr[]={7, 12, 13, 18, 11, 20, 9};
     
    printf("The Array is :");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    for(i=0;i<size;i++){
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
        for(j=i;j<size-1;j++){
            arr[j]=arr[j+1];
        }
        size--;
        i--;
        }
    }
    
    printf("\nThe Updated Array is without Prime :");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    return 0;
}
