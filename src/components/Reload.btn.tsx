
import React from "react";

export const ReloadButton = () => {

    let onClick = () => {
        window.location.reload();
    };

    return (<button className="btn btn-primary reload" onClick={onClick} title="Reload">
        <i className="fas fa-sync-alt"></i>
    </button>);
}
