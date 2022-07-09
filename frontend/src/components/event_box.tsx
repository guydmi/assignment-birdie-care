import React from "react";
import { Box, Title, Divider, List, ListItem, Text } from "@mantine/core";

export type EventBoxProps = {
    care_recipient_id: string,
    visit_id: string,
    payload: Array<String>,
}

function EventBox(props: EventBoxProps): JSX.Element {

    return (
        <Box sx={(theme) => ({
            backgroundColor: "white",
        })}
            style={{justifyContent: "center", alignItems: "center" }}
        >
            <Divider size={'lg'} />
            <>
                {props.payload.map(payload =>(
                    <div>
                    <div> {payload} </div>
                    <Divider />
                    </div>
                ))}
            </>
        </Box>
    )
};

export default EventBox;