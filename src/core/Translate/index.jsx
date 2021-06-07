
import React, { useContext, useState } from 'react'

let initalState = {
    default: 'en',
    env: 'prod'
    // en: {},
    // vi: {}
}

let Context = React.createContext({
    default: 'en',
    t() {
        return Math.random()
    }
})

let timeout
let objUpdate = {}


export default function TranslateProvider({ children }) {
    let [state, setState] = useState(initalState)



    function t(key) {

        if (!state?.[state.default]?.[key] && state.env === 'test') {
            clearTimeout(timeout)
            if (!objUpdate[state.default]) {
                objUpdate[state.default] = {}
            }
            objUpdate[state.default][key] = key

            timeout = setTimeout(() => {
                fetch('http://localhost:3002/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(objUpdate)
                })
                    .then(res => res.json())
                    .then(res => {
                        objUpdate = {}
                    })
            }, 1000)

        }
        return state?.[state.default]?.[key] || key
    }

    function setTranslate(initTranslate) {
        let { default: langDefault } = initTranslate
        if (langDefault) {
            localStorage.setItem('lang', langDefault)
        }


        setState({
            ...state,
            ...initTranslate,
        })
    }

    let value = {
        t,
        setTranslate,
        default: state.default
    }

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useTranslate() {
    return useContext(Context)
}

export function setTranslate(initTranslate) {
    initalState = {
        ...initalState,
        ...initTranslate,
    }
}