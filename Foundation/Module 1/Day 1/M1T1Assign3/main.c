/*1bytes = 8bit

Data Type       	Memory Size                       Format Specifiers
int	            	2 or 4 bytes	            	        %d
float           	4 bytes			                        %.2f
double	            8 bytes			                         %lf
char            	1 byte			                           %c
void	        	empty	

Sample Program:- */
#include <stdio.h>
int main()
{
    int idNumber = 15; 
printf("ID No: %d \n", idNumber);

    float marks = 75.13;
    printf("Mark: %.2f \n",marks);

    char grade = 'C'; 		/* or  use ASCI Values  char grade = 67;        */
   printf("Grade: %c  \n", grade);
    return 0;
}	
