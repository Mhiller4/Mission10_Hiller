
// Import necessary hooks from React
import { useEffect, useState } from "react";
import {Bowler} from "./types/Bowler"

// Functional component for displaying the list of bowlers
function BowlerList () {

    const [bowlers, setBowlers] = useState <Bowler[]>([]);

    // useEffect hook runs when the component mounts
    useEffect(() => {
        const fetchBowler = async () =>{
        const response = await fetch('http://localhost:5006/api/Bowlers'); // Fetches data from the backend API
        const data = await response.json();
        setBowlers(data);
    };
    fetchBowler(); // Calls the function to fetch data
    
    },[]);

    
// Renders the table with bowler data
    return (
        <>
        <h2>Bowlers</h2>
        <table style={{
                width: "100%",
                borderCollapse: "collapse",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
            }}>
            <thead>
                <tr style={{ backgroundColor: "#2c3e50", color: "#fff", height: "40px" }}>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Bowler Name</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Team Name</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Address</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>City</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>State</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Zip</th>
                    <th style={{ padding: "10px", border: "1px solid #ddd" }}>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {
                    bowlers.map((b)=> (
                        <tr key={b.id} style={{ backgroundColor: "#808080", height: "35px" }}>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{b.bowlerName}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{b.teamName}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{b.address}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{b.city}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{b.state}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{b.zip}</td>
                            <td style={{ padding: "8px", border: "1px solid #ddd" }}>{b.phoneNumber}</td>

                        </tr>
                    ))
                }

            </tbody>
        </table>
        </>

    );
}

export default BowlerList;