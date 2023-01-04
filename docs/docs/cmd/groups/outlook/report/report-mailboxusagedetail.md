# outlook report mailboxusagedetail

Gets details about mailbox usage

## Usage

```sh
m365 outlook report mailboxusagedetail [options]
```

## Options

`-p, --period <period>`
: The length of time over which the report is aggregated. Supported values `D7,D30,D90,D180`

`-f, --outputFile [outputFile]`
: Path to the file where the report should be stored in

--8<-- "docs/cmd/groups/_global.md"

## Examples

Gets details about mailbox usage for the last week

```sh
m365 outlook report mailboxusagedetail --period D7
```

Gets details about mailbox usage for the last week and exports the report data in the specified path in text format

```sh
m365 outlook report mailboxusagedetail --period D7 --output text > "mailboxusagedetail.txt"
```

Gets details about mailbox usage for the last week and exports the report data in the specified path in json format

```sh
m365 outlook report mailboxusagedetail --period D7 --output json > "mailboxusagedetail.json"
```