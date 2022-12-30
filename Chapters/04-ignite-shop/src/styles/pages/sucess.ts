import { styled } from "..";

export const SuccessContainer = styled('main', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    height: 656,

    h1: {
        fontSize: "$2xl",
        color: "$gray100",
          marginTop: "3rem", 
    }, 

    p: {
        fontSize: "$xl",
        color: "$gray300",
        maxWidth: 560,
        textAlign: "center",
        marginTop: "2rem", 
    }, 
    
    a: {
        display: "block",
        marginTop: "5rem",
        fontSize: "$lg",
        color: "$green500",
        textDecoration: "none",
        fontWeight: "bold",
        lineHeight: 1.4,

        "&:hover": {
            color: "$green300",
        },
    }
})

export const ImageContainer = styled('div', {
    width: "100%",
    maxWidth: "fit-content",
    height: 145,
    borderRadius: 8,
    padding: "0.25rem",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "4rem", 
    // position: "relative",
    
    img: {
        background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
        objectFit: "cover",
        borderRadius: 1000,
        boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",
    },
    // :not(:first-of-type)
    "img + img": {
        marginLeft: "-3.25rem",
    }

})