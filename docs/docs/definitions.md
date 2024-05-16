---
sidebar_position: 2
---

# Definitions

These are key words and concepts that we will be referring to throughout our documentation.

## Modules
A module is an individual unit with inputs and outputs. It executes when its inputs are ready, and its outputs send data through any established connections.

## Connections
Connections link module outputs to module inputs, facilitating data flow. It's crucial to ensure that the data types of the flowing data match the expected data types at both ends.

## Data Types

Our system supports a variety of data types with explicit type checking, including:

- `Numeric`: For numerical values.
- `String`: For textual data.
- `Boolean`: For true/false values.
- `Array`: For ordered lists of elements.
- `Dictionary`: For JSON-like objects, key-value pairs.
- `CSV`: For comma-separated values. You can upload these directly.
- `DataFrame`: For handling large data sets in a table-like structure with the Pandas library.

## Workflows
A workflow consists of a set of interconnected modules and connections that can be executed as a unit. For inspiration or a starting point, check out our public templates.
