# Context Visualization

## Overview

🔗 First you can examine the project in [live](https://context-visualization-eminebozdag.vercel.app/).

If you're new to [Context](https://reactjs.org/docs/context.html), **context-visualization** is prepared for you to visualize React's Context structure. You can use it as functionally as you want later, but for now I'm keeping it as simple as possible so you can easily understand the logic.

## Usage

It holds a message and setMessage in the MessageContext. I have provided the message and setMessage for only child1 and its subchild (can be chained as desired) components. But there is no such provide in child2.
So while it is possible to update the message when clicking on child1 and its subschilds, it is not possible for child2 nor its subschilds. Do not hesitate to apply it yourself, you will be able to see the difference by trying it.

## Clone & Download

Press `.` to review editor version.

```
$ git clone https://github.com/eminebozdag/context-visualization.git
$ cd context-visualization

$ yarn install
$ yarn start
```
