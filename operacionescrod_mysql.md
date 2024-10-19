# Operaciones CRUD en MySQL
Las operaciones *CRUD* son un conjunto de 4 operaciones fundamentales en el manejo de bases de datos. CRUD es 
un acronimo que presenta las siguientes operaciones.

1. **C**reate (Crear)
2. **R**ead (Leer)
3. **U**pdate (Actualizar)
4. **D**elete (eliminar)

**Primero creamos una tabla:**
```sql
CREATE TABLE USUARIOS;
id_Usuario INT PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(100) UNIQUE NOT NULL CHECK(email LIKE "%_@_%._%"),
password VARCHAR(15) NOT NULL CHECK(LENGTH(password)>=8);
```
## **CREATE** 
La operación crear es responsable de insertar nuevos datos en la base de datos. En MySQL, esto se realiza con la sentencia `INSERT INTO` o `INSERT`. El proposito de la operación es añadir el nuevo registro o fila en una tabla.

```sql
-- Ejemplo de la insercón valida usando todos los carateres --
INSERT INTO USUARIOS VALUES (1, "lucio@gmail.com", "12345678");

--Ejemplo de una insercón valida usando el comando DEFAULT--
INSERT INTO USUARIOS VALUES (DEFAULT "ejemplo1@gmail.com", "abcdefgh");

-- Ejemplo de una inserción sin incluir el id_usuario--
INSERT USUARIOS(email, password) VALUE ("ejemplo2@gmail.com","1a2b3c4d");
```
### ***Ejercicio***
Identifica los errores que pueden salir con esta tabla e inserta 4 registros nuevos en un solo INSERT:
```sql
INSERT INTO USUARIO VALUES (1, "lucio@gmail.com", "12345678");

INSERT INTO USUARIOS VALUES (DEFAULT "ejemplo1gmail.com", "abcdefgh");

INSERT USUARIOS(email, password) VALUE ("ejemplo2@gmail.com","1a2b3c4dWEFRGTTF");

INSERT INTO USUARIOS VALUES (DEFAULT "ejemplo1@gmailcom" "abcdefgh");

```
## **READ**
La operación leer es utilizada para consultar o recuperar datos de la base de datos. Esto no modifica los datos, simplemente los extrae. En MySQL, esta operación se realiza con la snetencia `SELECT` 
```sql
-- Ejemplo de consulta para todos los datos de una tabla
-- * Indica de una tabla 
SELECT*FROM USUARIOS;
-- Ejemplo de consulta para un registro en especifico a traves del id 
-- WHERE condición 
SELECT*FROM USUARIOS WHERE id_Usuario = 1;
-- Ejemplo de consulta para un registro con un email en especifico
SELECT*FROM USUARIOS WHERE email = "ejemplo1@gmail.com";
-- Ejemplo de consulta con solo el campo email
SELECT email FROM USUARIOS;
```  
Ejemplo de consulta con un condicional logico:
1. En donde extraiga en la tabla USUARIOS las constraseñas mayores a 9  
```sql
SELECT*FROM USUARIOS WHERE LENGTH(password)>= 9;
```
## **Ejercicio**
1. Realiza una consulta que muesgtre solo el email que coincida
 con una constraseña de mas de 8 caracteres y otra que realice 
```sql
SELECT*FROM USUARIOS WHERE LENGTH (password) > 8;
SELECT*FROM USUARIOS WHERE id_Usuario % 2 = 0;
SELECT*FROM USUARIOS WHERE MOD(id_Usuario,2) = 0;
```
## 3. UPDATE
La operación actualizar se utiliza para modificar registros existentes en la base de datos. Estyo se hace con la sentencia `UPDATE`. Especificamos que datos cambiar y aplicamos condiciones para identificar los registros a actualizar.
```sql
-- Ejemplo para actualizar la constraseña de un usuario con su id
 UPDATE  USUARIOS SET password:"12345xyz"
 WHERE  id_usuario = 12;
 -- Ejemplo para actualizar el email y password de un usuario en especifico 
 WHERE id_usuario = 7;


```
Ejercicio: Intenta actualizar registros con valores que violen las restricciones.

```sql
UPDATE USUARIOS SET password = '12345'
WHERE id_Usuario = 3;

UPDATE USUARIOS SET email = "ejemplo0@gmail.com"
WHERE id_Usuario = 1;

UPDATE USUARIOS SET email = "ejemplogmail.com"
WHERE id_Usuario = 1;

UPDATE USUARIOS SET password = '12345678abcdefgh'
WHERE id_Usuario = 3;
```
## 4. Delete
La operacón *Eliminar* se usa para borrra registros de la bse de datos esto se realiza con la sentencia `DELETE` debemos ser muy cuidadosos con esta operación, ya que una vez que los datos son eliminados no pueden ser recuperados.

```sql
-- Eliminar el usuario por el id:
DELETE FROM USUARIOS WHERE id_Usuario=1;

-- Eliminar los usuarios con el email especifico:
DELETE FROM USUARIOS WHERE email="ejemplo12@gmail.com";

-- Eliminar todos los registros de la tabla:
DELETE FROM USUARIOS;

--Eliminar usuarios cuya contraseña tenga menos de 10 caracteres:
--Length sirve parael largo de los caracteres en una contraseña o en mas cosas.
DELETE FROM USUARIOS WHERE LENGTH(password)<10;
```
## **Ejercicios:**

*REGEXP* : Regular Expresion
```sql
--Eliminar usuarios cuyo email contenga un 1 o mas cincos.

DELETE FROM USUARIOS WHERE email LIKE  '%5%';

--Eliminar usuarios que tengan una contraseña que contengan etras mayusculas.
DELETE FROM USUARIOS WHERE password REGEXP '[A-Z]';

--Eliminar usuarios con contraseñas que contengan solo números.
DELETE FROM USUARIOS WHERE password REGEXP '[0-9]';

--Eliminar usuarios que no tengan el dominio 'gamil'.
DELETE FROM USUARIOS WHERE email LIKE "%_@gmail%._%";
```