import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[pTextEditorToolbarDef]',
    standalone: true
})
export class TextEditorToolbarDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorContextToolbarDef]',
    standalone: true
})
export class TextEditorContextToolbarDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorContextToolbarMoreDef]',
    standalone: true
})
export class TextEditorContextToolbarMoreDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorBlockControlsDef]',
    standalone: true
})
export class TextEditorBlockControlsDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorBlockMenuDef]',
    standalone: true
})
export class TextEditorBlockMenuDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorBlockSubmenuDef]',
    standalone: true
})
export class TextEditorBlockSubmenuDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorSlashMenuDef]',
    standalone: true
})
export class TextEditorSlashMenuDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorMentionMenuDef]',
    standalone: true
})
export class TextEditorMentionMenuDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorTableControlsDef]',
    standalone: true
})
export class TextEditorTableControlsDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorNavigatorMenuDef]',
    standalone: true
})
export class TextEditorNavigatorMenuDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorNavigatorTriggerDef]',
    standalone: true
})
export class TextEditorNavigatorTriggerDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorImageUploadDef]',
    standalone: true
})
export class TextEditorImageUploadDef {
    constructor(public template: TemplateRef<any>) {}
}

@Directive({
    selector: '[pTextEditorDocumentUploadDef]',
    standalone: true
})
export class TextEditorDocumentUploadDef {
    constructor(public template: TemplateRef<any>) {}
}
