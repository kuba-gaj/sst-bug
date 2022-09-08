import {
  Stack,
  App,
  EventBus,
  Function,
} from '@serverless-stack/resources';

export class MyStack extends Stack {
  constructor(scope: App, id: string) {
    super(scope, id);

    const bus = new EventBus(this, 'my-bus', {
      rules: {
        deleteTokenRule: {
          pattern: {
            source: ['test.events'],
            detailType: ['DELETE_MOBILE_USER_TOKEN'],
          },
          targets: {
            registerTokens: 'functions/deleteTokens.handler',
          },
        },
      }
    });

    new Function(this, 'TestEvent', {
      handler: 'functions/testEvent.handler',
      permissions: [bus],
      environment: {
        GLOBAL_EVENT_BRIDGE_BUS_ARN: bus.eventBusArn,
      },
    });

    this.addOutputs({
      busArn: bus.eventBusArn,
    });
  }
}
