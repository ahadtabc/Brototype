/******************************************************************************

     A
    ABC
   ABCDE
  ABCDEFG
 ABCDEFGHI

*******************************************************************************/

#include <stdio.h>

int main()
{
    int i,j,k,n=5;
    char alpha=64;
    for(i=1; i<=n; i++){
        for(k=i; k<=n; k++){
            printf(" ");
        }
         for(j = 1; j <= (i*2)-1; j++) {
            printf("%c",alpha+j);
            
        }
        
    printf("\n");
    }

    return 0;
}