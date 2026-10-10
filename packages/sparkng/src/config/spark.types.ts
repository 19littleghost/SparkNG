import type { ElementRef, TemplateRef } from '@angular/core';
import type { OverlayOptions, PassThroughOptions, Translation } from '@bdspark/sparkng/api';
import type { AccordionPassThrough } from '@bdspark/sparkng/types/accordion';
import type { AutoCompletePassThrough } from '@bdspark/sparkng/types/autocomplete';
import type { AvatarPassThrough } from '@bdspark/sparkng/types/avatar';
import type { AvatarGroupPassThrough } from '@bdspark/sparkng/types/avatargroup';
import type { BadgePassThrough } from '@bdspark/sparkng/types/badge';
import type { BlockUIPassThrough } from '@bdspark/sparkng/types/blockui';
import type { BreadcrumbPassThrough } from '@bdspark/sparkng/types/breadcrumb';
import type { ButtonPassThrough } from '@bdspark/sparkng/types/button';
import type { CardPassThrough } from '@bdspark/sparkng/types/card';
import type { CarouselPassThrough } from '@bdspark/sparkng/types/carousel';
import type { CascadeSelectPassThrough } from '@bdspark/sparkng/types/cascadeselect';
import type { CheckboxPassThrough } from '@bdspark/sparkng/types/checkbox';
import type { ChipPassThrough } from '@bdspark/sparkng/types/chip';
import type { ColorPickerPassThrough } from '@bdspark/sparkng/types/colorpicker';
import type { ConfirmDialogPassThrough } from '@bdspark/sparkng/types/confirmdialog';
import type { ConfirmPopupPassThrough } from '@bdspark/sparkng/types/confirmpopup';
import type { DialogPassThrough } from '@bdspark/sparkng/types/dialog';
import type { DividerPassThrough } from '@bdspark/sparkng/types/divider';
import type { DockPassThrough } from '@bdspark/sparkng/types/dock';
import type { DrawerPassThrough } from '@bdspark/sparkng/types/drawer';
import type { EditorPassThrough } from '@bdspark/sparkng/types/editor';
import type { FieldsetPassThrough } from '@bdspark/sparkng/types/fieldset';
import type { FileUploadPassThrough } from '@bdspark/sparkng/types/fileupload';
import type { FloatLabelPassThrough } from '@bdspark/sparkng/types/floatlabel';
import type { FluidPassThrough } from '@bdspark/sparkng/types/fluid';
import type { GalleriaPassThrough } from '@bdspark/sparkng/types/galleria';
import type { IconFieldPassThrough } from '@bdspark/sparkng/types/iconfield';
import type { IftaLabelPassThrough } from '@bdspark/sparkng/types/iftalabel';
import type { ImagePassThrough } from '@bdspark/sparkng/types/image';
import type { ImageComparePassThrough } from '@bdspark/sparkng/types/imagecompare';
import type { InplacePassThrough } from '@bdspark/sparkng/types/inplace';
import type { InputGroupPassThrough } from '@bdspark/sparkng/types/inputgroup';
import type { InputGroupAddonPassThrough } from '@bdspark/sparkng/types/inputgroupaddon';
import type { InputIconPassThrough } from '@bdspark/sparkng/types/inputicon';
import type { InputMaskPassThrough } from '@bdspark/sparkng/types/inputmask';
import type { InputNumberPassThrough } from '@bdspark/sparkng/types/inputnumber';
import type { InputOtpPassThrough } from '@bdspark/sparkng/types/inputotp';
import type { InputTextPassThrough } from '@bdspark/sparkng/types/inputtext';
import type { KnobPassThrough } from '@bdspark/sparkng/types/knob';
import type { MegaMenuPassThrough } from '@bdspark/sparkng/types/megamenu';
import type { MenuPassThrough } from '@bdspark/sparkng/types/menu';
import type { MenubarPassThrough } from '@bdspark/sparkng/types/menubar';
import type { MessagePassThrough } from '@bdspark/sparkng/types/message';
import type { MeterGroupPassThrough } from '@bdspark/sparkng/types/metergroup';
import type { OrderListPassThrough } from '@bdspark/sparkng/types/orderlist';
import type { OrganizationChartPassThrough } from '@bdspark/sparkng/types/organizationchart';
import type { OverlayBadgePassThrough } from '@bdspark/sparkng/types/overlaybadge';
import type { PanelPassThrough } from '@bdspark/sparkng/types/panel';
import type { PanelMenuPassThrough } from '@bdspark/sparkng/types/panelmenu';
import type { PopoverPassThrough } from '@bdspark/sparkng/types/popover';
import type { ProgressBarPassThrough } from '@bdspark/sparkng/types/progressbar';
import type { ProgressSpinnerPassThrough } from '@bdspark/sparkng/types/progressspinner';
import type { RadioButtonPassThrough } from '@bdspark/sparkng/types/radiobutton';
import type { RatingPassThrough } from '@bdspark/sparkng/types/rating';
import type { VirtualScrollerPassThrough } from '@bdspark/sparkng/types/scroller';
import type { ScrollPanelPassThrough } from '@bdspark/sparkng/types/scrollpanel';
import type { ScrollTopPassThrough } from '@bdspark/sparkng/types/scrolltop';
import type { SelectPassThrough } from '@bdspark/sparkng/types/select';
import type { SelectButtonPassThrough } from '@bdspark/sparkng/types/selectbutton';
import type { SkeletonPassThrough } from '@bdspark/sparkng/types/skeleton';
import type { SliderPassThrough } from '@bdspark/sparkng/types/slider';
import type { SpeedDialPassThrough } from '@bdspark/sparkng/types/speeddial';
import type { SplitButtonPassThrough } from '@bdspark/sparkng/types/splitbutton';
import type { SplitterPassThrough } from '@bdspark/sparkng/types/splitter';
import type { StepperPassThrough } from '@bdspark/sparkng/types/stepper';
import type { ColumnFilterPassThrough, TablePassThrough } from '@bdspark/sparkng/types/table';
import type { TabListPassThrough, TabPanelPassThrough, TabPanelsPassThrough, TabPassThrough, TabsPassThrough } from '@bdspark/sparkng/types/tabs';
import type { TagPassThrough } from '@bdspark/sparkng/types/tag';
import type { TerminalPassThrough } from '@bdspark/sparkng/types/terminal';
import type { TieredMenuPassThrough } from '@bdspark/sparkng/types/tieredmenu';
import type { TimelinePassThrough } from '@bdspark/sparkng/types/timeline';
import type { ToastPassThrough } from '@bdspark/sparkng/types/toast';
import type { ToggleButtonPassThrough } from '@bdspark/sparkng/types/togglebutton';
import type { ToggleSwitchPassThrough } from '@bdspark/sparkng/types/toggleswitch';
import type { ToolbarPassThrough } from '@bdspark/sparkng/types/toolbar';
import type { TreePassThrough } from '@bdspark/sparkng/types/tree';
import type { TreeSelectPassThrough } from '@bdspark/sparkng/types/treeselect';
import type { TreeTablePassThrough } from '@bdspark/sparkng/types/treetable';

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

export type SparkConfigType = {
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

/** @deprecated Since v20. Use `SparkConfigType` instead. */
export type OptimusConfigType = SparkConfigType;
