---
title: Pie Charts
sidebar_position: 1
---

# Pie Charts with Jinbaflow

> "Slicing the data pie to visualize market shares."

## What is a Pie Chart?
A pie chart is a circular statistical graphic that is divided into slices to illustrate numerical proportions. Each slice of the pie represents a category's contribution to the whole. Pie charts are particularly useful for displaying relative proportions and comparisons among categories.


## Creating Pie Charts with Jinbaflow
In Jinbaflow, you can visualize your data in a pie chart using simple English instructions. This feature allows you to generate pie charts without needing to write complex code. Jinbaflow interprets your natural language prompts and converts them into the desired visualization.

**Sample Data:**
```table
| Brand        | Market Share (%) | Units Sold (Millions) | Region        |
|--------------|------------------|-----------------------|---------------|
| Apple        | 40               | 200                   | North America |
| Samsung      | 30               | 150                   | Europe        |
| Huawei       | 15               | 75                    | Asia          |
| Xiaomi       | 10               | 50                    | South America |
| Others       | 5                | 25                    | Global        |
```

You can download the data for this example [here](https://example.com/sample_data.csv).

## Simple Pie Chart
You can visualize sample data with the following prompt. Make sure to specify the names of the columns you want to visualize. Otherwise, Jinbaflow will need to make a guess. You don't have to give an exact name; for example, if the name of the column is "Brand", you can say "brand" or "smartphone brand".

**Example Prompt:**
```
Visualize the market share of different smartphone brands in a pie chart.
```

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/simple_pie_chart.png').default}
  alt="Simple Pie Chart"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>



## Customizing Your Pie Chart
Once you've created a basic pie chart, you may want to customize it to better suit your needs. Here are some ways to enhance your visualization in Jinbaflow:

### Adjusting Slice Colors
Customize the colors of the slices to make your pie chart more visually appealing or to match your branding.

**Example Prompt:**
```
Visualize the market share of different smartphone brands in a pie chart.
Use green for 'Apple', blue for 'Samsung', red for 'Huawei', orange for 'Xiaomi', and grey for 'Others'.
```
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/adjusting_slice_colors.png').default}
  alt="Adjusting Slice Colors"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

### Adding Labels and Percentages
You can add labels and percentages to each slice to provide more information at a glance.

**Example Prompt:**
```
Visualize the market share of different smartphone brands in a pie chart.
Add labels and percentages to each slice.
```
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/adding_labels_percentages.png').default}
  alt="Adding Labels and Percentages"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

### Exploding Slices
You can emphasize specific slices by "exploding" them, which separates the slice slightly from the rest of the pie.

**Example Prompt:**
```
Visualize the market share of different smartphone brands in a pie chart.
Explode the slice for 'Apple'.
```
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/exploding_slices.png').default}
  alt="Exploding Slices"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>
