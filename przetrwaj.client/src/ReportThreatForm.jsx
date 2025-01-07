import React, { useState } from "react";

const ReportThreatForm = () => {
    const [formData, setFormData] = useState({
        threatType: "",
        description: "",
        location: "",
        attachments: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting form data: ", formData);
        // Add logic to send form data to backend API
    };

    return (
        <form onSubmit={handleSubmit} className="report-threat-form">
            <h2>Zg�o� zagro�enie</h2>

            <label>
                Typ zagro�enia:
                <select
                    name="threatType"
                    value={formData.threatType}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Wybierz --</option>
                    <option value="flood">Pow�d�</option>
                    <option value="fire">Po�ar</option>
                    <option value="earthquake">Trz�sienie ziemi</option>
                </select>
            </label>

            <label>
                Opis:
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Opisz zagro�enie..."
                    required
                ></textarea>
            </label>

            <label>
                Lokalizacja:
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Podaj lokalizacj�..."
                    required
                />
            </label>

            <label>
                Za��czniki (opcjonalne):
                <input
                    type="file"
                    name="attachments"
                    onChange={handleChange}
                    accept="image/*"
                />
            </label>

            <button type="submit">Zg�o� zagro�enie</button>
        </form>
    );
};

export default ReportThreatForm;
