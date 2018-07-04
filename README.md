# node-ical
A NodeJS micro service that converts an iCalender (.ics) file to a JSON entity stream.

## Example

    {
      "_id": "20180416T121956Z-945927757@wiki.bouvet.no",
      "type": "VEVENT",
      "params": [],
      "dtstamp": "2018-07-04T14:22:19.000Z",
      "start": "2018-05-17T22:00:00.000Z",
      "end": "2018-05-18T22:00:00.000Z",
      "summary": "Langhelg",
      "categories": [
        "other"
      ],
      "subcalendar-id": "13e6b028-badd-4c63-a1e7-e8152a1d8609",
      "parent-calendar-id": "8602678d-bb38-4589-8fff-9b7e085556b1",
      "parent-calendar-name": "",
      "subscription-id": "",
      "subcalendar-tz-id": "Europe/Oslo",
      "subcalendar-name": "Events",
      "event-id": "4128",
      "event-allday": "true",
      "uid": "20180416T121956Z-945927757@wiki.bouvet.no",
      "description": "",
      "organizer": {
        "params": {
          "X-CONFLUENCE-USER-KEY": "ff80818140d573350140d5741102034f",
          "CN": "Øystein Isaksen",
          "CUTYPE": "INDIVIDUAL"
        },
        "val": "mailto:oystein.isaksen@sesam.io"
      },
      "created": "2018-04-16T12:19:56.000Z",
      "lastmodified": "2018-04-16T12:19:56.000Z",
      "attendee": {
        "params": {
          "X-CONFLUENCE-USER-KEY": "ff80818140d573350140d5741102034f",
          "CN": "Øystein Isaksen",
          "CUTYPE": "INDIVIDUAL"
        },
        "val": "mailto:oystein.isaksen@sesam.io"
      },
      "sequence": "1",
      "CONFLUENCE-SUBCALENDAR-TYPE": "other",
      "status": "CONFIRMED"
    }
