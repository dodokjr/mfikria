import React, { useState } from "react";
import { ReactInternetSpeedMeter } from "react-internet-meter";

const InternetSpeed = () =>
{
    const [checkSpeed, SetCheckSpeed] = React.useState(
        "Internet Speed"
    )
    return (
        <div className="text-speed">
            <ReactInternetSpeedMeter
                txtSubHeading="Internet connection is slow"
                outputType="" // "alert"/"modal"/"empty"
                customClassName={null}
                pingInterval={2000} // milliseconds
                txtMainHeading="Opps..."
                thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
                threshold={50}
                imageUrl="https://api-mfikria.vercel.app/public/logo.ico"
                downloadSize="1561257" //bytes
                callbackFunctionOnNetworkDown={(data) =>
                    document.getElementById('net').innerHTML = data
                }
                callbackFunctionOnNetworkTest={(data) => SetCheckSpeed(data)}
            />
            <span>{checkSpeed} MB/s</span>
            <span id="net" hidden></span>
        </div>
    )
}

export default InternetSpeed;