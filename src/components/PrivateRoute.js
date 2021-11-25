import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { DataContext } from '../aplication/DataContext'
import Recomended from './Recomended'


export default function PrivateRoute({ component: Component, ...rest }) {
    const { state } = useContext(DataContext)

    return (

        < Route {...rest}> {state.logIn ? <Component /> : <Redirect to="/pantalla-inicial" />}</Route>
    )
}
