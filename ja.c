#include <stdio.h>

int main() {
    int num, i;

    printf("Ingresa un número para ver su tabla de multiplicar:\n");
    scanf("%d", &num);

    for (i = 1; i <= 10; i++) {
        printf("%d x %d = %d\n", num, i, num * i);
    }

    return 0;
}
