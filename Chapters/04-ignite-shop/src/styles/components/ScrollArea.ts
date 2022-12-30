import * as ScrollArea from '@radix-ui/react-scroll-area';
import { styled } from '..';

export const ScrollAreaRoot = styled(ScrollArea.Root, {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    width: '100%',
    borderRadius: 4,
    overflow: 'hidden',
    margin: '2rem 0',
});

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
});

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
    display: 'flex',
    // ensures no selection
    userSelect: 'none',
    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: 'none',
    padding: 2,
    transition: 'background 160ms ease-out',
    '&:hover': { background: '$gray800' },
    '&[data-orientation="vertical"]': { width: 10 },

});

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
    flex: 1,
    backgroundColor: '$green300',
    borderRadius: 10,
    position: 'relative',

    '&::before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: 44,
        minHeight: 44,
    },
});

export const Box = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: '1.5rem',
})

export const BoxItem = styled('div', {
    display: 'flex',
    gap: '1.25rem',
})

export const BoxItemDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    lineHeight: 1.6,

    div: {
        display: 'flex',
        flexDirection: 'column',

        span: {
            fontSize: '$md',
            color: '$gray300'
        },

        strong: {
            fontSize: '$md',
            fontWeight: 'bold',
            color: '$gray100'
        },
    },

    button: {
        fontSize: '$sm',
        fontWeight: 'bold',
        color: '$green500',
        background: 'transparent',
        border: 0,
        width: 'fit-content',

        '&:hover': {
            color: '$green300',
            cursor: 'pointer',
        },


    }
})

export const ImageContainer = styled("div", {
    width: "100%",
    maxWidth: 102,
    height: 92,
    background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    padding: "0.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img: {
        objectFit: "cover",
    }
})