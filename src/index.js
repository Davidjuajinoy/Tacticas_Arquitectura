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

        case `retroceso,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Retroceso: </p>
                        <p class="d-inline">
                        Permite que el sistema vuelva a un estado bueno conocido anteriormente, conocido como la "línea de retroceso" (retroceso) en el momento de la detección de un fallo. Una vez que se alcanza el buen estado, entonces la ejecución puede continuar.</p> 
                        <p>
                        Esta táctica a menudo se combina con tácticas de redundancia activa o pasiva, de modo que después de que se haya producido una reversión, una versión en espera del componente fallido pase a estado activo. La reversión depende de que una copia de un buen estado anterior (un punto de control) esté disponible para los componentes que están retrocediendo. Los puntos de control se pueden almacenar en una ubicación fija y actualizar a intervalos regulares, o en momentos convenientes o significativos en el procesamiento, como al completar una operación compleja.
                        </p>
                        `;
          break;

        case `actualización de software,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Actualización De Software: </p>
                        <p class="d-inline">
                        otra táctica de preparación y reparación cuyo objetivo es lograr actualizaciones en servicio de imágenes de código ejecutables de una manera que no afecte al servicio. Esto se puede realizar como un parche de función, un parche de clase o una actualización de software en servicio (ISSU) sin éxito. Un parche de función se usa en la programación de procedimientos y emplea un enlazador / cargador incremental para almacenar una función de software actualizada en un segmento asignado previamente de la memoria de destino.</p> 
                        <p>
                        La nueva versión de la función de software empleará los puntos de entrada y salida de la función en desuso. Además, al cargar la nueva función de software, la tabla de símbolos debe actualizarse y la memoria caché de instrucciones debe invalidarse. La táctica de parche de clase es aplicable para objetivos que ejecutan código orientado a objetos, donde las definiciones de clase incluyen un mecanismo de puerta trasera que permite la adición en tiempo de ejecución de los datos y funciones de los miembros.tácticas de redundancia para lograr actualizaciones que no afecten al servicio del software y el esquema asociado. En la práctica, el parche de función y el parche de clase se usan para entregar correcciones de errores, mientras que la actualización de software en servicio sin problemas se usa para entregar nuevas características y capacidades.
                        </p>
                        `;
          break;

        case `reintentar,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Reintentar: </p>
                          <p class="d-inline">
                          La táctica de reintento asume que la falla que causó el fallo es transitoria y el reintento de la operación puede llevar al éxito. </p> 
                          <p>
                          Esta táctica se usa en redes y en granjas de servidores donde se esperan fallas y son comunes. Debe haber un límite en el número de reintentos que se intentan antes de que se declare una falla permanente.
                          </p>
                          `;
          break;

        case `ignorar comportamiento defectuoso,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Ignorar Comportamiento Defectuoso: </p>
                              <p class="d-inline">
                              Esta táctica requiere ignorar los mensajes enviados desde una fuente particular cuando determinamos que esos mensajes son falsos. Por ejemplo, nos gustaría ignorar los mensajes de un componente externo que lanza un ataque de denegación de servicio al establecer filtros de la Lista de control de acceso.</p>         
                              `;
          break;

        case `degradación,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Degradación: </p>
                                  <p class="d-inline">
                                  mantiene las funciones más críticas del sistema en presencia de fallas de componentes, eliminando funciones menos críticas.</p> 
                                  <p>
                                  Esto se hace en circunstancias en las que los fallos de componentes individuales reducen con gracia la funcionalidad del sistema en lugar de causar un fallo completo del sistema.
                                  </p>
                                  `;
          break;

        case `reconfiguración,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Reconfiguración: </p>
                                      <p class="d-inline">
                                      intenta recuperarse de las fallas de los componentes al reasignar responsabilidades a los recursos (potencialmente restringidos) que dejaron de funcionar, mientras se mantiene la mayor funcionalidad posible.</p>
                                      `;
          break;

        case `reintroducción (táctica de la sombra, resincronización de estados, reinicio de escalada, reenvió directo)`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Reintroducción: </p>
                                        <p class="d-inline">
                                        es cuando un componente fallado se reintroduce después de que se haya corregido. Las tácticas de reintroducción incluyen lo siguiente:</p>
                                        </br></br>


                                        <p class="fw-bold d-inline">
                                        La Táctica De La Sombra: </p>
                                        <p class="d-inline">Se refiere a la operación de un componente previamente fallado o en servicio actualizado en un "modo sombra" durante un tiempo predefinido antes de revertir el componente a un rol activo. Durante este tiempo, su comportamiento puede ser monitoreado para ver si es correcto y puede repoblar su estado de manera incremental</p>

                            </br></br>
                                        <p class="fw-bold d-inline">
                                        Resincronización De Estados: </p>
                                        <p class="d-inline">Es un socio de reintroducción de las tácticas de preparación y reparación de redundancia activa y redundancia pasiva. Cuando se usa junto con la táctica de redundancia activa, la resincronización de estado se produce de manera orgánica, ya que los componentes activos y en espera reciben y procesan entradas idénticas en paralelo. En la práctica, los estados de los componentes activos y en espera se comparan periódicamente para garantizar la sincronización. </p>
                                        <p>
                                        Esta comparación puede basarse en un cálculo de comprobación de redundancia cíclica (suma de comprobación) o, para sistemas que proporcionan servicios críticos para la seguridad, un cálculo de resumen de mensaje (una función hash de una vía). Cuando se usa junto con la táctica de redundancia pasiva (repuesto dinámico), la resincronización de estado se basa únicamente en la información de estado periódico transmitida desde el (los) componente (s) activo (s) al (los) componente (s) en espera (s), generalmente a través del punto de control.</p>
                                        
                                        <p class="fw-bold d-inline">Reinicio De Escalada:</p> 
                                        <p class="d-inline">una táctica de reintroducción que permite al sistema recuperarse de fallas al variar la granularidad de los componentes reiniciados y minimizar el nivel de servicio afectado. Por ejemplo, considere un sistema que admite cuatro niveles de reinicio, de la siguiente manera. El nivel más bajo de reinicio (llámelo Nivel 0) y, por lo tanto, que tiene el menor impacto en los servicios, emplea redundancia pasiva (repuesto dinámico), donde se eliminan y recrean todos los subprocesos secundarios del componente defectuoso.</p>
                                        <p>
                                        De esta manera, solo los datos asociados con los subprocesos secundarios se liberan y reinicializan. El siguiente nivel de reinicio (Nivel 1) libera y reinicializa toda la memoria desprotegida (la memoria protegida permanecería intacta). El siguiente nivel de reinicio (Nivel 2) libera y reinicializa toda la memoria, tanto protegida como desprotegida, lo que obliga a todas las aplicaciones a recargarse y reinicializarse. Y el nivel final de reinicio (Nivel 3) implicaría volver a cargar completamente y reinicializar la imagen ejecutable y los segmentos de datos asociados. El soporte para la táctica de reinicio escalado es particularmente útil para el concepto de degradación elegante, donde un sistema puede degradar los servicios que proporciona al tiempo que mantiene el soporte para aplicaciones de misión crítica o de seguridad.</p>
                                        
                                        <p class="fw-bold d-inline">El Reenvío Directo (NSF):</p>
                                        <p class="d-inline">es un concepto que se originó en el diseño del enrutador. En este diseño, la funcionalidad se divide en dos partes: supervisión, o plano de control (que administra la conectividad y la información de enrutamiento), y plano de datos (que realiza el trabajo real de enrutar paquetes desde el remitente hasta el receptor).</p>
                                        <p>
                                        Si un enrutador experimenta la falla de un supervisor activo, puede continuar enviando paquetes a lo largo de rutas conocidas, con enrutadores vecinos, mientras se recupera y valida la información del protocolo de enrutamiento. Cuando se reinicia el plano de control, implementa lo que a veces se denomina “reinicio correcto”, reconstruyendo de forma incremental su base de datos de protocolo de enrutamiento incluso cuando el plano de datos continúa operando.
                                        </p>
                                        `;
          break;

        case `retiro del servicio,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Retiro Del Servicio: </p>
                            <p class="d-inline">
                            Se refiere a colocar temporalmente un componente del sistema en un estado fuera de servicio con el fin de mitigar posibles fallas del sistema. </p> 
                            <p>
                            Un ejemplo consiste en poner fuera de servicio un componente de un sistema y reiniciarlo para eliminar fallas latentes (por ejemplo,como fugas de memoria, fragmentación o errores de software en un caché no protegido) antes de que la acumulación de fallas afecte el servicio (lo que resulta en una falla del sistema). Otro término para esta táctica es el rejuvenecimiento del software.
                            </p>
                            `;
          break;

        case `transacciones,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Transacciones: </p>
                                <p class="d-inline">
                                Los sistemas dirigidos a servicios de alta disponibilidad aprovechan la semántica transaccional para garantizar que los mensajes asíncronos intercambiados entre componentes distribuidos sean atómicos , coherentes , aislados y duraderos . </p> 
                                <p>
                                Estas cuatro propiedades se denominan "propiedades ACID". La realización más común de la táctica de transacciones es el protocolo de "compromiso en dos fases" (también conocido como 2PC). Esta táctica evita las condiciones de carrera causadas por dos procesos que intentan actualizar el mismo elemento de datos.
                                </p>
                                `;
          break;

        case `modelo predictivo,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Modelo Predictivo: </p>
                                    <p class="d-inline">
                                    Un modelo predictivo, cuando se combina con un monitor, se emplea para monitorear el estado de salud de un proceso del sistema para asegurar que el sistema está operando dentro de sus parámetros operativos nominales, y para tomar medidas correctivas cuando se detectan condiciones que predicen un futuro probable. </p> 
                                    <p>
                                    Faltas Las métricas de rendimiento operacional monitoreadas se utilizan para predecir la aparición de fallas; los ejemplos incluyen la tasa de establecimiento de sesión (en un servidor HTTP), el cruce de umbrales (monitoreo de marcas de agua altas y bajas para algunos recursos compartidos restringidos), o el mantenimiento de estadísticas para el estado del proceso (en servicio, fuera de servicio, en mantenimiento, inactivo), mensaje estadísticas de longitud de cola, y así sucesivamente.
                                    </p>
                                    `;
          break;

        case `prevención de excepciones,`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Prevención De Excepciones: </p>
                                        <p class="d-inline">
                                        Se refiere a las técnicas empleadas con el fin de evitar que ocurran excepciones al sistema. El uso de clases de excepción, que permite que un sistema se recupere de forma transparente de las excepciones del sistema, se trató anteriormente. </p> 
                                        <p>
                                        Otros ejemplos de prevención de excepciones incluyen tipos de datos abstractos, como punteros inteligentes y el uso de envoltorios para evitar fallas, como punteros colgantes y violaciones de acceso a semáforos. Los punteros inteligentes previenen las excepciones al realizar la comprobación de los límites de los punteros y al garantizar que los recursos se desasignen automáticamente cuando no se hace referencia a los datos. De esta manera se evitan las fugas de recursos.
                                        </p>
                                        `;
          break;

        case `aumentar conjunto de competencias`:
          titulo_modal.textContent = "Tácticas De Disponibilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Aumentar Conjunto De Competencias: </p>
                                            <p class="d-inline">
                                            El conjunto de competencias de un programa es el conjunto de estados en los que es "competente" para operar. Por ejemplo, el estado cuando el denominador es cero está fuera del conjunto de competencias de la mayoría de los programas de división. Cuando un componente genera una excepción, está indicando que se ha descubierto que está fuera de su conjunto de competencias; En esencia, no sabe qué hacer y está tirando la toalla. </p> 
                                            <p>
                                            Aumentar el conjunto de competencias de un componente significa diseñarlo para manejar más casos (fallas) como parte de su operación normal. Por ejemplo, un componente que asume que tiene acceso a un recurso compartido puede generar una excepción si descubre que el acceso está bloqueado. Otro componente puede simplemente esperar el acceso o regresar inmediatamente con una indicación de que completará su operación la próxima vez que tenga acceso.
                                            </p>
                                            `;
          break;

        default:
          break;
      }
    });
  });
