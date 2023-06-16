import React from "react";

function Footing() {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div>
            <footer>
                copyright {year}
            </footer>
        </div>
    );
}

export default Footing;