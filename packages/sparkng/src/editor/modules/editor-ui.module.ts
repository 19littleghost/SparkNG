import { NgModule } from '@angular/core';
import { EditorBlockControlsUI, EditorContextToolbarUI, EditorToolbarUI } from '../components/ui/editor-ui';

const UI_COMPONENTS = [EditorToolbarUI, EditorContextToolbarUI, EditorBlockControlsUI];

@NgModule({
    imports: [...UI_COMPONENTS],
    exports: [...UI_COMPONENTS]
})
export class EditorUIModule {}
