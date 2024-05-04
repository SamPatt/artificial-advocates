# Artificial Advocates: Biasing Democratic Feedback using AI

This is a AI x Democracy hackathon project. WIP.

## Problem

Democracies require systems of feedback from citizens to the government. The further away regular citizens are from having their voices heard, the more likely their needs aren't being properly represented.

Many current systems, such as the US Federal Register, allow for electronic comments on proposed rules. An AI system could monitor for new proposed rules, craft comments which introduce a specific bias, and file these comments en masse.

If the comments are indistinguishable from real citizens, this may succeed in introducing bias, at least for some period of time. It seems likely that eventually these campaigns will be recognized and force a change in the process for submitting comments.

## Project Plan
* Find a suitable example proposed rule in the Federal Register and download the comments
  * Stretch goal - include an EU example as well
* Create an AI prompt which can use a sampling of these comments to mimic them (while introducing bias) and create a large set of AI comments
  * Prompt can be made to select some random comments as
  templates
* Create a website which displays both the original comments and the AI comments and allows users to select if they believe the comments are real or fake.
* Monitor the responses to generate data about how well humans can spot fake comments.
* Determine time and cost needed to equal or exceed existing human comments over given timeframe
  * Two month timeframe initially
  * Current token cost with open source model, extrapolate out
