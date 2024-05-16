---
title: Line Plots
sidebar_position: 1
---


# Line Plots with Jinbaflow

> Connecting the dots to reveal the story hidden in your data

## What is a Line Plot?
A line plot, also known as a line chart, is a type of chart that displays information as a series of data points called 'markers' connected by straight line segments. It is commonly used to visualize data points in a continuous sequence, typically over time. Line plots are useful for identifying trends, patterns, and fluctuations within the data.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/lineplot.png').default}
  alt="Line Plot Example"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

## Creating Line Plots with Jinbaflow
In Jinbaflow, you can visualize your data in a line chart using simple English instructions. This feature allows you to generate line plots without needing to write complex code. Jinbaflow interprets your natural language prompts and converts them into the desired visualization.


You can download the data for this example [here](https://drive.google.com/file/d/1qLtSkpXXaLuJcOBi7Ohm0YvKmALDRw8l/view?usp=drive_link).

## Simple Line Chart
You can visualize sample data with the following prompt. 

```
Visualize "Sales", "Holiday", "Customers", and "Marketing Spend" in a line chart.
```

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/lineplot_sc.png').default}
  alt="Line Plot Example"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

:::tip

Make sure to specify the names of the columns you want to visualize. Otherwise, Jinba will need to make a guess. You don't have to give an exact name; for example, if the name of the column is "Sales", you can say "sales" or "the number of sales."

:::


## Customizing Your Line Chart
Once you've created a basic line chart, you may want to customize it to better suit your needs. Here are some ways to enhance your visualization in Jinbaflow:

### Adding Titles and Labels
You can add a title to your chart and labels to the axes to make your data more understandable.

**Example Prompt:**
```
Visualize "Sales" and "Marketing Spend" in a line chart. 
Set the title to 'Monthly Sales and Marketing Spend', label the X-axis as 'Months', and the Y-axis as 'Amount (in USD)'.
```

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/adding_titles_and_labels.png').default}
  alt="Adding Titles and Labels"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

### Adjusting Line Styles
Customize the appearance of the lines in your chart by specifying styles such as color, width, and type (solid, dashed, dotted).

**Example Prompt:**
```
Visualize "Sales" and "Customers" in a line chart.
Use a solid blue line for "Sales" and a dashed red line for "Customers".
```
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/adjusting_line_styles.png').default}
  alt="Adjusting Line Styles"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

### Highlighting Specific Data Points
You can highlight particular data points to draw attention to them, such as peaks or significant changes.

**Example Prompt:**
```
Visualize "Sales" over the year. Highlight the highest and lowest sales months with markers.
```
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/highlighting_specific_data_points.png').default}
  alt="Adjusting Line Styles"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

### Adding a Legend
A legend helps in identifying different lines in a multi-line chart. You can specify the placement and style of the legend.

**Example Prompt:**
```
Visualize "Sales", "Marketing Spend", and "Customers" in a line chart.
Add a legend at the top-right corner.
```
<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/adding_ledgend.png').default}
  alt="Adding a Ledgend"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>

## Advanced Customizations
For more advanced visualizations, you can combine multiple customizations in a single prompt.

**Example Prompt:**
```
Visualize "Sales", "Holiday", "Customers", and "Marketing Spend" in a line chart. 
Set the title to 'Monthly Business Metrics', label the X-axis as 'Months', and the Y-axis as 'Value'. 
Use a solid green line for "Sales", a dashed blue line for "Marketing Spend", a dotted red line for "Customers", 
and highlight the data points for holidays with markers. Add a legend at the bottom-left corner.
```

<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
<img
  src={require('/img/tutorial/advanced_customization.png').default}
  alt="Adjusting Line Styles"
style={{ maxWidth: "70%", height: "auto" }}
/>
</div>
