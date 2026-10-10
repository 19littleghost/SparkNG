import type { ElementRef, TemplateRef } from '@angular/core';
import type { OverlayOptions, PassThroughOptions, Translation } from '@openng/sparkng/api';
import type { AccordionPassThrough } from '@openng/sparkng/types/accordion';
import type { AutoCompletePassThrough } from '@openng/sparkng/types/autocomplete';
import type { AvatarPassThrough } from '@openng/sparkng/types/avatar';
import type { AvatarGroupPassThrough } from '@openng/sparkng/types/avatargroup';
import type { BadgePassThrough } from '@openng/sparkng/types/badge';
import type { BlockUIPassThrough } from '@openng/sparkng/types/blockui';
import type { BreadcrumbPassThrough } from '@openng/sparkng/types/breadcrumb';
import type { ButtonPassThrough } from '@openng/sparkng/types/button';
import type { CardPassThrough } from '@openng/sparkng/types/card';
import type { CarouselPassThrough } from '@openng/sparkng/types/carousel';
import type { CascadeSelectPassThrough } from '@openng/sparkng/types/cascadeselect';
import type { CheckboxPassThrough } from '@openng/sparkng/types/checkbox';
import type { ChipPassThrough } from '@openng/sparkng/types/chip';
import type { ColorPickerPassThrough } from '@openng/sparkng/types/colorpicker';
import type { ConfirmDialogPassThrough } from '@openng/sparkng/types/confirmdialog';
import type { ConfirmPopupPassThrough } from '@openng/sparkng/types/confirmpopup';
import type { DialogPassThrough } from '@openng/sparkng/types/dialog';
import type { DividerPassThrough } from '@openng/sparkng/types/divider';
import type { DockPassThrough } from '@openng/sparkng/types/dock';
import type { DrawerPassThrough } from '@openng/sparkng/types/drawer';
import type { EditorPassThrough } from '@openng/sparkng/types/editor';
import type { FieldsetPassThrough } from '@openng/sparkng/types/fieldset';
import type { FileUploadPassThrough } from '@openng/sparkng/types/fileupload';
import type { FloatLabelPassThrough } from '@openng/sparkng/types/floatlabel';
import type { FluidPassThrough } from '@openng/sparkng/types/fluid';
import type { GalleriaPassThrough } from '@openng/sparkng/types/galleria';
import type { IconFieldPassThrough } from '@openng/sparkng/types/iconfield';
import type { IftaLabelPassThrough } from '@openng/sparkng/types/iftalabel';
import type { ImagePassThrough } from '@openng/sparkng/types/image';
import type { ImageComparePassThrough } from '@openng/sparkng/types/imagecompare';
import type { InplacePassThrough } from '@openng/sparkng/types/inplace';
import type { InputGroupPassThrough } from '@openng/sparkng/types/inputgroup';
import type { InputGroupAddonPassThrough } from '@openng/sparkng/types/inputgroupaddon';
import type { InputIconPassThrough } from '@openng/sparkng/types/inputicon';
import type { InputMaskPassThrough } from '@openng/sparkng/types/inputmask';
import type { InputNumberPassThrough } from '@openng/sparkng/types/inputnumber';
import type { InputOtpPassThrough } from '@openng/sparkng/types/inputotp';
import type { InputTextPassThrough } from '@openng/sparkng/types/inputtext';
import type { KnobPassThrough } from '@openng/sparkng/types/knob';
import type { MegaMenuPassThrough } from '@openng/sparkng/types/megamenu';
import type { MenuPassThrough } from '@openng/sparkng/types/menu';
import type { MenubarPassThrough } from '@openng/sparkng/types/menubar';
import type { MessagePassThrough } from '@openng/sparkng/types/message';
import type { MeterGroupPassThrough } from '@openng/sparkng/types/metergroup';
import type { OrderListPassThrough } from '@openng/sparkng/types/orderlist';
import type { OrganizationChartPassThrough } from '@openng/sparkng/types/organizationchart';
import type { OverlayBadgePassThrough } from '@openng/sparkng/types/overlaybadge';
import type { PanelPassThrough } from '@openng/sparkng/types/panel';
import type { PanelMenuPassThrough } from '@openng/sparkng/types/panelmenu';
import type { PopoverPassThrough } from '@openng/sparkng/types/popover';
import type { ProgressBarPassThrough } from '@openng/sparkng/types/progressbar';
import type { ProgressSpinnerPassThrough } from '@openng/sparkng/types/progressspinner';
import type { RadioButtonPassThrough } from '@openng/sparkng/types/radiobutton';
import type { RatingPassThrough } from '@openng/sparkng/types/rating';
import type { VirtualScrollerPassThrough } from '@openng/sparkng/types/scroller';
import type { ScrollPanelPassThrough } from '@openng/sparkng/types/scrollpanel';
import type { ScrollTopPassThrough } from '@openng/sparkng/types/scrolltop';
import type { SelectPassThrough } from '@openng/sparkng/types/select';
import type { SelectButtonPassThrough } from '@openng/sparkng/types/selectbutton';
import type { SkeletonPassThrough } from '@openng/sparkng/types/skeleton';
import type { SliderPassThrough } from '@openng/sparkng/types/slider';
import type { SpeedDialPassThrough } from '@openng/sparkng/types/speeddial';
import type { SplitButtonPassThrough } from '@openng/sparkng/types/splitbutton';
import type { SplitterPassThrough } from '@openng/sparkng/types/splitter';
import type { StepperPassThrough } from '@openng/sparkng/types/stepper';
import type { ColumnFilterPassThrough, TablePassThrough } from '@openng/sparkng/types/table';
import type { TabListPassThrough, TabPanelPassThrough, TabPanelsPassThrough, TabPassThrough, TabsPassThrough } from '@openng/sparkng/types/tabs';
import type { TagPassThrough } from '@openng/sparkng/types/tag';
import type { TerminalPassThrough } from '@openng/sparkng/types/terminal';
import type { TieredMenuPassThrough } from '@openng/sparkng/types/tieredmenu';
import type { TimelinePassThrough } from '@openng/sparkng/types/timeline';
import type { ToastPassThrough } from '@openng/sparkng/types/toast';
import type { ToggleButtonPassThrough } from '@openng/sparkng/types/togglebutton';
import type { ToggleSwitchPassThrough } from '@openng/sparkng/types/toggleswitch';
import type { ToolbarPassThrough } from '@openng/sparkng/types/toolbar';
import type { TreePassThrough } from '@openng/sparkng/types/tree';
import type { TreeSelectPassThrough } from '@openng/sparkng/types/treeselect';
import type { TreeTablePassThrough } from '@openng/sparkng/types/treetable';

/** ZIndex configuration */
export type ZIndex = {
    modal: number;
    overlay: number;
    menu: number;
    tooltip: number;
};

/** Theme configuration */
export type ThemeType = { preset?: any; options?: any } | 'none' | boolean | undefined;

export type ThemeConfigType = {
    theme?: ThemeType;
    csp?: {
        nonce: string | undefined;
    };
};

export interface GlobalPassThrough {
    accordion?: AccordionPassThrough;
    autoComplete?: AutoCompletePassThrough;
    avatar?: AvatarPassThrough;
    avatarGroup?: AvatarGroupPassThrough;
    blockUI?: BlockUIPassThrough;
    breadcrumb?: BreadcrumbPassThrough;
    card?: CardPassThrough;
    carousel?: CarouselPassThrough;
    cascadeSelect?: CascadeSelectPassThrough;
    checkbox?: CheckboxPassThrough;
    chip?: ChipPassThrough;
    colorPicker?: ColorPickerPassThrough;
    columnFilter?: ColumnFilterPassThrough;
    confirmDialog?: ConfirmDialogPassThrough;
    confirmPopup?: ConfirmPopupPassThrough;
    dialog?: DialogPassThrough;
    divider?: DividerPassThrough;
    dock?: DockPassThrough;
    megaMenu?: MegaMenuPassThrough;
    drawer?: DrawerPassThrough;
    editor?: EditorPassThrough;
    fileUpload?: FileUploadPassThrough;
    floatLabel?: FloatLabelPassThrough;
    menu?: MenuPassThrough;
    menubar?: MenubarPassThrough;
    fluid?: FluidPassThrough;
    galleria?: GalleriaPassThrough;
    iconField?: IconFieldPassThrough;
    iftaLabel?: IftaLabelPassThrough;
    inputIcon?: InputIconPassThrough;
    image?: ImagePassThrough;
    imageCompare?: ImageComparePassThrough;
    inplace?: InplacePassThrough;
    inputText?: InputTextPassThrough;
    inputGroup?: InputGroupPassThrough;
    inputGroupAddon?: InputGroupAddonPassThrough;
    inputMask?: InputMaskPassThrough;
    inputNumber?: InputNumberPassThrough;
    inputOtp?: InputOtpPassThrough;
    knob?: KnobPassThrough;
    popover?: PopoverPassThrough;
    message?: MessagePassThrough;
    meterGroup?: MeterGroupPassThrough;
    orderList?: OrderListPassThrough;
    organizationChart?: OrganizationChartPassThrough;
    overlayBadge?: OverlayBadgePassThrough;
    progressBar?: ProgressBarPassThrough;
    progressSpinner?: ProgressSpinnerPassThrough;
    radioButton?: RadioButtonPassThrough;
    rating?: RatingPassThrough;
    virtualScroller?: VirtualScrollerPassThrough;
    scrollPanel?: ScrollPanelPassThrough;
    scrollTop?: ScrollTopPassThrough;
    select?: SelectPassThrough;
    selectButton?: SelectButtonPassThrough;
    skeleton?: SkeletonPassThrough;
    slider?: SliderPassThrough;
    speedDial?: SpeedDialPassThrough;
    splitButton?: SplitButtonPassThrough;
    splitter?: SplitterPassThrough;
    stepper?: StepperPassThrough;
    tabs?: TabsPassThrough;
    tab?: TabPassThrough;
    tabList?: TabListPassThrough;
    tabPanel?: TabPanelPassThrough;
    tabPanels?: TabPanelsPassThrough;
    table?: TablePassThrough;
    tieredMenu?: TieredMenuPassThrough;
    timeline?: TimelinePassThrough;
    tag?: TagPassThrough;
    terminal?: TerminalPassThrough;
    toast?: ToastPassThrough;
    toggleButton?: ToggleButtonPassThrough;
    toggleSwitch?: ToggleSwitchPassThrough;
    toolbar?: ToolbarPassThrough;
    tree?: TreePassThrough;
    treeSelect?: TreeSelectPassThrough;
    treeTable?: TreeTablePassThrough;
    panel?: PanelPassThrough;
    panelMenu?: PanelMenuPassThrough;
    button?: ButtonPassThrough;
    badge?: BadgePassThrough;
    fieldset?: FieldsetPassThrough;
    global?: {
        css?: string;
    };
    [key: string]: any;
}

export type OptimusConfigType = {
    ripple?: boolean;
    overlayAppendTo?: HTMLElement | ElementRef | TemplateRef<any> | string | null | undefined | any;
    /**
     * @deprecated Since v20. Use `inputVariant` instead.
     */
    inputStyle?: 'outlined' | 'filled';
    inputVariant?: 'outlined' | 'filled';
    overlayOptions?: OverlayOptions;
    translation?: Translation;
    /**
     * @experimental
     * This property is not yet implemented. It will be available in a future release.
     */
    unstyled?: boolean;
    zIndex?: ZIndex | null | undefined;
    pt?: GlobalPassThrough | null | undefined;
    ptOptions?: PassThroughOptions | null | undefined;
    filterMatchModeOptions?: any;
} & ThemeConfigType;
