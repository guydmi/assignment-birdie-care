import React from "react";
import { Card, Title, Divider } from "@mantine/core";
import EventBox from "./event_box";

const axios = require("axios");
export type BoardProps = {
    care_recipient_id: string,
    visit_id: string,
    payloads: Array<Object>,
}
// In this component, we define the board for one care_recipient_id given (within the home.tsx input), and one visit.
// Boards will be displayed in a feed_board on the main page, classed by dates.
// In each board, a feed of event_boxes will be displayed

function Board(props: BoardProps): JSX.Element {
    const analyse_payload = (payload: Object) => {
        const obj: Array<Object> = Object.values(payload);
        const keys = Object.keys(obj[0]);
        const values = Object.values(obj[0]);
        const uninteressant_keys = ['id', 'visit_id', 'care_recipient_id', 'caregiver_id', 'task_instance_id', 'task_schedule_id', 'task_definition_id'];
        const result: Array<String> = [];
        for (let i = 0; i < keys.length; i++) {
            if (!uninteressant_keys.includes(keys[i])) {
                result.push(keys[i] + ": " + values[i]);
            }
        }
        console.log("analyse payload board", result);
        return result;
    }

    return (
        <div style={{ height:"100", width: "30", alignItems: "center", justifyContent: "center" }} >
            <Card style={{width: 400, flexDirection:"column"}} shadow='sm' p='lg' sx={(theme) => ({
            backgroundColor: "#ebecf0",
            '&:hover': {
            backgroundColor: "#ebecf0",
            }})}>
                <Title order={2}>Visit </Title>
                <Title order={5}>{props.visit_id}</Title>
                <Divider />
            <>
                {props.payloads.map(payload =>(
                    <div>
                        <EventBox care_recipient_id={props.care_recipient_id} visit_id={props.visit_id} payload={analyse_payload(payload)}/>
                        <Divider />
                    </div>
                ))}
            </>
            </Card>
        </div>
    )
}

export default Board;