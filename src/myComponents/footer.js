import React from 'react'

export default function Footer(){

    let footerStyles={

        color: "#8c8383",
        padding: "10px",
        backgroundColor: "rgb(52, 47, 47)",
        textAlign: "center",
        width:"100%",


    }

    return(

        <footer style={footerStyles}>
            Copyright &copy; ToDoList.com    
        </footer>
    )


}