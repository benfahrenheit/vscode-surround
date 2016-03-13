"use strict";

import * as assert from "assert";
import * as surround from "../src/surround";

suite("Surround tests", () => {

    test("Replaces double quotes with single quotes correctly", () => {
        assert.equal("'cat'", surround.swapQuotes("\"cat\""));
    });

    test("Replaces single quotes with double quotes correctly", () => {
        assert.equal("\"cat\"", surround.swapQuotes("'cat'"));
    });

    test("Empty strings are handled correctly", () => {
        assert.equal("''", surround.swapQuotes("\"\""));
        assert.equal("\"\"", surround.swapQuotes("''"));
    });

    test("Swapping isn't fooled be non-surrounding quotes", () => {
        assert.equal("\"Then I said \"Go!\"\"", surround.swapQuotes("'Then I said \"Go!\"'"));
        assert.equal("'I don't think so'", surround.swapQuotes("\"I don't think so\""));
    });

    test("Passed through unchanged without surrounding quotes", () => {
        assert.equal("cat", surround.swapQuotes("cat"));
        assert.equal("6 o'clock", surround.swapQuotes("6 o'clock"));
        assert.equal("Some \"scare\" quotes", surround.swapQuotes("Some \"scare\" quotes"));
    });

});