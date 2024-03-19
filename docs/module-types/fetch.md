# Fetch

Fetches data from a URL with a GraphQL query.

## Inputs

You can define your own variables to use in the code with `context.{var_name}` as your inputs.

## Outputs

`success`: `[Bool]` Whether the query executed successfully.

`error_code`: `[String]` The short error code or message.

`error_message`: `[String]` The detailed error message, if available.

`result`: `[Dict]` The returned result from the data source.

## Options

You can also use your variables in the prompt field with `${var_name}` and the LLM can refer to its data to help generate your query.