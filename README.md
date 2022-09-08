## SST regression bug example

### How to test (broken):

1. `yarn`
1. `yarn sst build`
1. Confirm only one artifact in the output folder
```sh 
ls -al .build/cdk.out

drwxr-xr-x    - kuba  8 Sep 14:03  asset.86f2f62345467d887005928c75fc1f0799ef917698ea3cac9da0b64b7c3b1658
.rw-r--r--   20 kuba  8 Sep 14:03  cdk.out
.rw-r--r-- 1.3k kuba  8 Sep 14:03  kuba-sst-bug-1-SSTRegressionStack.assets.json
.rw-r--r--  13k kuba  8 Sep 14:03  kuba-sst-bug-1-SSTRegressionStack.template.json
.rw-r--r-- 6.0k kuba  8 Sep 14:03  manifest.json
.rw-r--r--  28k kuba  8 Sep 14:03  tree.json
```

### How to test (working):

1. Downgrading sst to version 1.10.6 fixes the problem
2. Commenting out line 14 in `stacks/index.ts` fixes it for version 1.11.1
```ts
  await new Promise((resolve) => setTimeout(resolve, 1000));
```

