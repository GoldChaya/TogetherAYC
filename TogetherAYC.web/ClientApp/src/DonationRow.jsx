import React, { useState } from "react";


const DonationRow = (props) => {

    const { donation } = props;

    return (
        <tr key={donation.id}>
            <td>{donation.description}</td>
            <td>{donation.merit}</td>
        </tr>
    )


}

export default DonationRow;