"use strict";

/**
 * Given a potentially quoted string, swap between single and double
 * quotes. For example:
 * 
 * "cat" becomes 'cat'
 * 'cat' becomes "cat"
 * 
 * @param currentQuote The string whose surrounding quotes should be replaced
 * @return The contents of currentQuote with the surrounding quotes swapped
 */
export function swapQuotes(currentQuote: string): string {
    const matches = /^(["'])((?:(?=(?:\\)*)\\.|.)*?)\1/.exec(currentQuote);
    if (matches) {
        const otherQuote = (matches[1] === "'" ? "\"" : "'");
        return `${otherQuote}${matches[2]}${otherQuote}`;
    } else {
        return currentQuote;
    }
}

/**
 * Given a line and an offset, return a string that swaps the nearest enclosing
 * quotes, if possible
 */
export function swapNearestEnclosingQuotes(line: string, offset: number): string {
    return line;
}