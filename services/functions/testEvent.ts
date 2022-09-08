import { EventBridge } from '@aws-sdk/client-eventbridge';

async function handler(event: Event): Promise<void> {
  // eslint-disable-next-line no-console
    const client = new EventBridge({});
    const result = await client.putEvents({
      Entries: [
        {
          Detail: JSON.stringify({payload: 'test'}),
          DetailType: 'DELETE_MOBILE_USER_TOKEN',
          EventBusName: process.env.GLOBAL_EVENT_BRIDGE_BUS_ARN,
          Source: 'test.events',
        },
      ],
    });
    console.log('Event sent');
}

module.exports = { handler };
