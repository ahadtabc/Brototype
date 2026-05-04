/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size =7,i,count=0;
    int arr[100]={10, 15, 8, 21, 30, 9, 12};
    
     printf("The Array is: ");
    for(i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
      printf("\nThe Zero of Even Number in Array : ");
    for(i=0;i<size;i++){
        if(arr[i]%2==1){
            arr[i]=0;
        }
        printf("%d ",arr[i]);
    }
    
    for(i=0;i<size;i++){
        if(arr[i]==0){
            count++;
        }
    }
    
    printf("\nThe Updated Zero's Count is : ");
    
        printf("%d ",count);

    
    return 0;
}
