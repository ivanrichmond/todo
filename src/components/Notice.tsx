import React, { useContext } from 'react'

import AppMessage from '../designSystem/AppMessage'
import { NoticeContext } from '../contexts/NoticeProvider'

const Notice = () => {
    //TODO: Fix this typescript error.
    // @ts-expect-error
    const { notice, deleteNotice } = useContext(NoticeContext)
    console.debug('notice', notice)
    return notice?.message ? (
        <AppMessage
        info = {notice.type === 'info'}
        warning = {notice.type === 'warning'}
        negative = {notice.type === 'error'}
        onDismiss = {(event) => deleteNotice(event)}
        success = {notice.type === 'success'}
        >
            {notice.message}
        </AppMessage>
    ) : (
        <></>
    )
}

export default Notice