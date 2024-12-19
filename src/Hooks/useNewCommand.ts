import { useEffect, useState } from "react";

export default async function useNewCommand(data: any) {
    const [command, setCommand] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/api/command/new`,
            {
                method: "POST",
                body: JSON.stringify(data)
            }
        )
            .then((data) => {
                setCommand(data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, [])

    return command;
}