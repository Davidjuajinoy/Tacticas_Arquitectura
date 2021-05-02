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
      // console.log(elem);
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

        case `gestionar frecuencia de muestreo,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Gestionar Frecuencia De Muestreo: </p>
                                              <p class="d-inline">
                                              Si es posible reducir la frecuencia de muestreo a la que se captura un flujo de datos ambientales, entonces se puede reducir la demanda, generalmente con alguna pérdida de fidelidad. </p> 
                                              <p>
                                              Esto es común en los sistemas de procesamiento de señales donde, por ejemplo, se pueden elegir diferentes códecs con diferentes tasas de muestreo y formatos de datos. Esta elección de diseño se realiza para mantener niveles predecibles de latencia; debe decidir si tener una fidelidad más baja pero un flujo de datos consistente es preferible a perder paquetes de datos.
                                              </p>
                                              `;
          break;

        case `limitar la respuesta al evento,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Limitar La Respuesta Al Evento: </p>
                                              <p class="d-inline">
                                              Usando los eventos discretos llegan al sistema (o elemento) demasiado rápido para ser procesados, entonces los eventos deben ponerse en cola hasta que puedan procesarse. Debido a que estos eventos son discretos, normalmente no es deseable "submuestrearlos".
                                              </p>

                                              <p>
                                              En tal caso, puede elegir procesar eventos solo hasta una tasa máxima establecida, asegurando así un procesamiento más predecible cuando los eventos se procesan realmente. Esta táctica podría ser activada por un tamaño de cola o una medida de utilización del procesador que exceda algún nivel de advertencia. Si adopta esta táctica y no es aceptable perder ningún evento, debe asegurarse de que sus colas sean lo suficientemente grandes como para manejar el peor de los casos. Si, por otro lado, elige eliminar eventos, debe elegir una política para manejar esta situación: ¿Registra los eventos eliminados o simplemente los ignora? ¿Notifica a otros sistemas, usuarios.
                                              </p>
                                              `;
          break;

        case `priorizar eventos,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Priorizar Eventos: </p>
                                                  <p class="d-inline">
                                                  Si no todos los eventos son igual de importantes, puede imponer un esquema de prioridad que clasifique los eventos de acuerdo con lo importante que es atenderlos. Si no hay suficientes recursos disponibles para atenderlos cuando surjan, los eventos de baja prioridad pueden ignorarse. 
                                                  </p>
    
                                                  <p>
                                                  Ignorar eventos consume recursos mínimos (incluido el tiempo) y, por lo tanto, aumenta el rendimiento en comparación con un sistema que atiende todos los eventos todo el tiempo. Por ejemplo, un edificio.El sistema de gestión puede elevar una variedad de alarmas. Las alarmas que amenazan la vida, como las alarmas contra incendios, deben recibir mayor prioridad que las alarmas informativas, ya que una habitación está demasiado fría.
                                                  </p>
                                                  `;
          break;

        case `reducir los gastos generales,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Reducir Los Gastos Generales: </p>
                                                      <p class="d-inline">
                                                      El uso de intermediarios (tan importante para la modificabilidad, aumenta los recursos consumidos en el procesamiento de un flujo de eventos, y así eliminarlos mejora la latencia. Este es un clásico intercambio de modificabilidad / rendimiento.
                                                        </p>
                                                        <p>
                                                        La separación de las preocupaciones, otra pieza clave de la modificabilidad, también puede aumentar la sobrecarga de procesamiento necesaria para dar servicio a un evento si conduce a que un evento sea atendido por una cadena de componentes en lugar de un solo componente. Los costos de conmutación de contexto y de comunicación entre componentes se suman, especialmente cuando los componentes están en nodos diferentes en una red. Una estrategia para reducir la sobrecarga computacional es la ubicación conjunta de recursos.
                                                        
                                                        </p>

        
                                                      <p>
                                                      La ubicación conjunta puede significar alojar componentes que cooperan en el mismo procesador para evitar el retraso de la comunicación de la red; puede significar colocar los recursos en el mismo componente de software de tiempo de ejecución para evitar incluso el gasto de una llamada de subrutina. Un caso especial de reducción de la sobrecarga computacional es realizar una limpieza periódica de los recursos que se han vuelto ineficientes. Por ejemplo, las tablas hash y los mapas de memoria virtual pueden requerir el recálculo y la reinicialización. Otra estrategia común es ejecutar servidores de un solo hilo (para simplificar y evitar la contención) y dividir la carga de trabajo entre ellos.
                                                      </p>
                                                      `;
          break;

        case `tiempos de ejecución,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Tiempos De Ejecución: </p>
                <p class="d-inline">
                Ponga un límite en cuánto tiempo de ejecución se utiliza para responder a un evento. 
                </p>
                <p>
                Para algoritmos iterativos, dependientes de los datos, limitar el número de iteraciones es un método para limitar los tiempos de ejecución. El costo suele ser un cálculo menos preciso. Si adopta esta táctica, deberá evaluar su efecto en la precisión y ver si el resultado es "lo suficientemente bueno".
                </p>


                <p>
                Esta táctica de administración de recursos frecuentemente se combina con la táctica de administración de tasa de muestreo.
                </p>
                `;
          break;

        case `aumentar la eficiencia`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Aumentar La Eficiencia De Los Recursos: </p>
                  <p class="d-inline">
                   Si se Mejora los algoritmos utilizados en áreas críticas disminuirá la latencia.
                  </p>
             
                  `;
          break;

        case `aumentar los recursos,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Aumentar Los Recursos: </p>
                      <p class="d-inline">
                      Los procesadores más rápidos, los procesadores adicionales, la memoria adicional y las redes más rápidas tienen el potencial de reducir la latencia.
     
                      </p>
                      <p>
                      El costo generalmente es una consideración en la elección de recursos, pero aumentar los recursos es definitivamente una táctica para reducir la latencia y, en muchos casos, es la forma más económica de obtener una mejora inmediata.
                      </p>
                      `;
          break;

        case `introducir la concurrencia,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Introducir La Concurrencia: </p>
                          <p class="d-inline">
                          Si las solicitudes se pueden procesar en paralelo, se puede reducir el tiempo bloqueado. Se puede introducir la concurrencia al procesar diferentes flujos de eventos en diferentes subprocesos o al crear subprocesos adicionales para procesar diferentes conjuntos de actividades.
         
                          </p>
            
                          <p>
                          Una vez que se ha introducido la concurrencia, se pueden usar políticas de programación para lograr los objetivos que considere deseables. Las diferentes políticas de programación pueden maximizar la imparcialidad (todas las solicitudes obtienen el mismo tiempo), el rendimiento (el tiempo más corto para finalizar primero) u otros objetivos. (Vea la barra lateral.)
                          </p>
                          `;
          break;

        case `mantener múltiples copias de cómputos,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Mantener Múltiples Copias De Cómputos: </p>
                              <p class="d-inline">
                              Varios servidores en un patrón cliente-servidor son réplicas de cómputo. 
             
                              </p>
                
                              <p>
                              El propósito de las réplicas es reducir la contención que se produciría si todos los cálculos tuvieran lugar en un solo servidor. Un equilibrador de carga es una pieza de software que asigna nuevo trabajo a uno de los servidores duplicados disponibles; los criterios para la asignación varían, pero pueden ser tan simples como el turno redondo o la asignación de la siguiente solicitud al servidor menos ocupado.
                              </p>
                              `;
          break;

        case `mantener múltiples copias de datos,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Mantener Múltiples Copias De Datos: </p>
                                <p class="d-inline">
                                El almacenamiento en caché es una táctica que implica mantener copias de datos (posiblemente uno un subconjunto del otro) en el almacenamiento con diferentes velocidades de acceso. Las diferentes velocidades de acceso pueden ser inherentes (memoria versus almacenamiento secundario) o pueden deberse a la necesidad de comunicación de la red.
               
                                </p>
                  
                                <p>
                                Replicación de datos implica mantener copias separadas de los datos para reducir la contención de múltiples accesos simultáneos. Debido a que los datos que se almacenan en caché o replican generalmente son una copia de los datos existentes, mantener las copias consistentes y sincronizadas se convierte en una responsabilidad que el sistema debe asumir. Otra responsabilidad es elegir los datos a almacenar en caché. Algunos cachés operan simplemente conservando copias de lo que se solicitó recientemente, pero también es posible predecir las solicitudes futuras de los usuarios según los patrones de comportamiento, y comenzar los cálculos o las consultas previas necesarias para cumplir con esas solicitudes antes de que el usuario las haya realizado.
                                </p>
                                `;
          break;

        case `tamaños de cola enlazados,`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Tamaños De Cola Enlazados: </p>
                                <p class="d-inline">
                                Esto controla el número máximo de llegadas en cola y, en consecuencia, los recursos utilizados para procesar las llegadas.
               
                                </p>
                  
                                <p>
                                Si adopta esta táctica, debe adoptar una política para lo que sucede cuando se desbordan las colas y decidir si no es aceptable no responder a los eventos perdidos. Esta táctica se empareja con frecuencia con la táctica de respuesta de evento límite.
                                </p>
                                `;
          break;

        case `programar recursos`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Programar Recursos: </p>
                                    <p class="d-inline">
                                   Siempre que haya una disputa por un recurso, el recurso debe ser programado. Los procesadores están programados, los almacenamientos intermedios están programados y las redes programadas.
                   
                                    </p>
                      
                                    <p>
                                    Su objetivo es comprender las características del uso de cada recurso y elegir la estrategia de programación que sea compatible con él. (Vea la barra lateral.)
                                    </p>
                                    `;
          break;

        case `programar recursos`:
          titulo_modal.textContent = "Tácticas De Rendimiento";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Programar Recursos: </p>
                                        <p class="d-inline">
                                       Siempre que haya una disputa por un recurso, el recurso debe ser programado. Los procesadores están programados, los almacenamientos intermedios están programados y las redes programadas.
                       
                                        </p>
                          
                                        <p>
                                        Su objetivo es comprender las características del uso de cada recurso y elegir la estrategia de programación que sea compatible con él. (Vea la barra lateral.)
                                        </p>
                                        `;
          break;

        case `Descubrir el servicio`:
          titulo_modal.textContent = "Tácticas De Interoperabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Descubrir el servicio: </p>
            <p class="d-inline">
            Localice un servicio mediante la búsqueda de un servicio de directorio conocido. (Por "servicio", simplemente nos referimos a un conjunto de capacidades a las que se puede acceder mediante algún tipo de interfaz).

            </p>

            <p>
            Puede haber múltiples niveles de direccionamiento indirecto en este proceso de ubicación, es decir, una ubicación conocida apunta a otra ubicación que a su vez puede ser Buscó el servicio. El servicio se puede ubicar por tipo de servicio, por nombre, por ubicación o por algún otro atributo.
            </p>
            `;
          break;

        case `orquestar`:
          titulo_modal.textContent = "Tácticas De Interoperabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Orquestar: </p>
              <p class="d-inline">
              es una táctica que utiliza un mecanismo de control para coordinar, gestionar y secuenciar la invocación de servicios particulares (que podrían ignorarse entre sí).
  
              </p>
  
              <p>
              La orquestación se utiliza cuando los sistemas interoperables deben interactuar de manera compleja para realizar una tarea compleja; Orquestación “scripts” de la interacción. 
              </p><p>Los motores de flujo de trabajo son un ejemplo del uso de la táctica orquestada. El patrón de diseño del mediador puede cumplir esta función para una orquestación simple. La orquestación compleja se puede especificar en un lenguaje como BPEL.</p>
              `;
          break;

        case `adaptar la interfaz`:
          titulo_modal.textContent = "Tácticas De Interoperabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Adaptar La Interfaz: </p>
                  <p class="d-inline">
                  La interfaz Tailor es una táctica que agrega o elimina capacidades a una interfaz. Se pueden agregar capacidades como traducción, adición de búferes o suavizado de datos. Las capacidades también pueden ser eliminadas. 
                  
      
                  </p>
      
                  <p>
                  Un ejemplo de eliminación de capacidades es ocultar funciones particulares de usuarios no confiables. El patrón de decorador es un ejemplo de la táctica de interfaz de sastre.
                  El bus de servicio empresarial que subyace a muchas arquitecturas orientadas a servicios combina ambas tácticas de interfaz de administración.
                  </p>
                  `;
          break;

        case `Split módulo`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Split Módulo: </p>
                      <p class="d-inline">
                      módulo . Si el módulo que se está modificando incluye una gran
                      capacidad, los costos de modificación probablemente serán altos. La
                      
                      refinación del módulo en varios módulos más pequeños debería reducir
                      el costo promedio de los cambios futuros.</p>
                      `;
          break;

        case `Incrementar la coherencia semántica`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Incrementar La Coherencia Semántica: </p>
                        <p class="d-inline">
                        Si las responsabilidades A y B en un módulo no tienen el mismo propósito, deben ubicarse en módulos diferentes. Esto puede implicar la creación de un nuevo módulo o la transferencia de una responsabilidad a un módulo existente. 
                        
            
                        </p>
            
                        <p>
                        Un método para identificar las responsabilidades que se deben mover es formular hipótesis de posibles cambios que afectan a un módulo. Si algunas responsabilidades no se ven afectadas por estos cambios, entonces esas responsabilidades probablemente deberían eliminarse.
                        </p>
                        `;
          break;

        case `encapsular,`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Encapsular: </p>
                            <p class="d-inline">
                            La encapsulación introduce una interfaz explícita a un módulo. Esta interfaz incluye una interfaz de programación de aplicaciones (API) y sus responsabilidades asociadas, como "realizar una transformación sintáctica en un parámetro de entrada a una representación interna". Tal vez la táctica de modificabilidad más común, la encapsulación reduce la probabilidad de que se propague un cambio en un módulo. a otros módulos. Las fortalezas de acoplamiento que anteriormente correspondían al módulo ahora van a la interfaz del módulo. 
                            
                
                            </p>
                
                            <p>
                            Sin embargo, estas fortalezas se reducen porque la interfaz limita las formas en que las responsabilidades externas pueden interactuar con el módulo (quizás a través de una envoltura). Las responsabilidades externas ahora solo pueden interactuar directamente con el módulo a través de la interfaz expuesta (interacciones indirectas, sin embargo, como la dependencia de la calidad del servicio, probablemente permanecerá sin cambios). Las interfaces diseñadas para aumentar la modificabilidad deben ser abstractas con respecto a los detalles del módulo que pueden cambiar, es decir, deben ocultar esos detalles. 
                            </p>
                            `;
          break;

        case `utilizar un intermediario,`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Utilizar Un Intermediario: </p>
                                <p class="d-inline">
                                Rompe una dependencia y dada una dependencia entre la responsabilidad A y la responsabilidad B (por ejemplo, llevar a cabo A primero requiere llevar a cabo B), la dependencia se puede romper utilizando un intermediario. El tipo de intermediario depende del tipo de dependencia. Por ejemplo, un intermediario de publicación / suscripción eliminará el conocimiento del productor de datos de sus consumidores. 
                    
                                </p>
                    
                                <p>
                                También lo hará un repositorio de datos compartido, que separa a los lectores de una parte de los datos de los escritores de esos datos. En una arquitectura orientada a servicios en la que los servicios se descubren entre sí mediante una búsqueda dinámica, el servicio de directorio es un intermediario.
                                </p>
                                `;
          break;

        case `restringir dependencias,`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Restringir Dependencias: </p>
                                    <p class="d-inline">
                                    es una táctica que restringe los módulos con los que un módulo determinado interactúa o depende de ellos. En la práctica, esta táctica se logra al restringir la visibilidad de un módulo (cuando los desarrolladores no pueden ver una interfaz, no pueden emplearla) y por autorización (restringiendo el acceso solo a los módulos autorizados). 
                        
                                    </p>
                        
                                    <p>
                                    Esta táctica se ve en arquitecturas en capas, en las que una capa solo puede usar capas inferiores (a veces solo la siguiente capa inferior) y en el uso de envoltorios, donde las entidades externas solo pueden ver (y, por lo tanto, depender de) la envoltura y no La funcionalidad interna que envuelve.
                                    </p>
                                    `;
          break;

        case `refactorización,`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Refactorización: </p>
                                        <p class="d-inline">
                                        es una táctica que se realiza cuando dos módulos se ven afectados por el mismo cambio porque son duplicados (al menos parciales) el uno del otro. La refactorización de códigos es una práctica fundamental de los proyectos de desarrollo Agile, como un paso de limpieza para asegurarse de que los equipos no hayan producido códigos duplicados o demasiado complejos; sin embargo, el concepto se aplica también a los elementos arquitectónicos.
                            
                                        </p>
                            
                                        <p>
                                        Las responsabilidades comunes (y el código que las implementa) se "excluyen" de los módulos donde existen y se les asigna un hogar propio apropiado. Al ubicar conjuntamente las responsabilidades comunes, es decir, al convertirlas en submódulos del mismo módulo principal, el arquitecto puede reducir el acoplamiento.
                                        </p>
                                        `;
          break;

        case `resumen de servicios comunes`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Resumen De Servicios Comunes: </p>
                        <p class="d-inline">
                        En el caso de que dos módulos proporcionen servicios no iguales pero similares, puede ser rentable implementar los servicios solo una vez de forma más general (abstracta). Cualquier modificación al servicio (común) tendría que ocurrir en un solo lugar, reduciendo los costos de modificación. 
            
                        </p>
            
                        <p>
                        Una forma común de introducir una abstracción es parametrizar la descripción (y la implementación) de las actividades de un módulo. Los parámetros pueden ser tan simples como los valores para variables clave o tan complejos como las declaraciones en un lenguaje especializado que se interpretan posteriormente.
                        </p>
                        `;
          break;

        case `vincular valores en tiempo de compilación o tiempo de construcción`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Vincular Valores En Tiempo De Compilación O Tiempo De Construcción: </p>
                <ul>
                <li>Reemplazo de componentes (por ejemplo, en un script de compilación o makefile)</li>
                <li>Parametrización en tiempo de compilación</li>
                <li>Aspectos</li>
                <li>Enlace de configuración en tiempo</li>
                <li>Archivos de recursos</li>
                </ul>`;
          break;

        case `las tácticas para vincular valores en tiempo de ejecución`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="h5 fw-bold d-inline">Las Tácticas Para Vincular Valores En Tiempo De Ejecución: </p>
            <ul>
            <li>Registro en tiempo de ejecución</li>
            <li>Búsqueda dinámica (por ejemplo, para servicios).</li>
            <li>Interpretar parámetros</li>
            <li>Servidores de nombres</li>
            <li>Plug-ins</li>
            <li>Publicación-suscripción</li>
            <li>Repositorios compartidos</li>
            <li>Polimorfismo</li>
            </ul>`;
          break;

        case `cancelar, deshacer, pausar / reanudar y agregar`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="fw-bold d-inline">Cancelar: </p>
                <p>Cuando el usuario emite un comando de cancelación, el sistema debe escucharlo (por lo tanto, existe la responsabilidad de tener un escucha constante que no esté bloqueado por las acciones de lo que se esté cancelando); el comando que está siendo cancelado debe ser terminado; cualquier recurso utilizado por el comando cancelado debe ser liberado; y los componentes que colaboran con el comando cancelado deben ser informados para que también puedan tomar las medidas apropiadas.</p>

                <p class="fw-bold d-inline">Deshacer: </p>
                <p>Para admitir la capacidad de deshacer, el sistema debe mantener una cantidad suficiente de información sobre el estado del sistema para que se pueda restaurar un estado anterior, a solicitud del usuario.</p>
                <p>Dicho registro puede tener la forma de "instantáneas" de estado, por ejemplo, puntos de control, o como un conjunto de operaciones reversibles. No todas las operaciones se pueden revertir fácilmente: por ejemplo, cambiar todas las apariciones de la letra "a" a la letra "b" en un documento no puede revertirse cambiando todas las instancias de "b" a "a", porque algunas de esas instancias de "b" puede haber existido antes del cambio original. En tal caso, el sistema debe mantener un registro más detallado del cambio. Por supuesto, algunas operaciones, como tocar una campana, no se pueden deshacer.</p>


                <p class="fw-bold d-inline">Pausar-Reanudar: </p>
                <p>Cuando un usuario ha iniciado una operación de larga duración, por ejemplo, descargando un archivo grande o un conjunto de archivos desde un servidor, a menudo es útil proporcionar la capacidad de pausar y reanudar la operación. La pausa efectiva de una operación de larga duración requiere la capacidad de liberar temporalmente los recursos para que puedan ser reasignados a otras tareas.</p>
        
                <p class="fw-bold d-inline">Agregar: </p>
                <p>Cuando un usuario está realizando operaciones repetitivas u operaciones que afectan a un gran número de objetos de la misma manera, es útil proporcionar la capacidad de agregar los objetos de nivel inferior en un solo grupo, de modo que la operación se pueda aplicar a la grupo, liberando así al usuario de la monotonía (y el potencial de errores) de hacer la misma operación repetidamente. Por ejemplo, agregue todos los objetos en una diapositiva y cambie el texto a fuente de 14 puntos.</p>
                `;
          break;

        case `mantener el modelo de tarea,`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="fw-bold d-inline">Mantener El Modelo De Tarea: </p>
              
                    <p class="d-inline">El modelo de tareas se utiliza para determinar el contexto, de modo que el sistema pueda tener una idea de lo que el usuario está intentando y brindar asistencia. Por ejemplo, saber que las oraciones comienzan con letras mayúsculas permitiría que una aplicación corrija una letra minúscula en esa posición.</p> `;
          break;

        case `mantener modelo de usuario,`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="fw-bold d-inline">Mantener Modelo De Usuario: </p>
                         
                            <p class="d-inline" >Este modelo representa explícitamente el conocimiento del usuario del sistema, el comportamiento del usuario en términos del tiempo de respuesta esperado y otros aspectos específicos de un usuario o una clase de usuarios.</p> 
                            <p>Por ejemplo, mantener un modelo de usuario le permite al sistema controlar la selección del mouse para que no se seleccione todo el documento cuando se requiere el desplazamiento. O un modelo puede controlar la cantidad de asistencia y las sugerencias que se proporcionan automáticamente a un usuario. Un caso especial de esta táctica se encuentra comúnmente en la personalización de la interfaz de usuario , en donde un usuario puede modificar explícitamente el modelo de usuario del sistema.   </p>
                            `;
          break;

        case `Mantener el modelo del sistema`:
          titulo_modal.textContent = "Tácticas De Modificabilidad";
          content_modal.innerHTML = `<p class="fw-bold d-inline">Mantener El Modelo Del Sistema: </p>
                            
                            <p class="d-inline">Aquí el sistema mantiene un modelo explícito de sí mismo. Esto se usa para determinar el comportamiento esperado del sistema para que el usuario pueda recibir los comentarios apropiados. Una manifestación común de un modelo de sistema es una barra de progreso que predice el tiempo necesario para completar la actividad actual.</p> `;
          break;

        default:
          break;
      }
    });
  });
