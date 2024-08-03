import React, { useContext } from 'react'

import AppMessage from '../designSystem/AppMessage'
import { NoticeContext } from '../contexts/NoticeProvider'

const Notice = () => {
    const { notice, deleteNotice } = useContext(NoticeContext)
    return notice?.message ? (
        <AppMessage
        className = 'Notice'
        info = {notice.type === 'info'}
        warning = {notice.type === 'warning'}
        negative = {notice.type === 'error'}
        onDismiss = {(event) => deleteNotice()}
        success = {notice.type === 'success'}
        >
            {notice.message}
        </AppMessage>
    ) : (
        <></>
    )
}

export default Notice