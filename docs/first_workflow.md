---
sidebar_position: 3
---

# Building your First Workflow

## Goal


This tutorial guides you through creating a workflow to visualize population data. You'll be using a sample dataset, which you can download [here](https://drive.google.com/file/d/177ba0lKuLHl9tO8vRNqqytARwCueE_t-/view?usp=drive_link).

## Starting with the Workflow

### Step 1: Load Data with the CSV Module

Begin by loading your dataset using the csv module. After loading, expand the output section to explore your data.

<center>
<img
  src={require('/img/tutorial_csv.png').default}
  alt="Load CSV"
  style={{ width: "auto", height: "480px" }}
/>
</center>

### Step 2: Data Cleaning with the Transform Module

Next, navigate to the Transform module from the sidebar. 
You'll need to set up an input variable for this module. 
Click on the add variable button and assign a name of your choice. 
Link this variable to the csv module to allow data transfer. 
Run the workflow to update the module's input.

<center>
<iframe width="80%" height="380px" 
    src="https://www.loom.com/embed/8d71b210767d4802972d587227a9b523?sid=f312d32b-d55d-4d70-af62-7da8d7fcca4d"
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

Prepare to clean your data by drafting a prompt in the specified section. 
Use the $ symbol to include variables. It's beneficial to explicitly mention these variables for more efficient code generation. 
Submit your prompt using the button located in the bottom right corner.

<center>
<img
  src={require('/img/tutorial_prompt.png').default}
  alt="Write Prompt"
  style={{ width: "auto", height: "380px" }}
/>
</center>

Review the generated code and execute the workflow to process the data. 
You can view the results in the Display module or the output section.

<center>
<img
  src={require('/img/tutorial_display.png').default}
  alt="Check Results"
  style={{ width: "auto", height: "480px" }}
/>
</center>

### Step 3: Visualize data with Visualize module

Lastly, it's time to visualize the cleaned data. Connect the Transform module's output to the Chart module. Choose a chart type from the dropdown menu and detail your visualization preferences in a prompt. Submitting this prompt will generate a pretty pie chart.

<center>
<img
  src={require('/img/tutorial_chart.png').default}
  alt="Visualize Results"
  style={{ width: "auto", height: "380px" }}
/>
</center>
