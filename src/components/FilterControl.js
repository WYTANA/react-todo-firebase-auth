import React from 'react'

// Holds/controls All, Active, and Completed
const FilterControl = ({ filterStatus, setFilterStatus }) => {



    const handleStatus = (status) => {
        console.log("Status clicked")
        setFilterStatus(status)
    }

    return (
        <div className="items-status">
            <span
                onClick={() => handleStatus("all")}>
                All
            </span>
            <span onClick={() => handleStatus("active")}>
                Active
            </span>
            <span onClick={() => handleStatus("completed")}>
                Completed
            </span>
        </div>
    )
}

export default FilterControl