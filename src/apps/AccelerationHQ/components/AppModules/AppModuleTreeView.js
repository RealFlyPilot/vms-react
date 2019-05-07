import React, { Component, Fragment, memo, useState, useRef, useEffect } from 'react'

import SwipeableViews from 'react-swipeable-views'
import * as Icons from './icons'

import ViewAgenda from '@material-ui/icons/ViewAgenda'
import ViewModule from '@material-ui/icons/ViewModule'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { useSpring, animated } from 'react-spring'
import { Global, Frame, Content, toggle } from './styles'
// import * as Icons from './icons'

import ResizeObserver from 'resize-observer-polyfill'

export function usePrevious(value) {
    const ref = useRef()
    useEffect(() => void (ref.current = value), [value])
    return ref.current
}

export function useMeasure() {
    const ref = useRef()
    const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
    const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
    useEffect(() => {
        if (ref.current) ro.observe(ref.current)
        return () => ro.disconnect()
    }, [])
    return [{ ref }, bounds]
}

const Tree = memo(({ children, name, style, open = false }) => {
    const [isOpen, setOpen] = useState(open)
    const previous = usePrevious(isOpen)
    const [bind, { height: viewHeight }] = useMeasure()
    const { height, opacity, transform } = useSpring({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: { height: isOpen ? viewHeight : 0, opacity: isOpen ? 1 : 0, transform: `translate3d(${isOpen ? 0 : 20}px,0,0)` }
    })
    const Icon = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`]
    return (
        <Frame>
            <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
            <span style={{ verticalAlign: 'middle', ...style }}>{name}</span>
            <Content style={{ opacity, height: isOpen && previous === isOpen ? 'auto' : height }}>
                <animated.div style={{ transform }} {...bind}>
                    {children}
                </animated.div>
            </Content>
        </Frame>
    )
})

export const AppModuleTreeView = ({ data }) => {
    const { appModules } = data

    return (
        <>
            <Global />
            <Tree name='Acceleration Application Hierarchy' open>
                
                    <Tree name='App Modules'>
                        {appModules.map(appModule => (
                            <Tree name={appModule.name} style={{ color: '#37ceff' }}>
                                <Tree name='Views'>
                                    {appModule.views && appModule.views.length
                                        ? appModule.views.map(view => <Tree name={view.name}>
                                      
                                        {view.components && view.components.length ? <Tree name='Components'> {  view.components.map(comp => (<Tree name={comp.name} /> ))
                                           }</Tree> : null}
                                        </Tree>)
                                        : null}
                                </Tree>
                            </Tree>
                        ))}
                    </Tree>
            </Tree>
        </>
    )
}
