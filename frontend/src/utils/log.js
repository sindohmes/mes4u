import axios from 'axios'
import store from '@/store'
import moment from 'moment'
import { writeLogData } from '@/api/system'

export async function writeLog(path) {
  const ip = await axios.get('https://api.ipify.org')
  const data = {
    timestamp: moment().format('YY-MM-DD HH:mm:ss'),
    username: store.getters.name,
    path: path,
    ip: ip.data
  }

  await writeLogData(data)
}
