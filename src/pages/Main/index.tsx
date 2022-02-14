import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Redirect } from "react-router-dom"
import axios from 'axios';

import { RootState } from '../../reducers'
import Header from '../../components/Header'

import { getJson } from '../../external/api/request';
import apiPaths from '../../external/api/paths';

const Main: React.FC<MainProps> = (props) => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const [redirect, setRedirect] = useState<any>(null)

    useEffect(() => {
        async function checkIsAuth() {
            const { data } = await axios(getJson(apiPaths.isAuth))
            setIsAuth(data.isAuth)

            if (! data.isAuth) {
                setRedirect(<Redirect to='/login' />)
            }
        }

        checkIsAuth()
    }, [props])

    return isAuth ? (
        <div>
            <Header />
            {redirect}
        </div>
    ) : null
}

const mapState = (state: RootState) => {
    return {}
}

const mapDispatch = (dispatch: CallableFunction) => {
    return {}
}

const connector = connect(mapState, mapDispatch)
type MainProps = ConnectedProps<typeof connector>

export default connector(Main)
