import store from '@/store'
import parameters from '@/parameters'
import { getPrintingProgramSystems, callURLProc } from '@/api/system'

const { procedure_parameters, match_parameters } = parameters

export async function printLabel(lbContent, prtValues) {
  const sys = await getPrintingProgramSystems(lbContent.id)
  var params = []

  procedure_parameters[sys.callproc].slice().forEach((e, i) => {
    if (e === 'getter:token') {
      params.push(store.getters.token)
    } else if (e === 'getter:lang') {
      params.push(store.getters.lang)
    } else if (e === 'getter:mfgid') {
      params.push(store.getters.mfgid)
    } else {
      params.push(e)
    }
  })

  if (sys.calltype === 'URL') {
    // Parameter Add
    params.push(lbContent.file)
    params.push(lbContent.parameters)
    params.push(prtValues.join(':'))

    const url = await callURLProc(sys.callproc, params)
    window.open(url, '_blank')
  }
}

export async function settingValues(content, optype, valueObj) {
  var labelParameters = []
  if (content.parameters.indexOf(':') !== -1) {
    labelParameters = content.parameters.split(':')
  } else {
    labelParameters.push(content.parameters)
  }

  var labelValues = [] // Initialization
  labelParameters.forEach((e, i) => {
    const lparam = e
    const jparam = match_parameters[optype].find(match => match.label === lparam)

    if (jparam) {
      const info = jparam.info
      labelValues[i] = valueObj[info]
    }
  })

  return labelValues
}
