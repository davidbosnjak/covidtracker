import React from 'react'
import {Card, CardContent, Typography} from "@material-ui/core";
function InfoBox({ title, cases, total}) {
    return (
        <Card className="InfoBox">
            <CardContent>
                <Typography className ="InfoBox_title">
                    {title}
                </Typography>
                <h2 className="InfoBox_cases">{cases}</h2>
                <Typography className ="InfoBox_title">
                    {total} 
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox;
