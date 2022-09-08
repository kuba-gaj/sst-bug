import { App } from '@serverless-stack/resources';
import { MyStack } from './MyStack';

export default async function (app: App): Promise<void> {
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x',
    architecture: 'arm_64',
    srcPath: 'services',
    bundle: {
      format: 'cjs',
    }
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  new MyStack(app, 'SSTRegressionStack');
}
