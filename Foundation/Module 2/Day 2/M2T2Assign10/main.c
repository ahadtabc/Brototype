/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int size=6, flag,i;
    int arr[100]={5, 8, 13, 18, 7, 20};

    printf("The Array is: ");
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
    
    for(int i=0;i<size;i++){
        flag=1;
        if(arr[i]<2){
            flag=0;
        }else{
            for(int j=2;j<=arr[i]/2;j++){
                if(arr[i]%j==0){
                    flag=0;
                    break;
                }
            }
        }
    
    if(flag ==1){
        arr[i]=0;
    }
    
    else if(arr[i]%2==0){
        arr[i]=1;
    }
    }
    printf("\nUpdated Array : ");
    for (i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }

    return 0;
}



