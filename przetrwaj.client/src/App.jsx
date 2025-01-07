import React, { useState } from "react";
import ReportThreatForm from "./components/ReportThreatForm";
import ModeratorPanel from "./components/ModeratorPanel";
import "./App.css";

const App = () => {
    const [activeComponent, setActiveComponent] = useState("form"); // Prze��cznik widoku

    return (
        <div className="App">
            <header className="App-header">
                <h1>Aplikacja Zarz�dzania Zagro�eniami</h1>
                <nav>
                    <button onClick={() => setActiveComponent("form")}>Zg�o� zagro�enie</button>
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
