# Python

A Python code module that takes in any variables you wish to define and outputs the result. `return` the value you want to be displayed and outputted.

## Inputs

You can define your own variables to use in the code with `context.{var_name}` as your inputs.

## Outputs

`data`: `[Any]` The DataFrame object you returned.

`stdout`: `[String]` Anything you printed during the execution.

`stderr`: `[String]` Any errors that occurred during execution.

## Options

You can also use your variables in the prompt field with `${var_name}` and the LLM can refer to its data to help generate your code.