import React, { useState } from "react";
import ReportThreatForm from "./components/ReportThreatForm";
import ModeratorPanel from "./components/ModeratorPanel";
import "./App.css";

const App = () => {
    const [activeComponent, setActiveComponent] = useState("form"); // Przełącznik widoku

    return (
        <div className="App">
            <header className="App-header">
                <h1>Aplikacja Zarządzania Zagrożeniami</h1>
                <nav>
                    <button onClick={() => setActiveComponent("form")}>Zgłoś zagrożenie</button>
                    <button onClick={() => setActiveComponent("moderator")}>Panel moderatora</button>
                </nav>
            </header>

            <main>
                {activeComponent === "form" && <ReportThreatForm />}
                {activeComponent === "moderator" && <ModeratorPanel />}
            </main>
        </div>
    );
};

export default App;
