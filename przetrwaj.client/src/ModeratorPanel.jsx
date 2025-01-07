import React, { useState, useEffect } from "react";

const ModeratorPanel = () => {
    const [users, setUsers] = useState([]);
    const [threats, setThreats] = useState([]);

    useEffect(() => {
        // Fetch users and threats from backend
        // Example: replace with API calls
        setUsers([
            { id: 1, name: "Jan Kowalski", status: "active" },
            { id: 2, name: "Anna Nowak", status: "blocked" },
        ]);
        setThreats([
            { id: 101, type: "Po¿ar", description: "Du¿y po¿ar w lesie", location: "Warszawa" },
            { id: 102, type: "PowódŸ", description: "Podtopienia w mieœcie", location: "Kraków" },
        ]);
    }, []);

    const blockUser = (userId) => {
        console.log(`Blocking user with ID: ${userId}`);
        // Add logic to block user via API
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, status: "blocked" } : user
            )
        );
    };

    const deleteThreat = (threatId) => {
        console.log(`Deleting threat with ID: ${threatId}`);
        // Add logic to delete threat via API
        setThreats((prevThreats) => prevThreats.filter((threat) => threat.id !== threatId));
    };

    return (
        <div className="moderator-panel">
            <h2>Panel Moderatora</h2>

            <section>
                <h3>U¿ytkownicy</h3>
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.status}{" "}
                            {user.status === "active" && (
                                <button onClick={() => blockUser(user.id)}>Blokuj</button>
                            )}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Zg³oszenia zagro¿eñ</h3>
                <ul>
                    {threats.map((threat) => (
                        <li key={threat.id}>
                            <strong>{threat.type}</strong>: {threat.description} (lokalizacja: {threat.location})
                            <button onClick={() => deleteThreat(threat.id)}>Usuñ</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default ModeratorPanel;
