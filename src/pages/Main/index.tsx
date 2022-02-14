import React from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { RootState } from '../../reducers'
import Header from '../../components/Header'

const Main: React.FC<MainProps> = (props) => {
    return (
        <div>
            <Header />
        </div>
    )
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
