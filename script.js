        function llamaFuncion() {
            // Obtenemos el input por su ID
            const dato = document.getElementById('inputDato').value;
            
            // Insertamos el resultado en el HTML
            document.getElementById('pfoSalida').innerText = dato;
        }

        function calcular() {
            // Obtenemos los valores por su ID
            const num1 = parseFloat(document.getElementById('inputNum1').value);
            const num2 = parseFloat(document.getElementById('inputNum2').value);
            
            if (!isNaN(num1) && !isNaN(num2)) {
                
                const suma = num1 + num2;
                const resta = num1 - num2;
                const multiplicacion = num1 * num2;
                const division = num1 / num2;
                const coseno = Math.cos(num1);
                const seno = Math.sin(num1);    

                // Mostramos los resultados en la consola (Herramientas de desarrollador / Inspeccionar)
                console.log("=== Resultados ===");
                console.log("Suma:", suma);
                console.log("Resta:", resta);
                console.log("Multiplicación:", multiplicacion);
                console.log("División:", division);
                console.log("Coseno:", coseno);
                console.log("Seno:", seno);

                // Insertamos los resultados en el HTML por sus IDs
                document.getElementById('divSalidaSuma').innerText = "Suma: " + suma;
                document.getElementById('divSalidaResta').innerText = "Resta: " + resta;
                document.getElementById('divSalidaMultiplica').innerText = "Multiplicación: " + multiplicacion;
                document.getElementById('divSalidaDivision').innerText = "División: " + division;
                document.getElementById('divSalidaCoseno').innerText = "Coseno: " + coseno;
                document.getElementById('divSalidaSeno').innerText = "Seno: " + seno;
            } else {
                alert("Por favor ingresa números válidos.");
            }
        }

        // Asignamos los eventos a los botones (Llamado de funciones)
        document.getElementById('btnLlamaFuncion').addEventListener('click', llamaFuncion);
        document.getElementById('btnCalcular').addEventListener('click', calcular);