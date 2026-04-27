/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   
    int day;
    printf(" 1.Monday\n 2.Tuesday\n 3.Wednesday\n 4.Thursday\n 5.Friday\n 6.Saturday\n 7.Sunday\nPlease Select a day below\n");
    scanf("%d",&day);
    switch(day){
        case 1:
        printf("You're Select on Monday");
        break;
        
        case 2:
        printf("You're Select on Tuesday");
        break;
        
        case 3:
        printf("You're Select on Wednesday");
        break;
        
        case 4:
        printf("You're Select on Thursday");
        break;
        
        case 5:
        printf("You're Select on Friday");
        break;
        
        case 6:
        printf("You're Select on Saturday");
        break;
        
        case 7:
        printf("You're Select on Sunday");
        break;
        
        default:
        printf("Invalid Entry,Please Try Again");
    }
    return 0;
}