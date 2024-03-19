# Analyze

A Python code module that takes in a table or sequence, analyzes it based on the prompt, and outputs the result as a Pandas DataFrame.

## Inputs

You can define your own variables to use in the code with `context.{var_name}` as your inputs.

## Outputs

`data`: `[DataFrame]` The DataFrame object you returned.

`stdout`: `[String]` Anything you printed during the execution.

`stderr`: `[String]` Any errors that occurred during execution.

## Options

You can also use your variables in the prompt field with `${var_name}` and the LLM can refer to its data to help generate your code.