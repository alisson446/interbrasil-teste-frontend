import React, { useRef, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'

import routes from '../../router'
import { configNotificationSystem } from './actions'
import GlobalStyles from '../../styles/GlobalStyles';

const App: React.FC<Props> = (props) => {
    const notificationRef = useRef<NotificationSystem.System>(null);

    useEffect(() => {
        props.configNotificationSystem(notificationRef.current);
    }, [notificationRef, props])

    return (
        <>
            <GlobalStyles />
            <BrowserRouter>
                <Switch>
                {
                    routes.map((route: any, index: number) => (
                        <Route {...route} key={index} />
                    ))
                }
                </Switch>
            </ BrowserRouter>

            <NotificationSystem
                ref={notificationRef}
                style={{
                    MessageWrapper: {
                        DefaultStyle: {
                            textAlign: 'center'
                        }
                    }
                }}
            />
        </>
    );
}

const mapDispatch = (dispatch: CallableFunction) => {
    return {
        configNotificationSystem: (ref: any) => dispatch(configNotificationSystem(ref))
    }
}

const connector = connect(null, mapDispatch)
type Props = ConnectedProps<typeof connector>

export default connector(App);
