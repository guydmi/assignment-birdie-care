const db = require('./db');
const config = require('../config');

async function getEvents(){
  const res = await db.query(
    `SELECT DISTINCT care_recipient_id FROM events`
  );

  return {
    res
  }
}

async function getVisitId(care_recipient_id) {
  console.log("feed")
    const res = await db.query(
        `SELECT DISTINCT visit_id FROM events WHERE (care_recipient_id = '${care_recipient_id}' AND visit_id IS NOT NULL) ORDER BY timestamp DESC`
    );
    return {
        res
    }
}

async function getKeys(care_recipient_id) {
  console.log("board")
    const res = await db.query(
        `SELECT visit_id, payload FROM events WHERE (care_recipient_id = '${care_recipient_id}') GROUP BY visit_id ORDER BY timestamp DESC`
        // `SELECT DISTINCT event_type FROM events WHERE (visit_id = '2ddc98e8-521f-11e9-b63f-06a80bfbb33e')`
    );
    return {
        res
    }
}


module.exports = {
  getEvents,
  getVisitId,
  getKeys,
}