import { styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';

export const HeaderContainer = styled('main', {
    display: "flex",
    justifyContent: "space-between",

    "&:not(:has(svg))": {
        justifyContent: "center",
    },

    alignContent: "center",
    padding: "2rem 0",
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
})

export const NotificationPin = styled('div', {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // width: "1.25rem",
    width: "1.5rem",
    height: "1.5rem",

    fontWeight: "bold",
    fontSize: "$xs",
    lineHeight: 1.6,

    color: "$white",
    backgroundColor: "$green500",
    position: "absolute",
    right: "-7px",
    top: "-7px",
    // right: "-0.4375rem",
    // top: "-0.4375rem",
    borderRadius: "50%",
})

export const IconContainer = styled('div', {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "6px",
    width: 48,
    height: 48,
    backgroundColor: "$gray800",
    position: "relative",

    svg: {
        color: "$gray300",
    },

    // "&::after": {
    //     content: '',
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     width: "1.25rem",
    //     height: "1.25rem",


    //     fontWeight: "bold",
    //     fontSize: "$sm",
    //     lineHeight: 1.6,

    //     backgroundColor: "$green500",
    //     position: "absolute",
    //     right: "-0.4375rem",
    //     top: "-0.4375rem",
    //     borderRadius: "50%",
    // }
})

export const DialogContent = styled(Dialog.Content, {
    width: "30rem",
    height: "100vh",
    backgroundColor: "$gray800",

    display: "flex",
    flexDirection: "column",
    padding: "4.5rem 3rem",
    // justifyContent: "center",

    position: "absolute",
    top: 0,
    right: 0,

    ".orderDetails": {
        marginTop: "auto",

        p: {
            display: "flex",
            justifyContent: "space-between",

        },

        "p:first-child": {
            // border: "2px solid $gray100",
        },


        "p:last-child": {
            marginTop: "0.5rem",
            color: "$gray100",
            fontWeight: "bold",
            lineHeight: 1.6,

            "span:first-child": {
                fontSize: "$lg",
            },

            "span:last-child": {
                fontSize: "$xl",
            }
        },
    },
})

export const DialogClose = styled(Dialog.Close, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 24,
    height: 24,
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer",
    position: "absolute",
    top: 24,
    right: 24,

    svg: {
        color: "$gray300",
    }
})

export const DialogTrigger = styled(Dialog.Trigger, {
    backgroundColor: "transparent",
    border: 0,
    cursor: "pointer"
})

export const DialogTitle = styled(Dialog.Title, {
    fontSize: "$lg",
    fontWeight: "bold",
    lineHeight: 1.6,
    color: "$gray100",
})


export const NewPurchaseButton = styled("button", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "3.5rem",
    padding: "20px 32px",
    gap: "10px",
    borderRadius: "8px",

    backgroundColor: "$green500",
    color: "$white",
    fontSize: "$md",
    fontWeight: "bold",
    lineHeight: 1.6,

    "&:hover": {
        backgroundColor: "$green300",
        cursor: "pointer"
    }

})