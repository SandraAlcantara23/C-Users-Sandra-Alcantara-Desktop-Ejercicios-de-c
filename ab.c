int main() {
    int num1, num2, mcd;
    
    printf("Ingrese dos números enteros positivos: ");
    scanf("%d %d", &num1, &num2);
    
    while (num1 != num2) {
        if (num1 > num2)
            num1 -= num2;
        else
            num2 -= num1;
    }
    
    mcd = num1;  // o mcd = num2, ya que en este punto ambos son iguales
    
    printf("El máximo común divisor (MCD) de %d y %d es: %d\n", num1, num2, mcd);
    
    return 0;
}
