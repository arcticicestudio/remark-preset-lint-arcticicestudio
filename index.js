/*
 * Copyright (c) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2018-present Sven Greb <code@svengreb.de>
 *
 * Project:    Arctic Ice Studio remark-lint Preset
 * Repository: https://github.com/arcticicestudio/remark-preset-lint-arcticicestudio
 * License:    MIT
 */

/**
 * @file Imports all rule definitions and sets the default parser options. This is the main entry point of the package.
 * @version 0.2.0
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @copyright 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * @copyright 2018-present Sven Greb <code@svengreb.de>
 * @license MIT
 * @see {@link https://github.com/remarkjs/remark-lint remark-lint}
 * @see {@link https://remark.js.org remark}
 * @see {@link https://github.com/remarkjs/remark-lint/blob/master/doc/rules.md#list-of-rules remark-lint Core Rules}
 * @see {@link https://github.com/remarkjs/remark-lint#configuring-remark-lint Configuring remark-lint}
 */

module.exports = {
  plugins: [
    "remark-lint",
    "./rules/blockquotes",
    "./rules/code",
    "./rules/emphasis",
    "./rules/headings",
    "./rules/horizontal-rules",
    "./rules/links",
    "./rules/lists",
    "./rules/naming-conventions",
    "./rules/paragraphs",
    "./rules/raw-html",
    "./rules/strings",
    "./rules/tables",
    "./rules/whitespace"
  ].map(require.resolve)
};