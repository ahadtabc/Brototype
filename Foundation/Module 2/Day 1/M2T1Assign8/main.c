/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   
   int arr[6]={8, 15, 22, 9, 30, 11};
   int sum=0,i;
    
    for(i=0;i<6;i++){
        if(arr[i]%2==1){
            sum+=arr[i];
        }
    }
    printf("The Sum of Odd numbers is : %d",sum);

    return 0;
}