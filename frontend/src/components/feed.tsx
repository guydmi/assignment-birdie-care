import React from "react";
import Board from "./board";
import { useState, useEffect } from "react";

const axios = require("axios");

export type FeedProps = {
    care_recipient_id: string,
};

function Feed(props: FeedProps): JSX.Element {
    const [data, setData] = useState<{'visit_id': string}[]>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/controller/visitid', {
                    params: {
                        care_recipient_id: props.care_recipient_id}}
                );
                return response.data.res;
            } catch (error) {
                console.error(error);
                return [];
            }
        };
        getData().then(fetchData => setData(fetchData));
    }, []);

    const [dataPayloads, setDataPayloads] = useState<{ 'visit_id': string ,'payload': Object}[]>([]);

    useEffect(() => {
        const getKey = async () => {
            try {
                const response = await axios.get('http://localhost:3001/controller/getKeys',
                {params: {care_recipient_id: props.care_recipient_id}});
                return response.data.res;
            } catch (error) {
                console.error(error);
                return [];
            }
        }

        getKey().then(fetchedData => setDataPayloads(fetchedData));
    }, [])

    const getPayloads = (visit_id: string, data: { 'visit_id': string ,'payload': Object}[]) => {
        const payloads: Array<Object> = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].visit_id === visit_id) {
                payloads.push({'payload': data[i].payload});
            }
        }
        if (payloads.length > 1) {
            payloads.splice(0, 1);
        }
        return payloads;
    }
    const getDataId = (data: { 'visit_id': string ,}[]) => {
        const dataId: Array<string> = [];
        for (let i = 0; i < data.length; i++) {
            if (data[i].visit_id !== null || !(data[i].visit_id in dataId)) {
                console.log(!(data[i].visit_id in dataId))
                dataId.push(data[i].visit_id);
            }}
        return dataId;}

    return (
        <>
            {getDataId(data).map( visit => (
                <div style={{ flexDirection: "row", display: "flex", justifyItems: "center", alignContent: "center", justifyContent: "center", alignItems: "center", paddingTop:"10px", paddingBottom:"10px" }} >
                    <Board care_recipient_id={props.care_recipient_id} visit_id={visit} payloads={getPayloads(visit, dataPayloads)} />
                </div>
            ))}
        </>
    );
            }

export default Feed;