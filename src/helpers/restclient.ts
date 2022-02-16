
/** 
 * En un futuro me gustaria hacer un wrapper de Axios y llevarlo a una lib.
 * Ventajas:
 *  - la implementacion del restclient queda aislada.
 *  - puedo agregar las metricas que necesite. 
 */ 
import axios from 'axios';

const restclient = axios.create({ timeout: 3000 })
export default restclient;