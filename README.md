# vscode-surround

## What's this? 
This is the beginning of a port of [vim-surround](https://github.com/tpope/vim-surround) to [vscode](https://code.visualstudio.com).

(Really, I just wanted something to switch strings around between single- and double-quotes, as well as something to mess around with vscode extensions.)

If you don't care about all the other fun stuff that vim-surround does, you may be interested in Vane's excellent [es-quotes](https://github.com/vilic/vscode-es-quotes) extension.

## Install

`Ctrl/Cmd + P` in Visual Studio Code, then:

```sh
ext install surround
```

## Usage

### Swapping between single and double quotes
The extension installs a command named "extension.swapQuotes". This will walk each of the selections in the current text editor and convert any surround quotes from single to double, or vice versa. You can invoke this directly (via F1 or ctrl+p), or you can add a
keybinding (I like ctrl+'). Add this to your keybindings.json:

```
    { "key": "ctrl+'",      "command": "extension.swapQuotes",
                               "when": "editorTextFocus" }
```

Only surrounding quotes are swapped (quotes at the beginning and end of the selection). This works nicely with expanding selections (alt+shift+right).
Eventually I'd like the equivalent of cs'", but one thing at a time.

## FAQ

### vim-surround does a lot more than this, dude
Yeah, yeah. Eventually.

### Couldn't you just do this with snippets?
Maybe? I didn't see an obvious way.

### "Frequently" asked, really? This is that thing where you claim people ask lots of questions to make yourself look cool, right?
Shhh.

## License
MIT