import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Event from "../pages/Event";

export function Router () {
    return (
        <Routes>
            <Route path="/" element={<h1>home</h1>} />
            <Route path="/event" element={<Event/>} />
        </Routes>
    )
}