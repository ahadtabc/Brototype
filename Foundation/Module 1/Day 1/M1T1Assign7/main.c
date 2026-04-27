/******************************************************************************

Welcome to GDB Online.
  GDB online is an online compiler and debugger tool for C, C++, Python, PHP, Ruby, 
  C#, OCaml, VB, Perl, Swift, Prolog, Javascript, Pascal, COBOL, HTML, CSS, JS
  Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
#include <stdio.h>

int main()
{   
    float numA,numB,result;
    int choice;
    printf("Enter Two Numbers:\n");
    scanf("%f%f",&numA,&numB);
    
    printf("Select below:\n 1.Add\n 2.Subtract\n 3.Multiple\n 4.Divide \n");
    scanf("%d",&choice);
    switch (choice){
        case 1:
        result=numA+numB;
        printf("The Addition is %.2f",result);
        break;
        
         case 2:
        result=numA-numB;
        printf("The Subtraction is %.2f",result);
        break;
        
         case 3:
        result=numA*numB;
        printf("The Multiple is %.2f",result);
        break;
        
        case 4:
        if (numB !=0 && numA !=0){
             result=numA/numB;
        printf("The Division is %.2f",result);
        }
        else{
            printf("Error!,Zero allowed");
        }
      
        break;
        
        default:
        printf("Invalid Cmd,Please Try Again");
        
    }
    return 0;
}