import "./css/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'bootstrap';


const titulo_modal= document.getElementById('titulo_modal');
const content_modal= document.getElementById('content_modal');

let tactica = document.querySelectorAll('.lista_tacticas').forEach(Element =>{
    Element.addEventListener('click', (e) =>
    {
        const elem =e.target.textContent.trim(); 
        console.log(elem);
        switch (elem) {
            case `Ping,`:
                titulo_modal.textContent="Tácticas De Disponibilidad";
                content_modal.innerHTML=`<p class="h5 fw-bold d-inline">Ping: </p>Se refiere a un par de mensajes de solicitud / respuesta asíncronos intercambiados entre nodos, utilizados para determinar la accesibilidad y el retardo de ida y vuelta a través de la ruta de red asociada. Pero el eco también determina que el componente ping está vivo y responde correctamente. <p>El ping es a menudo enviado por un monitor del sistema.</p> <p>Ping / echo requiere que se establezca un umbral de tiempo; este umbral le dice al componente de ping cuánto tiempo debe esperar el eco antes de considerar que el componente de ping ha fallado ("tiempo de espera").</p> Las implementaciones estándar de ping / echo están disponibles para nodos interconectados a través de IP.`;
                break;

            case `monitor,`:
                titulo_modal.textContent="Tácticas De Disponibilidad";
                content_modal.innerHTML=`<p class="h5 fw-bold d-inline">Monitor: </p>Un monitor es un componente que se usa para monitorear el estado de salud de varias otras partes del sistema: procesadores, procesos, E / S, memoria, etc. Un monitor del sistema puede detectar fallas o congestiones en la red u otros recursos compartidos, como por ejemplo un ataque de denegación de servicio.
                <p>
                Organiza el software utilizando otras tácticas en esta categoría para detectar componentes que no funcionan correctamente. Por ejemplo, el monitor del sistema puede iniciar las autocomprobaciones o ser el componente que detecta marcas de tiempo defectuosas o latidos cardíacos perdidos
                .</p>`;
                break;


          
        
            default:
                break;
        }
    });
});




