/**
 * Es un wrapper de Axios(https://github.com/axios/axios#axios)
 *
 * Ventajas:
 *  - la implementacion del restclient queda aislada.
 *  - puedo agregar las métricas que necesite.
 */
import axios from 'axios'
import config from 'config'

const restclient = axios.create({ timeout: config.get('restclient.timeout') })
export default restclient
