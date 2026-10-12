export const style = /*css*/ `
    /*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
    .ql-container {
        box-sizing: border-box;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 13px;
        height: 100%;
        margin: 0;
        position: relative;
    }
    .ql-container.ql-disabled .ql-tooltip {
        visibility: hidden;
    }
    .ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
        pointer-events: none;
    }
    .ql-clipboard {
        inset-inline-start: -100000px;
        height: 1px;
        overflow-y: hidden;
        position: absolute;
        top: 50%;
    }
    .ql-clipboard p {
        margin: 0;
        padding: 0;
    }
    .ql-editor {
        box-sizing: border-box;
        line-height: 1.42;
        height: 100%;
        outline: none;
        overflow-y: auto;
        padding: 12px 15px;
        tab-size: 4;
        -moz-tab-size: 4;
        text-align: left;
        white-space: pre-wrap;
        word-wrap: break-word;
    }
    .ql-editor > * {
        cursor: text;
    }
    .ql-editor p,
    .ql-editor ol,
    .ql-editor ul,
    .ql-editor pre,
    .ql-editor blockquote,
    .ql-editor h1,
    .ql-editor h2,
    .ql-editor h3,
    .ql-editor h4,
    .ql-editor h5,
    .ql-editor h6 {
        margin: 0;
        padding: 0;
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol,
    .ql-editor ul {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol > li,
    .ql-editor ul > li {
        list-style-type: none;
    }
    .ql-editor ul > li::before {
        content: '\\2022';
    }
    .ql-editor ul[data-checked='true'],
    .ql-editor ul[data-checked='false'] {
        pointer-events: none;
    }
    .ql-editor ul[data-checked='true'] > li *,
    .ql-editor ul[data-checked='false'] > li * {
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before,
    .ql-editor ul[data-checked='false'] > li::before {
        color: #777;
        cursor: pointer;
        pointer-events: all;
    }
    .ql-editor ul[data-checked='true'] > li::before {
        content: '\\2611';
    }
    .ql-editor ul[data-checked='false'] > li::before {
        content: '\\2610';
    }
    .ql-editor li::before {
        display: inline-block;
        white-space: nowrap;
        width: 1.2rem;
    }
    .ql-editor li:not(.ql-direction-rtl)::before {
        margin-inline-start: -1.5rem;
        margin-inline-end: 0.3rem;
        text-align: right;
    }
    .ql-editor li.ql-direction-rtl::before {
        margin-inline-start: 0.3rem;
        margin-inline-end: -1.5rem;
    }
    .ql-editor ol li:not(.ql-direction-rtl),
    .ql-editor ul li:not(.ql-direction-rtl) {
        padding-inline-start: 1.5rem;
    }
    .ql-editor ol li.ql-direction-rtl,
    .ql-editor ul li.ql-direction-rtl {
        padding-inline-end: 1.5rem;
    }
    .ql-editor ol li {
        counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
        counter-increment: list-0;
    }
    .ql-editor ol li:before {
        content: counter(list-0, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-increment: list-1;
    }
    .ql-editor ol li.ql-indent-1:before {
        content: counter(list-1, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-1 {
        counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-2 {
        counter-increment: list-2;
    }
    .ql-editor ol li.ql-indent-2:before {
        content: counter(list-2, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-2 {
        counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-3 {
        counter-increment: list-3;
    }
    .ql-editor ol li.ql-indent-3:before {
        content: counter(list-3, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-3 {
        counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-4 {
        counter-increment: list-4;
    }
    .ql-editor ol li.ql-indent-4:before {
        content: counter(list-4, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-4 {
        counter-reset: list-5 list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-5 {
        counter-increment: list-5;
    }
    .ql-editor ol li.ql-indent-5:before {
        content: counter(list-5, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-5 {
        counter-reset: list-6 list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-6 {
        counter-increment: list-6;
    }
    .ql-editor ol li.ql-indent-6:before {
        content: counter(list-6, decimal) '. ';
    }
    .ql-editor ol li.ql-indent-6 {
        counter-reset: list-7 list-8 list-9;
    }
    .ql-editor ol li.ql-indent-7 {
        counter-increment: list-7;
    }
    .ql-editor ol li.ql-indent-7:before {
        content: counter(list-7, lower-alpha) '. ';
    }
    .ql-editor ol li.ql-indent-7 {
        counter-reset: list-8 list-9;
    }
    .ql-editor ol li.ql-indent-8 {
        counter-increment: list-8;
    }
    .ql-editor ol li.ql-indent-8:before {
        content: counter(list-8, lower-roman) '. ';
    }
    .ql-editor ol li.ql-indent-8 {
        counter-reset: list-9;
    }
    .ql-editor ol li.ql-indent-9 {
        counter-increment: list-9;
    }
    .ql-editor ol li.ql-indent-9:before {
        content: counter(list-9, decimal) '. ';
    }
    .ql-editor .ql-video {
        display: block;
        max-width: 100%;
    }
    .ql-editor .ql-video.ql-align-center {
        margin: 0 auto;
    }
    .ql-editor .ql-video.ql-align-right {
        margin: 0 0 0 auto;
    }
    .ql-editor .ql-bg-black {
        background: #000;
    }
    .ql-editor .ql-bg-red {
        background: #e60000;
    }
    .ql-editor .ql-bg-orange {
        background: #f90;
    }
    .ql-editor .ql-bg-yellow {
        background: #ff0;
    }
    .ql-editor .ql-bg-green {
        background: #008a00;
    }
    .ql-editor .ql-bg-blue {
        background: #06c;
    }
    .ql-editor .ql-bg-purple {
        background: #93f;
    }
    .ql-editor .ql-color-white {
        color: #fff;
    }
    .ql-editor .ql-color-red {
        color: #e60000;
    }
    .ql-editor .ql-color-orange {
        color: #f90;
    }
    .ql-editor .ql-color-yellow {
        color: #ff0;
    }
    .ql-editor .ql-color-green {
        color: #008a00;
    }
    .ql-editor .ql-color-blue {
        color: #06c;
    }
    .ql-editor .ql-color-purple {
        color: #93f;
    }
    .ql-editor .ql-font-serif {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-editor .ql-font-monospace {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-editor .ql-size-small {
        font-size: 0.75rem;
    }
    .ql-editor .ql-size-large {
        font-size: 1.5rem;
    }
    .ql-editor .ql-size-huge {
        font-size: 2.5rem;
    }
    .ql-editor .ql-direction-rtl {
        direction: rtl;
        text-align: inherit;
    }
    .ql-editor .ql-align-center {
        text-align: center;
    }
    .ql-editor .ql-align-justify {
        text-align: justify;
    }
    .ql-editor .ql-align-right {
        text-align: right;
    }
    .ql-editor.ql-blank::before {
        color: dt('form.field.placeholder.color');
        content: attr(data-placeholder);
        font-style: italic;
        inset-inline-start: 15px;
        pointer-events: none;
        position: absolute;
        inset-inline-end: 15px;
    }
    .ql-snow.ql-toolbar:after,
    .ql-snow .ql-toolbar:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow.ql-toolbar button,
    .ql-snow .ql-toolbar button {
        background: none;
        border: none;
        cursor: pointer;
        display: inline-block;
        float: left;
        height: 24px;
        padding-block: 3px;
        padding-inline: 5px;
        width: 28px;
    }
    .ql-snow.ql-toolbar button svg,
    .ql-snow .ql-toolbar button svg {
        float: left;
        height: 100%;
    }
    .ql-snow.ql-toolbar button:active:hover,
    .ql-snow .ql-toolbar button:active:hover {
        outline: none;
    }
    .ql-snow.ql-toolbar input.ql-image[type='file'],
    .ql-snow .ql-toolbar input.ql-image[type='file'] {
        display: none;
    }
    .ql-snow.ql-toolbar button:hover,
    .ql-snow .ql-toolbar button:hover,
    .ql-snow.ql-toolbar button:focus,
    .ql-snow .ql-toolbar button:focus,
    .ql-snow.ql-toolbar button.ql-active,
    .ql-snow .ql-toolbar button.ql-active,
    .ql-snow.ql-toolbar .ql-picker-label:hover,
    .ql-snow .ql-toolbar .ql-picker-label:hover,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active,
    .ql-snow.ql-toolbar .ql-picker-item:hover,
    .ql-snow .ql-toolbar .ql-picker-item:hover,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
        color: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
    .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
        fill: #06c;
    }
    .ql-snow.ql-toolbar button:hover .ql-stroke,
    .ql-snow .ql-toolbar button:hover .ql-stroke,
    .ql-snow.ql-toolbar button:focus .ql-stroke,
    .ql-snow .ql-toolbar button:focus .ql-stroke,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .ql-snow .ql-toolbar button.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
    .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
    .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
    .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
        stroke: #06c;
    }
    @media (pointer: coarse) {
        .ql-snow.ql-toolbar button:hover:not(.ql-active),
        .ql-snow .ql-toolbar button:hover:not(.ql-active) {
            color: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
            fill: #444;
        }
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
        .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
        .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
            stroke: #444;
        }
    }
    .ql-snow {
        box-sizing: border-box;
    }
    .ql-snow * {
        box-sizing: border-box;
    }
    .ql-snow .ql-hidden {
        display: none;
    }
    .ql-snow .ql-out-bottom,
    .ql-snow .ql-out-top {
        visibility: hidden;
    }
    .ql-snow .ql-tooltip {
        position: absolute;
        transform: translateY(10px);
    }
    .ql-snow .ql-tooltip a {
        cursor: pointer;
        text-decoration: none;
    }
    .ql-snow .ql-tooltip.ql-flip {
        transform: translateY(-10px);
    }
    .ql-snow .ql-formats {
        display: inline-block;
        vertical-align: middle;
    }
    .ql-snow .ql-formats:after {
        clear: both;
        content: '';
        display: table;
    }
    .ql-snow .ql-stroke {
        fill: none;
        stroke: #444;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
    }
    .ql-snow .ql-stroke-miter {
        fill: none;
        stroke: #444;
        stroke-miterlimit: 10;
        stroke-width: 2;
    }
    .ql-snow .ql-fill,
    .ql-snow .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow .ql-empty {
        fill: none;
    }
    .ql-snow .ql-even {
        fill-rule: evenodd;
    }
    .ql-snow .ql-thin,
    .ql-snow .ql-stroke.ql-thin {
        stroke-width: 1;
    }
    .ql-snow .ql-transparent {
        opacity: 0.4;
    }
    .ql-snow .ql-direction svg:last-child {
        display: none;
    }
    .ql-snow .ql-direction.ql-active svg:last-child {
        display: inline;
    }
    .ql-snow .ql-direction.ql-active svg:first-child {
        display: none;
    }
    .ql-snow .ql-editor h1 {
        font-size: 2rem;
    }
    .ql-snow .ql-editor h2 {
        font-size: 1.5rem;
    }
    .ql-snow .ql-editor h3 {
        font-size: 1.17rem;
    }
    .ql-snow .ql-editor h4 {
        font-size: 1rem;
    }
    .ql-snow .ql-editor h5 {
        font-size: 0.83rem;
    }
    .ql-snow .ql-editor h6 {
        font-size: 0.67rem;
    }
    .ql-snow .ql-editor a {
        text-decoration: underline;
    }
    .ql-snow .ql-editor blockquote {
        border-inline-start: 4px solid #ccc;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding-inline-start: 16px;
    }
    .ql-snow .ql-editor code,
    .ql-snow .ql-editor pre {
        background: #f0f0f0;
        border-radius: 3px;
    }
    .ql-snow .ql-editor pre {
        white-space: pre-wrap;
        margin-block-end: 5px;
        margin-block-start: 5px;
        padding: 5px 10px;
    }
    .ql-snow .ql-editor code {
        font-size: 85%;
        padding: 2px 4px;
    }
    .ql-snow .ql-editor pre.ql-syntax {
        background: #23241f;
        color: #f8f8f2;
        overflow: visible;
    }
    .ql-snow .ql-editor img {
        max-width: 100%;
    }
    .ql-snow .ql-picker {
        color: #444;
        display: inline-block;
        float: left;
        inset-inline-start: 0;
        font-size: 14px;
        font-weight: 500;
        height: 24px;
        position: relative;
        vertical-align: middle;
    }
    .ql-snow .ql-picker-label {
        cursor: pointer;
        display: inline-block;
        height: 100%;
        padding-inline-start: 8px;
        padding-inline-end: 2px;
        position: relative;
        width: 100%;
    }
    .ql-snow .ql-picker-label::before {
        display: inline-block;
        line-height: 22px;
    }
    .ql-snow .ql-picker-options {
        background: #fff;
        display: none;
        min-width: 100%;
        padding: 4px 8px;
        position: absolute;
        white-space: nowrap;
    }
    .ql-snow .ql-picker-options .ql-picker-item {
        cursor: pointer;
        display: block;
        padding-block-end: 5px;
        padding-block-start: 5px;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: #ccc;
        z-index: 2;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: #ccc;
    }
    .ql-snow .ql-picker.ql-expanded .ql-picker-options {
        display: block;
        margin-block-start: -1px;
        top: 100%;
        z-index: 1;
    }
    .ql-snow .ql-color-picker,
    .ql-snow .ql-icon-picker {
        width: 28px;
    }
    .ql-snow .ql-color-picker .ql-picker-label,
    .ql-snow .ql-icon-picker .ql-picker-label {
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-label svg,
    .ql-snow .ql-icon-picker .ql-picker-label svg {
        inset-inline-end: 4px;
    }
    .ql-snow .ql-icon-picker .ql-picker-options {
        padding: 4px 0;
    }
    .ql-snow .ql-icon-picker .ql-picker-item {
        height: 24px;
        width: 24px;
        padding: 2px 4px;
    }
    .ql-snow .ql-color-picker .ql-picker-options {
        padding: 3px 5px;
        width: 152px;
    }
    .ql-snow .ql-color-picker .ql-picker-item {
        border: 1px solid transparent;
        float: left;
        height: 16px;
        margin: 2px;
        padding: 0;
        width: 16px;
    }
    .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
        position: absolute;
        margin-block-start: -9px;
        inset-inline-end: 0;
        top: 50%;
        width: 18px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
        content: attr(data-label);
    }
    .ql-snow .ql-picker.ql-header {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        content: 'Heading 1';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        content: 'Heading 2';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        content: 'Heading 3';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        content: 'Heading 4';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        content: 'Heading 5';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        content: 'Heading 6';
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
        font-size: 2rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
        font-size: 1.5rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
        font-size: 1.17rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
        font-size: 1rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
        font-size: 0.83rem;
    }
    .ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
        font-size: 0.67rem;
    }
    .ql-snow .ql-picker.ql-font {
        width: 108px;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item::before {
        content: 'Sans Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        content: 'Serif';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        content: 'Monospace';
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
        font-family:
            Georgia,
            Times New Roman,
            serif;
    }
    .ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
        font-family:
            Monaco,
            Courier New,
            monospace;
    }
    .ql-snow .ql-picker.ql-size {
        width: 98px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item::before {
        content: 'Normal';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        content: 'Small';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        content: 'Large';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        content: 'Huge';
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
        font-size: 10px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
        font-size: 18px;
    }
    .ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
        font-size: 32px;
    }
    .ql-snow .ql-color-picker.ql-background .ql-picker-item {
        background: #fff;
    }
    .ql-snow .ql-color-picker.ql-color .ql-picker-item {
        background: #000;
    }
    .ql-toolbar.ql-snow {
        border: 1px solid #ccc;
        box-sizing: border-box;
        font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
        padding: 8px;
    }
    .ql-toolbar.ql-snow .ql-formats {
        margin-inline-end: 15px;
    }
    .ql-toolbar.ql-snow .ql-picker-label {
        border: 1px solid transparent;
    }
    .ql-toolbar.ql-snow .ql-picker-options {
        border: 1px solid transparent;
        box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        border-color: #ccc;
    }
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
    .ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
        border-color: #000;
    }
    .ql-toolbar.ql-snow + .ql-container.ql-snow {
        border-block-start: 0;
    }
    .ql-snow .ql-tooltip {
        background: #fff;
        border: 1px solid #ccc;
        box-shadow: 0 0 5px #ddd;
        color: #444;
        padding: 5px 12px;
        white-space: nowrap;
    }
    .ql-snow .ql-tooltip::before {
        content: 'Visit URL:';
        line-height: 26px;
        margin-inline-end: 8px;
    }
    .ql-snow .ql-tooltip input[type='text'] {
        display: none;
        border: 1px solid #ccc;
        font-size: 13px;
        height: 26px;
        margin: 0;
        padding: 3px 5px;
        width: 170px;
    }
    .ql-snow .ql-tooltip a.ql-preview {
        display: inline-block;
        max-width: 200px;
        overflow-x: hidden;
        text-overflow: ellipsis;
        vertical-align: top;
    }
    .ql-snow .ql-tooltip a.ql-action::after {
        border-inline-end: 1px solid #ccc;
        content: 'Edit';
        margin-inline-start: 16px;
        padding-inline-end: 8px;
    }
    .ql-snow .ql-tooltip a.ql-remove::before {
        content: 'Remove';
        margin-inline-start: 8px;
    }
    .ql-snow .ql-tooltip a {
        line-height: 26px;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-preview,
    .ql-snow .ql-tooltip.ql-editing a.ql-remove {
        display: none;
    }
    .ql-snow .ql-tooltip.ql-editing input[type='text'] {
        display: inline-block;
    }
    .ql-snow .ql-tooltip.ql-editing a.ql-action::after {
        border-inline-end: 0;
        content: 'Save';
        padding-inline-end: 0;
    }
    .ql-snow .ql-tooltip[data-mode='link']::before {
        content: 'Enter link:';
    }
    .ql-snow .ql-tooltip[data-mode='formula']::before {
        content: 'Enter formula:';
    }
    .ql-snow .ql-tooltip[data-mode='video']::before {
        content: 'Enter video:';
    }
    .ql-snow a {
        color: #06c;
    }
    .ql-container.ql-snow {
        border: 1px solid #ccc;
    }

    .p-editor {
        display: block;
    }

    .p-editor .p-editor-toolbar {
        background: dt('editor.toolbar.background');
        border-start-end-radius: dt('editor.toolbar.border.radius');
        border-start-start-radius: dt('editor.toolbar.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow {
        border: 1px solid dt('editor.toolbar.border.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-stroke {
        stroke: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-fill {
        fill: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
        border: 0 none;
        color: dt('editor.toolbar.item.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label:hover .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
        background: dt('editor.overlay.background');
        border: 1px solid dt('editor.overlay.border.color');
        box-shadow: dt('editor.overlay.shadow');
        border-radius: dt('editor.overlay.border.radius');
        padding: dt('editor.overlay.padding');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item {
        color: dt('editor.overlay.option.color');
        border-radius: dt('editor.overlay.option.border.radius');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options .ql-picker-item:hover {
        background: dt('editor.overlay.option.focus.background');
        color: dt('editor.overlay.option.focus.color');
    }

    .p-editor .p-editor-toolbar.ql-snow .ql-picker.ql-expanded:not(.ql-color-picker, .ql-icon-picker) .ql-picker-item {
        padding: dt('editor.overlay.option.padding');
    }

    .p-editor .p-editor-content {
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .p-editor-content.ql-snow {
        border: 1px solid dt('editor.content.border.color');
    }

    .p-editor .p-editor-content .ql-editor {
        background: dt('editor.content.background');
        color: dt('editor.content.color');
        border-end-end-radius: dt('editor.content.border.radius');
        border-end-start-radius: dt('editor.content.border.radius');
    }

    .p-editor .ql-snow.ql-toolbar button:hover,
    .p-editor .ql-snow.ql-toolbar button:focus {
        color: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-stroke,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-stroke {
        stroke: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button:hover .ql-fill,
    .p-editor .ql-snow.ql-toolbar button:focus .ql-fill {
        fill: dt('editor.toolbar.item.hover.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
        color: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke {
        stroke: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
        fill: dt('editor.toolbar.item.active.color');
    }

    .p-editor .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-picker-label,
    .p-editor .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-picker-label {
        color: dt('editor.toolbar.item.active.color');
    }

    /* ======================================================== */
    /* Modern Compound TextEditor & Block Editor Styles         */
    /* ======================================================== */

    :root,
    .p-text-editor,
    .p-text-editor-root {
        --p-text-editor-corner-radius: var(--p-editor-content-border-radius, var(--p-content-border-radius, var(--p-border-radius-md, 6px)));
        --p-text-editor-divider: var(--p-editor-content-border-color, var(--p-content-border-color, var(--p-surface-200, #e2e8f0)));
        --p-text-editor-muted: var(--p-editor-toolbar-item-color, var(--p-text-muted-color, var(--p-surface-500, #64748b)));
        --p-text-editor-foreground: var(--p-editor-content-color, var(--p-text-color, var(--p-surface-900, #0f172a)));
        --p-text-editor-foreground-emphasis: var(--p-editor-toolbar-item-hover-color, var(--p-text-hover-color, var(--p-surface-800, #1e293b)));
        --p-text-editor-foreground-highlight: var(--p-editor-toolbar-item-active-color, var(--p-highlight-color, var(--p-primary-color, #3b82f6)));
        --p-text-editor-background: var(--p-editor-content-background, var(--p-content-background, var(--p-surface-0, #ffffff)));
        --p-text-editor-background-emphasis: var(--p-editor-overlay-option-focus-background, var(--p-content-hover-background, var(--p-surface-100, #f1f5f9)));
        --p-text-editor-background-highlight: var(--p-highlight-background, var(--p-primary-50, #eff6ff));
        --p-text-editor-accent: var(--p-primary-color, #3b82f6);
        --p-text-editor-accent-contrast: var(--p-primary-contrast-color, #ffffff);
        --p-text-editor-selection-background: var(--p-primary-color, #3b82f6);
        --p-text-editor-danger: #ef4444;
        --p-text-editor-overlay-shadow: var(--p-editor-overlay-shadow, var(--p-overlay-popover-shadow, 0 4px 12px rgba(0, 0, 0, 0.15)));
        --p-text-editor-disabled-opacity: 0.6;
        --p-text-editor-toolbar-height: 44px;
        --p-text-editor-focus-ring-width: var(--p-focus-ring-width, 2px);
        --p-text-editor-focus-ring-style: solid;
        --p-text-editor-focus-ring-color: var(--p-focus-ring-color, var(--p-primary-color, #3b82f6));
        --p-text-editor-focus-ring-offset: 2px;
        --p-text-editor-focus-ring-shadow: none;
    }

    .p-dark,
    .p-dark .p-text-editor,
    .p-dark .p-text-editor-root {
        --p-text-editor-divider: var(--p-editor-content-border-color, var(--p-content-border-color, var(--p-surface-700, #334155)));
        --p-text-editor-muted: var(--p-editor-toolbar-item-color, var(--p-text-muted-color, var(--p-surface-400, #94a3b8)));
        --p-text-editor-foreground: var(--p-editor-content-color, var(--p-text-color, var(--p-surface-100, #f1f5f9)));
        --p-text-editor-foreground-emphasis: var(--p-editor-toolbar-item-hover-color, var(--p-text-hover-color, var(--p-surface-50, #f8fafc)));
        --p-text-editor-background: var(--p-editor-content-background, var(--p-content-background, var(--p-surface-900, #0f172a)));
        --p-text-editor-background-emphasis: var(--p-editor-overlay-option-focus-background, var(--p-content-hover-background, var(--p-surface-800, #1e293b)));
        --p-text-editor-background-highlight: var(--p-highlight-background, rgba(59, 130, 246, 0.16));
    }

    @supports (color: color-mix(in lab,red,red)){
        :root,
        .p-text-editor,
        .p-text-editor-root {
            --p-text-editor-selection-background: color-mix(in srgb, var(--p-primary-color, #3b82f6) 25%, transparent);
        }
    }

    .p-text-editor,
    .p-text-editor-root {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        border-radius: var(--p-text-editor-corner-radius);
        border: 1px solid var(--p-text-editor-divider);
        overflow: hidden;
        padding: 0;
        background-color: var(--p-text-editor-background);
        color: var(--p-text-editor-foreground);
    }

    .p-text-editor[data-disabled="true"],
    .p-text-editor-root[data-disabled="true"],
    .p-text-editor.p-disabled,
    .p-text-editor-root.p-disabled {
        opacity: var(--p-text-editor-disabled-opacity);
        pointer-events: none;
    }

    .p-text-editor-toolbar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem 0.75rem;
        border-bottom: 1px solid var(--p-text-editor-divider);
        background: var(--p-text-editor-background);
        user-select: none;
        z-index: 2;
    }

    .p-text-editor-toolbar-group {
        display: inline-flex;
        align-items: center;
        gap: 0.125rem;
    }

    .p-text-editor-toolbar-divider {
        width: 1px;
        height: 1.25rem;
        margin: 0 0.25rem;
        background: var(--p-text-editor-divider);
    }

    .p-text-editor-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2rem;
        height: 2rem;
        padding: 0 0.5rem;
        border: 0 none;
        border-radius: var(--p-text-editor-corner-radius);
        background: transparent;
        color: var(--p-text-editor-muted);
        font-size: 0.875rem;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.15s, color 0.15s;
        user-select: none;
        outline: none;
    }

    .p-text-editor-btn svg {
        width: 1rem;
        height: 1rem;
        flex-shrink: 0;
    }

    .p-text-editor-btn:hover:not(:disabled) {
        background: var(--p-text-editor-background-emphasis);
        color: var(--p-text-editor-foreground);
    }

    .p-text-editor-btn:focus-visible {
        outline: var(--p-text-editor-focus-ring-width, 2px) var(--p-text-editor-focus-ring-style, solid) var(--p-text-editor-focus-ring-color, #2563eb);
        outline-offset: 1px;
    }

    .p-text-editor-btn[aria-pressed="true"],
    .p-text-editor-btn.p-active {
        background: var(--p-text-editor-background-highlight);
        color: var(--p-text-editor-foreground-highlight);
    }

    .p-text-editor-btn:disabled {
        opacity: var(--p-text-editor-disabled-opacity);
        cursor: not-allowed;
    }

    .p-text-editor-select {
        height: 2rem;
        padding: 0 0.625rem;
        border: 1px solid var(--p-text-editor-divider);
        border-radius: var(--p-text-editor-corner-radius);
        background: var(--p-text-editor-background);
        color: var(--p-text-editor-foreground);
        font-size: 0.875rem;
        outline: none;
        cursor: pointer;
        transition: border-color 0.15s, box-shadow 0.15s;
    }

    .p-text-editor-select:focus-visible {
        border-color: var(--p-text-editor-accent);
        outline: var(--p-text-editor-focus-ring-width, 2px) var(--p-text-editor-focus-ring-style, solid) var(--p-text-editor-focus-ring-color, #2563eb);
        outline-offset: 1px;
    }

    .p-text-editor-body {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1 1 auto;
        min-height: 180px;
        overflow: auto;
    }

    .p-text-editor-content {
        flex: 1 1 auto;
        padding: 1rem;
        min-height: 180px;
        outline: 0 none;
        line-height: 1.6;
        color: var(--p-text-editor-foreground);
        white-space: pre-wrap;
        overflow-wrap: break-word;
    }

    .p-text-editor[data-mode="block"] .p-text-editor-content,
    .p-text-editor-root[data-mode="block"] .p-text-editor-content {
        padding-inline-start: 3.5rem;
    }

    .p-text-editor-content:empty::before {
        content: attr(data-placeholder);
        color: var(--p-text-editor-muted);
        pointer-events: none;
        display: block;
    }

    .p-text-editor-content ::selection,
    .p-text-editor-selection {
        background: var(--p-text-editor-selection-background);
    }

    .p-text-editor-content > p,
    .p-text-editor-content > h1,
    .p-text-editor-content > h2,
    .p-text-editor-content > h3,
    .p-text-editor-content > h4,
    .p-text-editor-content > h5,
    .p-text-editor-content > h6,
    .p-text-editor-content > blockquote,
    .p-text-editor-content > pre,
    .p-text-editor-content > ul,
    .p-text-editor-content > ol,
    .p-text-editor-content > hr {
        margin-block: 0.75rem;
    }

    .p-text-editor-content > :first-child {
        margin-block-start: 0;
    }

    .p-text-editor-content > :last-child {
        margin-block-end: 0;
    }

    .p-text-editor-content h1,
    .p-text-editor-content h2,
    .p-text-editor-content h3,
    .p-text-editor-content h4,
    .p-text-editor-content h5,
    .p-text-editor-content h6 {
        margin: 0;
        font-weight: 600;
        line-height: 1.4;
        color: var(--p-text-editor-foreground);
    }

    .p-text-editor-content h1 { font-size: 2rem; }
    .p-text-editor-content h2 { font-size: 1.5rem; }
    .p-text-editor-content h3 { font-size: 1.25rem; }
    .p-text-editor-content h4 { font-size: 1.125rem; }
    .p-text-editor-content h5 { font-size: 1rem; }
    .p-text-editor-content h6 { font-size: 0.875rem; }

    .p-text-editor-content blockquote {
        border-inline-start: 4px solid var(--p-text-editor-accent);
        margin: 0;
        padding: 0.5rem 1rem;
        background-color: var(--p-text-editor-background-emphasis);
        font-style: italic;
        color: var(--p-text-editor-muted);
        border-radius: 0 var(--p-text-editor-corner-radius) var(--p-text-editor-corner-radius) 0;
    }

    .p-text-editor-content pre {
        background-color: var(--p-text-editor-background-emphasis);
        margin: 0;
        padding: 0.75rem 1rem;
        border-radius: var(--p-text-editor-corner-radius);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.875em;
        overflow-x: auto;
    }

    .p-text-editor-content pre code {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
        font-size: inherit;
    }

    .p-text-editor-content code {
        background-color: var(--p-text-editor-background-emphasis);
        padding: 0.125rem 0.375rem;
        border-radius: var(--p-text-editor-corner-radius);
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 0.875rem;
        margin: 0;
    }

    .p-text-editor-content ul,
    .p-text-editor-content ol {
        margin: 0;
        padding-inline-start: 1.5rem;
    }

    .p-text-editor-content li {
        margin: 0.25rem 0;
    }

    .p-text-editor-content ul { list-style-type: disc; }
    .p-text-editor-content ul ul { list-style-type: circle; }
    .p-text-editor-content ul ul ul { list-style-type: square; }
    .p-text-editor-content ol { list-style-type: decimal; }

    .p-text-editor-content hr {
        border: none;
        border-top: 1px solid var(--p-text-editor-divider);
        margin: 1rem 0;
    }

    .p-text-editor-content a {
        color: var(--p-text-editor-accent);
        text-decoration: underline;
        cursor: pointer;
    }

    .p-text-editor-content a:hover {
        text-decoration: none;
    }

    .p-text-editor-content img {
        max-width: 100%;
        border-radius: var(--p-text-editor-corner-radius);
    }

    .p-text-editor-content table {
        border-collapse: collapse;
        width: 100%;
        margin: 1rem 0;
        table-layout: fixed;
    }

    .p-text-editor-content table td,
    .p-text-editor-content table th {
        border: 1px solid var(--p-text-editor-divider);
        padding: 0.5rem 0.75rem;
        text-align: left;
        position: relative;
    }

    .p-text-editor-content table th {
        background: var(--p-text-editor-background-emphasis);
        font-weight: 600;
    }

    .p-text-editor-content table td p,
    .p-text-editor-content table th p {
        margin: 0;
    }

    /* Task List Checkbox */
    .p-text-editor-content ul[data-p-checked-list] {
        list-style: none;
        padding-inline-start: 0.375rem;
    }

    .p-text-editor-content ul[data-p-checked-list] li[data-p-checked] {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .p-text-editor-content ul[data-p-checked-list] li[data-p-checked] input[type=checkbox] {
        appearance: none;
        width: 1.125rem;
        height: 1.125rem;
        border: 1.5px solid var(--p-text-editor-muted);
        border-radius: 0.25rem;
        background: transparent;
        cursor: pointer;
        margin: 0.2rem 0 0 0;
        position: relative;
        flex-shrink: 0;
        transition: background-color 0.2s ease, border-color 0.2s ease;
    }

    .p-text-editor-content ul[data-p-checked-list] li[data-p-checked] input[type=checkbox]:checked {
        background: var(--p-text-editor-accent);
        border-color: var(--p-text-editor-accent);
    }

    .p-text-editor-content ul[data-p-checked-list] li[data-p-checked] input[type=checkbox]:checked:after {
        content: "";
        position: absolute;
        inset-inline-start: 4px;
        top: 1px;
        width: 4px;
        height: 8px;
        border: solid var(--p-text-editor-accent-contrast);
        border-width: 0 1.5px 1.5px 0;
        transform: rotate(45deg);
    }

    .p-text-editor-content ul[data-p-checked-list] li[data-p-checked=true] > div {
        text-decoration: line-through;
        opacity: 0.6;
    }

    /* Floating Context Toolbar */
    .p-text-editor-context-toolbar,
    .p-text-editor-context-toolbar-more {
        position: fixed;
        z-index: 1200;
        display: flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem;
        background: var(--p-text-editor-background);
        box-shadow: var(--p-text-editor-overlay-shadow);
        border: 1px solid var(--p-text-editor-divider);
        border-radius: var(--p-text-editor-corner-radius);
        animation: p-editor-fade-in 0.15s ease-out;
    }

    .p-text-editor-context-toolbar-more {
        z-index: 1201;
    }

    @keyframes p-editor-fade-in {
        from { opacity: 0; transform: translateY(4px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Block Mode Styles */
    .p-text-editor-block {
        position: relative;
        padding: 0.375rem 0.5rem;
        padding-inline-start: 3.5rem;
        min-height: 2rem;
        border-radius: var(--p-text-editor-corner-radius);
        transition: background 0.12s ease;
    }

    .p-text-editor-block:hover {
        background: var(--p-text-editor-background-emphasis);
    }

    .p-text-editor-block-content {
        outline: none;
        min-height: 1.5rem;
    }

    .p-text-editor-block-controls {
        position: absolute;
        inset-inline-start: 0.5rem;
        top: 0.25rem;
        display: inline-flex;
        align-items: center;
        gap: 0.125rem;
        opacity: 0;
        transition: opacity 0.15s ease;
        z-index: 5;
    }

    .p-text-editor-block:hover .p-text-editor-block-controls,
    .p-text-editor-block-controls.p-active {
        opacity: 1;
    }

    .p-text-editor-block-drag-handle {
        cursor: grab;
        user-select: none;
    }

    .p-text-editor-block-drop-indicator {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background-color: var(--p-text-editor-accent);
        pointer-events: none;
        z-index: 10;
    }

    /* Popovers: Slash Menu, Block Menu, Mention Menu */
    .p-text-editor-popover-menu,
    .p-text-editor-popover-submenu {
        position: fixed;
        background: var(--p-text-editor-background);
        box-shadow: var(--p-text-editor-overlay-shadow);
        border: 1px solid var(--p-text-editor-divider);
        border-radius: var(--p-text-editor-corner-radius);
        min-width: 14rem;
        max-height: 20rem;
        overflow-y: auto;
        outline: none;
        z-index: 1200;
        padding: 0.375rem;
        animation: p-editor-fade-in 0.15s ease-out;
    }

    .p-text-editor-popover-submenu {
        z-index: 1201;
    }

    .p-text-editor-menu-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        border-radius: var(--p-text-editor-corner-radius);
        font-size: 0.875rem;
        color: var(--p-text-editor-foreground);
        cursor: pointer;
        transition: background-color 0.12s, color 0.12s;
        user-select: none;
    }

    .p-text-editor-menu-item:hover,
    .p-text-editor-menu-item.p-focused {
        background: var(--p-text-editor-background-emphasis);
        color: var(--p-text-editor-foreground-emphasis);
    }

    .p-text-editor-menu-item-icon {
        font-size: 1rem;
        color: var(--p-text-editor-muted);
        flex-shrink: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    /* Mention Chip */
    .p-text-editor-mention {
        display: inline-flex;
        align-items: center;
        background: var(--p-text-editor-background-highlight);
        color: var(--p-text-editor-foreground-highlight);
        padding: 0 0.375rem;
        border-radius: var(--p-text-editor-corner-radius);
        font-weight: 500;
        user-select: all;
    }

    /* Navigator Minimap */
    .p-text-editor-navigator {
        position: absolute;
        top: calc(0.75rem + var(--p-text-editor-toolbar-height, 0px));
        inset-inline-end: 0.75rem;
        z-index: 10;
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-items: flex-end;
        padding: 0.25rem;
    }

    .p-text-editor-navigator-bars {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: flex-end;
        cursor: pointer;
        padding: 4px;
        border-radius: var(--p-text-editor-corner-radius);
        background: transparent;
        transition: background-color 0.15s;
    }

    .p-text-editor-navigator-bars:hover {
        background: var(--p-text-editor-background-emphasis);
    }

    .p-text-editor-navigator-bar {
        height: 3px;
        border-radius: 2px;
        background-color: var(--p-text-editor-muted);
        opacity: 0.45;
        transition: opacity 0.15s, background-color 0.15s;
        cursor: pointer;
    }

    .p-text-editor-navigator-bar:hover {
        opacity: 0.85;
    }

    .p-text-editor-navigator-bar[data-active=true] {
        background-color: var(--p-text-editor-accent);
        opacity: 1;
    }

    .p-text-editor-navigator-bar[data-level="1"] { width: 1.25rem; }
    .p-text-editor-navigator-bar[data-level="2"] { width: 1rem; }
    .p-text-editor-navigator-bar[data-level="3"] { width: 0.75rem; }
    .p-text-editor-navigator-bar[data-level="4"] { width: 0.625rem; }
    .p-text-editor-navigator-bar[data-level="5"] { width: 0.5rem; }
    .p-text-editor-navigator-bar[data-level="6"] { width: 0.375rem; }

    .p-text-editor-popover-menu[data-part=navigator-menu] {
        position: absolute;
        inset-inline-end: 0.5rem;
        top: calc(1rem + var(--p-text-editor-toolbar-height, 0px));
        max-height: calc(var(--p-text-editor-body-height, 20rem) - 2rem);
        overflow-y: auto;
        background: var(--p-text-editor-background);
        border: 1px solid var(--p-text-editor-divider);
        border-radius: var(--p-text-editor-corner-radius);
        box-shadow: var(--p-text-editor-overlay-shadow);
        z-index: 12;
    }

    .p-text-editor-navigator-item {
        font-size: 0.75rem;
        color: var(--p-text-editor-muted);
        cursor: pointer;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0.25rem 0.5rem;
        border-radius: var(--p-text-editor-corner-radius);
        transition: color 0.12s, background-color 0.12s;
    }

    .p-text-editor-navigator-item:hover,
    .p-text-editor-navigator-item.p-active {
        color: var(--p-text-editor-accent);
        background: var(--p-text-editor-background-highlight);
    }

    /* Table Controls */
    .p-text-editor-table-controls {
        position: absolute;
        z-index: 10;
        animation: p-editor-fade-in 0.15s ease-out;
    }

    .p-text-editor-table-controls-bar {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        padding: 0.25rem;
        background: var(--p-text-editor-background, #ffffff);
        border: 1px solid var(--p-text-editor-divider, #e2e8f0);
        border-radius: var(--p-text-editor-corner-radius, 6px);
        box-shadow: var(--p-text-editor-overlay-shadow, 0 4px 12px rgba(0, 0, 0, 0.15));
    }

    /* Upload Dropzones */
    .p-text-editor-upload-overlay {
        position: fixed;
        inset: 0;
        z-index: 1200;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.45);
        padding: 1.5rem;
    }

    .p-text-editor-upload-dropzone {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        padding: 2rem 2.5rem;
        border: 2px dashed var(--p-text-editor-divider, #e2e8f0);
        border-radius: var(--p-text-editor-corner-radius, 6px);
        background: var(--p-text-editor-background, #ffffff);
        color: var(--p-text-editor-foreground, #0f172a);
        box-shadow: var(--p-text-editor-overlay-shadow, 0 4px 12px rgba(0, 0, 0, 0.15));
        text-align: center;
        transition: border-color 0.15s, background-color 0.15s;
    }

    .p-text-editor-upload-dropzone:hover {
        border-color: var(--p-text-editor-accent);
        background: var(--p-text-editor-background-emphasis);
    }

    /* Details / Collapsible Block */
    .p-text-editor-details {
        border: 1px solid var(--p-text-editor-divider);
        border-radius: var(--p-text-editor-corner-radius);
        padding: 0.5rem 0.75rem;
        margin-block: 0.75rem;
        background: var(--p-text-editor-background-emphasis);
    }

    .p-text-editor-details > summary {
        font-weight: 600;
        cursor: pointer;
        outline: none;
        user-select: none;
        color: var(--p-text-editor-foreground-emphasis);
    }

    .p-text-editor-details[open] > summary {
        margin-bottom: 0.5rem;
    }

    /* Invisible Characters Plugin */
    .p-text-editor-show-invisibles p::after,
    .p-text-editor-show-invisibles h1::after,
    .p-text-editor-show-invisibles h2::after,
    .p-text-editor-show-invisibles h3::after,
    .p-text-editor-show-invisibles li::after {
        content: ' ¶';
        color: var(--p-text-editor-muted);
        opacity: 0.45;
        font-size: 0.85em;
        user-select: none;
    }

    /* Focus Mode Plugin */
    .p-text-editor-root.p-text-editor-focus-mode {
        box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.4);
        z-index: 1000;
        position: relative;
    }

    /* Print Typography and Elements Visibility */
    @media print {
        .p-text-editor-toolbar,
        .p-text-editor-context-toolbar,
        .p-text-editor-block-controls,
        .p-text-editor-popover-menu,
        .p-text-editor-navigator {
            display: none !important;
        }
        .p-text-editor-root {
            border: none !important;
            box-shadow: none !important;
        }
    }
`;

