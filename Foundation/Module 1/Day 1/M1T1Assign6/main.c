/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{
    int mark;
    printf("Enter the Student Mark: ");
    scanf("%d",&mark);
    
    if(mark>=90){
        printf("The Grade is A");
    }
    else if(mark>=80){
         printf("The Grade is B");
    }
    else if(mark>=70){
         printf("The Grade is C");
    }
    else if(mark>=60){
         printf("The Grade is D");
    }
    else    {
         printf("Failed");
    }

    return 0;
}