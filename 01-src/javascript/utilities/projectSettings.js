/**
 * projectSettings - description
 */
const projectSettings = window.projectSettings
const projectConfig = projectSettings ? projectSettings.config : undefined
const consoleMsgStyle = 'color: red; padding: 5px 0px;';
let debug = false;

if (projectConfig) {

    if (projectConfig.system.code === 'lab') {
        debug = true
        console.log('%cENV: PL', consoleMsgStyle);
    }

    if (projectConfig.system.code === 'dev') {
        debug = true
        console.log('%cENV: Dev CMS', consoleMsgStyle);
    }

    if (projectConfig.system.code === 'stage') {
        console.log('%cENV: Stage CMS', consoleMsgStyle);
    }

} else {
    console.log('%cENV: Live CMS', consoleMsgStyle);
}

export const system = projectConfig.system.code
export const debugMode = debug
