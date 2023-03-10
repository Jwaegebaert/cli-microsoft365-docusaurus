---
title: planner tenant settings list
description: Lists the Microsoft Planner configuration of the tenant
---

import Global from '../../_global.md'

# planner tenant settings list

Lists the Microsoft Planner configuration of the tenant

## Usage

```sh
m365 planner tenant settings list [options]
```

## Options

<Global />

## Remarks

!!! important
    To use this command you must be a global administrator.

After executing the command `planner tenant settings set`, it can take some time for all changes to propagate across the tenant. Because of this, executing this command right away can return some unexpected results.

## Examples

Lists the Microsoft Planner settings of the tenant

```sh
m365 planner tenant settings list
```
