import BaseTheme from '../../../base/ui/components/BaseTheme.native';

export const preJoinStyles = {

    joinButtonPrimary: {
        marginTop: BaseTheme.spacing[3],
        width: 352,
        backgroundColor: '#0891B2'
    },

    joinButton: {
        marginTop: BaseTheme.spacing[3],
        width: 352,
        height: 40,
        backgroundColor: '#FFFFFF',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#CBD5E1'
    },

    buttonStylesBorderless: {
        iconStyle: {
            color: BaseTheme.palette.icon01,
            fontSize: 24
        },
        style: {
            flexDirection: 'row',
            justifyContent: 'center',
            margin: BaseTheme.spacing[3],
            height: 24,
            width: 24
        },
        underlayColor: 'transparent'
    },

    contentWrapper: {
        flex: 1,
        flexDirection: 'row'
    },

    contentWrapperWide: {
        flex: 1,
        flexDirection: 'row'
    },

    largeVideoContainer: {
        // jitsi edit adjust video size and add padding
        height: '80%',
        padding: 18
    },

    largeVideoContainerWide: {
        height: '100%',
        marginRight: 'auto',
        position: 'absolute',
        width: '50%'
    },

    contentContainer: {
        // jitsi edit adjust prejoin button container style
        alignItems: 'center',
        backgroundColor: BaseTheme.palette.uiBackground,
        bottom: 0,
        height: '20%',
        justifyContent: 'flex-start',
        position: 'absolute',
        width: '100%',
        zIndex: 1
    },

    contentContainerDark: {
        // jitsi edit adjust prejoin button container style
        alignItems: 'center',
        backgroundColor: BaseTheme.palette.uiBackgroundDark,
        bottom: 0,
        height: '20%',
        justifyContent: 'flex-start',
        position: 'absolute',
        width: '100%',
        zIndex: 1
    },

    contentContainerWide: {
        alignItems: 'center',
        height: '20%',
        justifyContent: 'center',
        left: '50%',
        padding: BaseTheme.spacing[3],
        position: 'absolute',
        width: '50%'
    },

    toolboxContainer: {
        alignItems: 'center',
        backgroundColor: BaseTheme.palette.ui01,
        borderRadius: BaseTheme.shape.borderRadius,
        display: 'flex',
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        marginBottom: BaseTheme.spacing[3],
        paddingHorizontal: BaseTheme.spacing[2],
        width: 148
    },

    customInput: {
        textAlign: 'center',
        width: 352
    },

    errorContainer: {
        backgroundColor: BaseTheme.palette.actionDanger,
        borderBottomRightRadius: BaseTheme.shape.borderRadius,
        borderBottomLeftRadius: BaseTheme.shape.borderRadius,
        boxSizing: 'border-box',
        marginTop: -BaseTheme.spacing[2],
        overflow: 'visible',
        wordBreak: 'normal',
        width: 352
    },

    error: {
        padding: BaseTheme.spacing[1],
        color: BaseTheme.palette.text01,
        textAlign: 'center'
    },

    preJoinRoomName: {
        ...BaseTheme.typography.heading5,
        color: BaseTheme.palette.text01,
        textAlign: 'center'
    },

    conferenceInfo: {
        alignSelf: 'center',
        marginTop: BaseTheme.spacing[3],
        paddingHorizontal: BaseTheme.spacing[3],
        paddingVertical: BaseTheme.spacing[1],
        position: 'absolute',
        maxWidth: 273,
        zIndex: 1
    },
    displayRoomNameBackdrop: {
        alignSelf: 'center',
        backgroundColor: BaseTheme.palette.uiBackground,
        borderRadius: BaseTheme.shape.borderRadius,
        marginTop: BaseTheme.spacing[3],
        opacity: 0.7,
        paddingHorizontal: BaseTheme.spacing[3],
        paddingVertical: BaseTheme.spacing[1],
        position: 'absolute',
        maxWidth: 243,
        zIndex: 1
    },
    recordingWarning: {
        display: 'flex',
        justifyContent: 'center',
        lineHeight: 22,
        marginBottom: BaseTheme.spacing[2],
        marginTop: BaseTheme.spacing[1],
        width: 'auto'
    },
    recordingWarningText: {
        color: BaseTheme.palette.text03
    },
    unsafeRoomWarningContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: BaseTheme.palette.ui01,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    unsafeRoomContentContainer: {
        justifySelf: 'center',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: BaseTheme.spacing[4]
    },

    unsafeRoomContentContainerWide: {
        alignItems: 'center',
        justifySelf: 'center',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginLeft: BaseTheme.spacing[7],
        paddingHorizontal: BaseTheme.spacing[6]
    },

    warningText: {
        ...BaseTheme.typography.bodyLongRegularLarge,
        color: BaseTheme.palette.text01,
        textAlign: 'center',
        marginBottom: BaseTheme.spacing[4]
    },
    warningIconWrapper: {
        backgroundColor: BaseTheme.palette.warning01,
        borderRadius: BaseTheme.shape.circleRadius,
        padding: BaseTheme.spacing[4],
        marginBottom: BaseTheme.spacing[4],
        zIndex: 0

    },
    warningIcon: {
        color: BaseTheme.palette.ui01,
        fontSize: 40
    }
};
