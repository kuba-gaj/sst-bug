import type { EventBridgeEvent } from 'aws-lambda';

export interface DeleteMobileUserTokenPayload {
  userId: string;
  token: string;
}

const handler = async (
  event: EventBridgeEvent<
    'DELETE_MOBILE_USER_TOKEN',
    DeleteMobileUserTokenPayload
  >,
): Promise<boolean> => {
  console.log('DeleteEventHandler', {event});
};

module.exports = { handler };
