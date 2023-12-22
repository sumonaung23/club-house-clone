import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import style from '../style/bottomSheet.module.css'

const BottomSheet = (props) => {
    return (
        <SwipeableBottomSheet
            open={props.sheetVisible}
            onchange={() => {
                props.setSheetVisible(!props.sheetVisible)
                props.setItemsVisible(true)
            }}
            fullScreen={props.sheetTitle == 'room detail' ? true : false }
        >
            <div className={style.BottomSheetContainer} style={{backgroundColor: props.sheetTitle == 'profile' ? 'transparent' : '' }}></div>
        </SwipeableBottomSheet>
    )
}

export default BottomSheet