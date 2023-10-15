import React from "react";
import './ReactTable.css';
import Admin from "../images/Admin.png"
function ReactTable() {
    const data = [
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Empolyees",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Appointments",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Bills",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Services",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        },
        {
            fname: "Customers",
            lname: "Link",
            buttons: [
                { label: "Add", action: () => console.log("Add clicked") },
                { label: "Update", action: () => console.log("Update clicked") },
                { label: "view", action: () => console.log("view clicked") },
                { label: "delete", action: () => console.log("delete clicked") }
            ]
        }
    ];

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val, i) => (
                        <tr key={i}>
                            <td>{val.fname}</td>
                            <td>
                                {val.buttons.map((button, j) => (
                                    <button key={j} onClick={button.action}>{button.label}</button>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="image-container">
                <img className= 'Admin-img' id= 'image-container'src={Admin} alt="Your Image" />
            </div>
        </div>
    );
}

export default ReactTable;
