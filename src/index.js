import "./css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {} from "bootstrap";

const titulo_modal = document.getElementById("titulo_modal");
const content_modal = document.getElementById("content_modal");

let tactica = document
  .querySelectorAll(".lista_tacticas")
  .forEach((Element) => {
    Element.addEventListener("click", (e) => {
      const elem = e.target.textContent.trim();
      console.log(elem);
      switch (elem) {
        case `Ping,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Ping: </p>Se refiere a un par de mensajes de solicitud / respuesta asíncronos intercambiados entre nodos, utilizados para determinar la accesibilidad y el retardo de ida y vuelta a través de la ruta de red asociada. Pero el eco también determina que el componente ping está vivo y responde correctamente. <p>El ping es a menudo enviado por un monitor del sistema.</p> <p>Ping / echo requiere que se establezca un umbral de tiempo; este umbral le dice al componente de ping cuánto tiempo debe esperar el eco antes de considerar que el componente de ping ha fallado ("tiempo de espera").</p> Las implementaciones estándar de ping / echo están disponibles para nodos interconectados a través de IP.`;
          break;

        case `monitor,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Monitor: </p>Un monitor es un componente que se usa para monitorear el estado de salud de varias otras partes del sistema: procesadores, procesos, E / S, memoria, etc. Un monitor del sistema puede detectar fallas o congestiones en la red u otros recursos compartidos, como por ejemplo un ataque de denegación de servicio.
                <p>
                Organiza el software utilizando otras tácticas en esta categoría para detectar componentes que no funcionan correctamente. Por ejemplo, el monitor del sistema puede iniciar las autocomprobaciones o ser el componente que detecta marcas de tiempo defectuosas o latidos cardíacos perdidos
                .</p>`;
          break;

        case `monitor,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Monitor: </p>Un monitor es un componente que se usa para monitorear el estado de salud de varias otras partes del sistema: procesadores, procesos, E / S, memoria, etc. Un monitor del sistema puede detectar fallas o congestiones en la red u otros recursos compartidos, como por ejemplo un ataque de denegación de servicio.
                    <p>
                    Organiza el software utilizando otras tácticas en esta categoría para detectar componentes que no funcionan correctamente. Por ejemplo, el monitor del sistema puede iniciar las autocomprobaciones o ser el componente que detecta marcas de tiempo defectuosas o latidos cardíacos perdidos
                    .</p>`;
          break;

        case `monitor,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Monitor: </p>Un monitor es un componente que se usa para monitorear el estado de salud de varias otras partes del sistema: procesadores, procesos, E / S, memoria, etc. Un monitor del sistema puede detectar fallas o congestiones en la red u otros recursos compartidos, como por ejemplo un ataque de denegación de servicio.
                        <p>
                        Organiza el software utilizando otras tácticas en esta categoría para detectar componentes que no funcionan correctamente. Por ejemplo, el monitor del sistema puede iniciar las autocomprobaciones o ser el componente que detecta marcas de tiempo defectuosas o latidos cardíacos perdidos
                        .</p>`;
          break;

        case `heartbeat,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Heartbeat: </p>es un mecanismo de detección de fallas que emplea un intercambio periódico de mensajes entre un monitor del sistema y un proceso que se está monitoreando. Un caso especial de latidos cardíacos es cuando el proceso que se monitorea periódicamente restablece el temporizador de vigilancia en su monitor para evitar que caduque y, por lo tanto, señala un fallo. 
                            <p>
                            Para los sistemas en los que la escalabilidad es un problema, la sobrecarga de transporte y procesamiento puede reducirse mediante la combinación de mensajes de latido en otros mensajes de control que se intercambian entre el proceso que se monitorea y el controlador del sistema distribuido.
                            .</p>
                            <p>La gran diferencia entre Heartbeat y ping / echo es quién tiene la responsabilidad de iniciar el control de estado: el monitor o el componente en sí.</p>
                            `;
          break;

        case `marca de tiempo,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Marca De Tiempo: </p>Esta táctica se usa para detectar secuencias incorrectas de eventos, principalmente en sistemas de paso de mensajes distribuidos.  
 
                              <p>
                              Se puede establecer una marca de tiempo de un evento asignando el estado de un reloj local al evento inmediatamente después de que ocurra el evento.
                              .</p>
                              <p>También se pueden usar números de secuencia simples para este propósito, si la información de tiempo no es importante.</p>
                              `;
          break;

        case `comprobación de estado,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Comprobación De Estado: </p>verifica la validez o la razonabilidad de operaciones o resultados específicos de un componente.  
     
                                  <p>
                                  Esta táctica generalmente se basa en el conocimiento del diseño interno, el estado del sistema o la naturaleza de la información bajo escrutinio. Es más a menudo empleado en interfaces, para examinar un flujo de información específico.
                                  .</p> `;
          break;

        case `monitoreo de la condición,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Monitoreo De La Condición: </p>Implica verificar las condiciones en un proceso o dispositivo, o validar las suposiciones hechas durante el diseño. Al monitorear las condiciones, esta táctica evita que un sistema produzca un comportamiento defectuoso.   <p>
                                      El cálculo de sumas de comprobación es un ejemplo común de esta táctica. Sin embargo, el monitor debe ser simple (e idealmente demostrable) para garantizar que no introduzca nuevos errores de software. `;
          break;

        case `votación,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Votación: </p>
          <p class="d-inline">
          La realización más común de esta táctica se conoce como triple redundancia modular (TMR), que emplea tres componentes que hacen lo mismo, cada uno de los cuales recibe entradas idénticas, y envía su salida a la lógica de votación, que se utiliza para detectar cualquier inconsistencia entre los Tres estados de salida. Ante una inconsistencia, el elector informa de una falta. También debe decidir qué salida utilizar. Puede dejar que la mayoría gobierne, o elegir un promedio calculado de las salidas dispares. Esta táctica depende fundamentalmente de la lógica de votación, que generalmente se realiza como un singleton simple, rigurosamente revisado y probado, de modo que la probabilidad de error es baja.  
          </p>
        
                                    <p>
                                    Se puede establecer una marca de tiempo de un evento asignando el estado de un reloj local al evento inmediatamente después de que ocurra el evento.</p>
                                    <p>También se pueden usar números de secuencia simples para este propósito, si la información de tiempo no es importante.</p>
                                    `;
          break;

        case `replicación,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Replicación: </p>
            <p class="d-inline">
            Es la forma más simple de votar; Aquí, los componentes son clones exactos el uno del otro.  
            </p>
          
            <p>
            Tener múltiples copias de componentes idénticos puede ser eficaz para proteger contra fallas aleatorias de hardware, pero esto no puede proteger contra errores de diseño o implementación, en hardware o software, porque no hay ninguna forma de diversidad incorporada en esta táctica. </p>  `;
          break;

        case `redundancia funcional,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Redundancia Funcional: </p>
                <p class="d-inline">
                Es una forma de votación destinada a solucionar el problema de fallas de modo común (fallas de diseño o implementación) en componentes de hardware o software. 
                </p>
              
                <p>
                En este caso, los componentes siempre deben proporcionar la misma salida a la misma entrada, pero están diseñados e implementados de manera diversa.  </p>  `;
          break;

        case `redundancia analítica,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Redundancia Analítica: </p>
                <p class="d-inline">
                Permite no solo la diversidad entre las partes privadas de los componentes, sino también la diversidad entre las entradas y salidas de los componentes.   
                </p>
              
                <p>
                Esta táctica tiene la intención de tolerar errores de especificación al usar especificaciones de requisitos separadas. En los sistemas integrados, la redundancia analítica también ayuda cuando es probable que algunas fuentes de entrada no estén disponibles a veces. Por ejemplo, los programas de aviónica tienen múltiples formas de calcular la altitud de la aeronave, como el uso de la presión barométrica, el altímetro de radar y el uso geométrico de la distancia en línea recta y el ángulo de vista hacia abajo de un punto en el suelo.</p>
                <p>
                El mecanismo de votación utilizado con la redundancia analítica debe ser más sofisticado que simplemente permitir que la mayoría gobierne o calcule un promedio simple. Puede que tenga que entender qué sensores son totalmente confiables o no.</p>  `;
          break;

        case `detección de excepciones,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Detección De Excepciones: </p>
                    <p class="d-inline">
                    Se refiere a la detección de una condición del sistema que altera el flujo normal de ejecución. La táctica de detección de excepciones se puede refinar aún más.   
                    </p>`;
          break;

        case `excepciones del sistema,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Excepciones Del Sistema: </p>
                        <p class="d-inline">
                        Variarán de acuerdo con la arquitectura de hardware del procesador empleada e incluirán fallas como la división por cero, fallas de bus y dirección, instrucciones de programas ilegales, etc.   
                        </p>`;
          break;

        case `cercado de parametros,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Cercado De Parametros: </p>
                    <p class="d-inline">
                    incorpora un patrón de datos a priori (como 0xDEADBEEF) colocado inmediatamente después de cualquier parámetro de longitud variable de un objeto. Esto permite la detección en tiempo de ejecución de sobrescribir la memoria asignada para los parámetros de longitud variable del objeto.</p>  `;
          break;

        case `escritura de parametros,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Escritura De Parametros: </p>
                        <p class="d-inline">
                        emplea una clase base que define funciones que agregan, encuentran e iteran sobre los parámetros de mensajes con formato de tipo-longitud-valor (TLV). Las clases derivadas utilizan las funciones de clase base para implementar funciones que proporcionan la tipificación de parámetros de acuerdo con la estructura de cada parámetro.</p> 
                        <p>El uso de la escritura fuerte para generar y analizar mensajes da como resultado una mayor disponibilidad que las implementaciones que simplemente tratan los mensajes como grupos de bytes.</p>

                        <p>Por supuesto, todo diseño implica compensaciones. Cuando emplea la tipificación fuerte, normalmente intercambia una mayor disponibilidad contra la facilidad de evolución.</p>`;
          break;

        case `tiempo de espera,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Tiempo De Espera: </p>
                    <p class="d-inline">
                    Es una táctica que genera una excepción cuando un componente detecta que éste u otro componente no ha cumplido con sus limitaciones de tiempo. Por ejemplo, un componente que espera una respuesta de otro componente puede generar una excepción si el tiempo de espera excede cierto valor.</p>  `;
          break;

        case `auto prueba`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Auto Prueba: </p>
                <p class="d-inline">
                Los componentes (o, más probablemente, los subsistemas completos) pueden ejecutar procedimientos para probar su funcionamiento correcto. Los procedimientos de autoprueba pueden ser iniciados por el propio componente, o invocados de vez en cuando por un monitor del sistema. Esto puede implicar el empleo de algunas de las técnicas que se encuentran en el monitoreo de condiciones, como las sumas de comprobación.</p>  `;
          break;

        case `redundancia activa,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Redundancia Activa: </p>
                    <p class="d-inline">
                    Esto se refiere a una configuración en la que todos los nodos (activos o de reserva redundantes) en un grupo de protección 2 reciben y procesan entradas idénticas en paralelo, lo que permite que las piezas de reserva redundantes mantengan el estado síncrono con los nodos activos. Debido a que el repuesto redundante posee un estado idéntico al procesador activo, puede asumir el control de un componente fallido en cuestión de milisegundos.</p> 
                    <p>
                    El caso simple de un nodo activo y un nodo de repuesto redundante se conoce comúnmente como redundancia 1 + 1 ("uno más uno"). La redundancia activa también se puede usar para la protección de instalaciones, donde los enlaces de red activos y en espera se utilizan para garantizar una conectividad de red de alta disponibilidad
                    </p>
                    `;
          break;

        case `redundancia pasiva,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Redundancia Pasiva: </p>
                        <p class="d-inline">
                        Esto se refiere a una configuración en la que solo los miembros activos del grupo de protección procesan el tráfico de entrada; Uno de sus deberes es proporcionar a los repuestos redundantes actualizaciones periódicas del estado.</p> 
                        <p>
                        Debido a que el estado mantenido por los repuestos redundantes solo está acoplado de manera flexible con el de los nodos activos en el grupo de protección (siendo la holgura del acoplamiento una función del mecanismo de control empleado entre los nodos activos y redundantes), los nodos redundantes se conocen como repuestos calientes. Dependiendo de los requisitos de disponibilidad del sistema, la redundancia pasiva proporciona una solución que logra un equilibrio entre la táctica de redundancia activa más disponible pero más intensiva en cómputo (y costosa) y la táctica de reserva en frío menos disponible pero significativamente menos compleja (que también es significativamente más económica ).
                        </p>
                        `;
          break;

        case `repuesto,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Redundancia Pasiva: </p>
                        <p class="d-inline">
                        La protección en frío se refiere a una configuración en la que los repuestos redundantes de un grupo de protección permanecen fuera de servicio hasta que se produce una conmutación por error, momento en el que se inicia un procedimiento de encendido y reinicio en el repuesto redundante antes de que se ponga en servicio.</p> 
                        <p>
                        Debido a su pobre rendimiento de recuperación, la refrigeración en frío es más adecuada para sistemas que solo tienen requisitos de alta confiabilidad (MTBF) en comparación con aquellos que también tienen requisitos de alta disponibilidad.
                        </p>
                        `;
          break;

        case `manejo de excepciones,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Manejo De Excepciones: </p>
                        <p class="d-inline">
                        Una vez que se ha detectado una excepción, el sistema debe manejar de alguna manera. Lo más fácil que puede hacer es simplemente bloquearse, pero desde luego es una idea terrible desde el punto de vista de la disponibilidad, la facilidad de uso, la capacidad de prueba y el buen sentido. Hay posibilidades mucho más productivas.</p> 
                        <p>
                        El mecanismo empleado para el manejo de excepciones depende en gran medida del entorno de programación empleado, desde códigos de retorno de función simple (códigos de error) hasta el uso de clases de excepción que contienen información útil en la correlación de fallas, como el nombre de la excepción lanzada, el origen de La excepción, y la causa de la excepción lanzada. El software puede usar esta información para enmascarar la falla, generalmente corrigiendo la causa de la excepción y volviendo a intentar la operación.
                        </p>
                        `;
          break;

        default:
          break;
      }
    });
  });
