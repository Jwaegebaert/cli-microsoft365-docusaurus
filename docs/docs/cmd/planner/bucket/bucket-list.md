---
title: planner bucket list
description: Lists the Microsoft Planner buckets in a plan
---

import Global from '../../_global.md'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# planner bucket list

Lists the Microsoft Planner buckets in a plan

## Usage

```sh
m365 planner bucket list [options]
```

## Options

`--planId [planId]`
: ID of the plan to list the buckets of. Specify either `planId` or `planTitle` but not both.

`--planTitle [planTitle]`
: Title of the plan to list the buckets of. Specify either `planId` or `planTitle` but not both.

`--ownerGroupId [ownerGroupId]`
: ID of the group to which the plan belongs. Specify `ownerGroupId` or `ownerGroupName` when using `planTitle`.

`--ownerGroupName [ownerGroupName]`
: Name of the group to which the plan belongs. Specify `ownerGroupId` or `ownerGroupName` when using `planTitle`.

<Global />

## Examples

Lists the Microsoft Planner buckets in the Plan _xqQg5FS2LkCp935s-FIFm2QAFkHM_

```sh
m365 planner bucket list --planId "xqQg5FS2LkCp935s-FIFm2QAFkHM"
```

Lists the Microsoft Planner buckets in the Plan _My Plan_ owned by group _My Group_

```sh
m365 planner bucket list --planTitle "My Plan" --ownerGroupName "My Group"
```

## Response

<Tabs>
  <TabItem value="json" label="JSON">

  ```json
  [
    {
      "name": "My Planner Bucket",
      "planId": "xqQg5FS2LkCp935s-FIFm2QAFkHM",
      "orderHint": "8585363889524958496",
      "id": "ttEB_Uj690STdR3GC1MIDZgANq1U"
    }
  ]
  ```

  </TabItem>
  <TabItem value="text" label="Text">

  ```text
  id                            name               planId                        orderHint
  ----------------------------  -----------------  ----------------------------  -------------------
  ttEB_Uj690STdR3GC1MIDZgANq1U  My Planner Bucket  xqQg5FS2LkCp935s-FIFm2QAFkHM  8585363889524958496
  ```

  </TabItem>
  <TabItem value="csv" label="CSV">

  ```csv
  id,name,planId,orderHint
  ttEB_Uj690STdR3GC1MIDZgANq1U,My Planner Bucket,xqQg5FS2LkCp935s-FIFm2QAFkHM,8585363889524958496
  ```

  </TabItem>
  <TabItem value="md" label="Markdown">

  ```md
  # planner bucket list --planId "xqQg5FS2LkCp935s-FIFm2QAFkHM"

  Date: 27/12/2022

  ## My Planner Bucket (ttEB_Uj690STdR3GC1MIDZgANq1U)

  Property | Value
  ---------|-------
  name | My Planner Bucket
  planId | xqQg5FS2LkCp935s-FIFm2QAFkHM
  orderHint | 8585363889524958496
  id | ttEB_Uj690STdR3GC1MIDZgANq1U
  ```

  </TabItem>
</Tabs>
