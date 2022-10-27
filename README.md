# yumdocs-cli

> A command line interface for Yumdocs, a template engine for Word, PowerPoint and Excel.

## Documentation

Yumdocs is fully documented at https://dev.yumdocs.com.

## License and Copyright

This project is MIT Licensed like its 3rd party components:

- [@xmldom/xmldom](https://github.com/xmldom/xmldom/blob/master/LICENSE)
- [file-saver](https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md)
- [jexl](https://github.com/TomFrost/Jexl/blob/master/LICENSE.txt)
- [jszip](https://github.com/Stuk/jszip/blob/main/LICENSE.markdown)

Copyright (c) 2022 - Jacques L. Chereau. All rights reserved.

## Quick Start

### Prerequisites

Download and install nodeJS v16+ from https://nodejs.org/.

### Installation

Open a terminal window and run:

```bash
npm i -g @yumdocs/yumdocs-cli
```

### Getting started

1) Create a Word document named `input.docx`, type `{{field}}` and save it in the project directory.

2) In the same project directory, create a file named `data.json`, and copy-paste:

```json
{
  "field": "Anything you see fit"
}
```

3) Open a terminal window in the project directory and run `yumdocs ./input.docx ./data.json ./output.docx`.

4) `output.docx` has been generated and the `{{field}}` placeholder has been replaced with `Anything you see fit`.