"use strict";

import * as surround from "./surround";
import * as vscode from "vscode";

/**
 * Grabs all of the selections in the active text editor and tries to swap the
 * quotes.
 */
export function swapQuotesOnCurrentSelections() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        editor.edit((e) => {
            editor.selections.forEach((selection, index) => {
                const text = editor.document.getText(selection);
                e.replace(selection, surround.swapQuotes(text));
            });
        });
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
            swapQuotesOnCurrentSelections();
        })
    );
}

/**
 * Called by vscode when the extension is deactivated for the last time.
 */
export function deactivate() {
}