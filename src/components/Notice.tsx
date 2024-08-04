import React, { useContext } from 'react'

import AppMessage from '../designSystem/AppMessage'
import { NoticeContext } from '../contexts/NoticeProvider'

const Notice = () => {
    const { notice, deleteNotice } = useContext(NoticeContext)
    return notice?.message ? (
        <AppMessage
        className = 'Notice'
        info = {notice.type === 'info'}
        negative = {notice.type === 'error'}
        onDismiss = {(event) => deleteNotice()}
        success = {notice.type === 'success'}
        warning = {notice.type === 'warning'}
        >
            {notice.message}
        </AppMessage>
    ) : (
        <></>
    )
}

export default Notice