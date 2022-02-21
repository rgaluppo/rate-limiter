/** 
 * En un futuro me gustaria hacer un wrapper de Axios y llevarlo a una lib.
 * Ventajas:
 *  - la implementacion del restclient queda aislada.
 *  - puedo agregar las metricas que necesite. 
 */ 
import axios from 'axios';
import config from 'config';

const restclient = axios.create({ timeout: config.get('restclient.timeout') })
export default restclient;