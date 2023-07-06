import * as core from '@actions/core'
// import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const operation: string = core.getInput('operation')
    const scopeKeyword: string = core.getInput('scopes-keyword')
    const scopeTitle: string = core.getInput('scopes-title')

    // core.debug(`Waiting ${ms} milliseconds ...`) // debug is only output if you set the secret `ACTIONS_STEP_DEBUG` to true

    // core.debug(new Date().toTimeString())
    // await wait(parseInt(ms, 10))
    // core.debug(new Date().toTimeString())
    const output = `${operation} - ${scopeKeyword} - ${scopeTitle}`
    core.setOutput('message', output)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
