# yumdocs-cli

> A command line interface for yumdocs

## Quick Start

### Installation

```bash
npm i -g @yumdocs/yumdocs-cli
```

### Getting started

1) Create a Word document named `input.docx`, type `{{field}}` and save it in the project directory.

2) Create a file named `data.json`, and copy-paste:

```json
{
  "field": "Anything you see fit"
}
```
Save it in the project directory, along with `input.docx`.

3) Open a terminal window in the project directory and run `yumdocs ./input.docx ./data.json ./output.docx`.

4) `output.docx` has been generated and the `{{field}}` placeholder has been replaced with `Anything you see fit`.