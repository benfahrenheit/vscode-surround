"use strict";

import * as surround from "./surround";
import * as vscode from "vscode";

function swapSelections(editor: vscode.TextEditor) {
    editor.edit((e) => {
        editor.selections.forEach((selection, index) => {
            const text = editor.document.getText(selection);
            e.replace(selection, surround.swapQuotes(text));
        });
    });
}

function swapAtCursor(editor: vscode.TextEditor) {

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
        if (editor.selections.length === 0) {
            swapAtCursor(editor);
        } else {
            swapSelections(editor);
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