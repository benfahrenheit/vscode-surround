"use strict";

import * as surround from "./surround";
import * as vscode from "vscode";

/**
 * Iterate over all of the selections in the text editor and swap the
 * quotes around.
 */
function swapSelections(editor: vscode.TextEditor) {
    editor.edit((e) => {
        editor.selections.forEach((selection, index) => {
            const text = editor.document.getText(selection);
            e.replace(selection, surround.swapQuotes(text));
        });
    });
}

/**
 * Try to find the quotes that are enclosing the current cursor position
 * and swap them.
 */
function swapAtCursor(editor: vscode.TextEditor) {
    // Grab the current line from the document so we can scan for quotes.
    editor.edit((e) => {
        const line = editor.document.lineAt(editor.selection.active).text;
        const entireLine = new vscode.Range(editor.selection.active.line, 0,
                                            editor.selection.active.line, line.length);
        e.replace(entireLine, surround.swapNearestEnclosingQuotes(line, editor.selection.active.character));
    });
}

/**
 * Determines whether the text editor has any active selection
 * 
 * @return true if there are one or more active selections; false otherwise
 */
function hasActiveSelections(editor: vscode.TextEditor): boolean {
    if (editor.selections.length > 1) {
        return true;
    }

    // As far as I know, this isn't possible. Even when there's no selection, there
    // is a single selection of zero length. Checking just in case.
    if (editor.selections.length === 0) {
        return false;
    }

    return !(editor.selection.isEmpty);
}

/**
 * Grabs all of the selections in the active text editor and tries to swap the
 * quotes.
 */
export function swapQuotes() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        // If there are active selections, then operate on those. Otherwise,
        // try to figure out what to work on based on the cursor position.
        if (hasActiveSelections(editor)) {
            swapSelections(editor);
        } else {
            swapAtCursor(editor);
        }
    }
}

/**
 * Called by vscode the first time this extension is activated.
 *
 * @context Data that private to this extension
 */
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand("extension.swapQuotes", () => {
            swapQuotes();
        })
    );
}

/**
 * Called by vscode when the extension is deactivated for the last time.
 */
export function deactivate() {
}