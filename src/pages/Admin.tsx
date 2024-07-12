import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';


export default function Admin(){
    
    const [socket, setSocket] = useState<Socket>();

    useEffect(()=>{
        const adminSocket = io("http://localhost:3000");
        adminSocket.on("connect", ()=>{
            console.log("admin is connedted to socket!");
            setSocket(adminSocket);
        })
    }, [])

    function CreateQuiz(){
        socket?.emit("ADMIN_JOIN", {
            username: "sharad",
            password: ""
        });
    }
    

    return <div>
        admin...
    </div>
}