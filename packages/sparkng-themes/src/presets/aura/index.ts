import type { Preset } from '@bdspark/sparkng-themes/types';
import type { AuraBaseDesignTokens } from './base/index.d';

import accordion from '@bdspark/sparkng-themes/aura/accordion';
import autocomplete from '@bdspark/sparkng-themes/aura/autocomplete';
import avatar from '@bdspark/sparkng-themes/aura/avatar';
import badge from '@bdspark/sparkng-themes/aura/badge';
import base from '@bdspark/sparkng-themes/aura/base';
import blockui from '@bdspark/sparkng-themes/aura/blockui';
import breadcrumb from '@bdspark/sparkng-themes/aura/breadcrumb';
import button from '@bdspark/sparkng-themes/aura/button';
import card from '@bdspark/sparkng-themes/aura/card';
import carousel from '@bdspark/sparkng-themes/aura/carousel';
import cascadeselect from '@bdspark/sparkng-themes/aura/cascadeselect';
import checkbox from '@bdspark/sparkng-themes/aura/checkbox';
import chip from '@bdspark/sparkng-themes/aura/chip';
import colorpicker from '@bdspark/sparkng-themes/aura/colorpicker';
import confirmdialog from '@bdspark/sparkng-themes/aura/confirmdialog';
import confirmpopup from '@bdspark/sparkng-themes/aura/confirmpopup';
import contextmenu from '@bdspark/sparkng-themes/aura/contextmenu';
import css from '@bdspark/sparkng-themes/aura/css';
import datatable from '@bdspark/sparkng-themes/aura/datatable';
import dataview from '@bdspark/sparkng-themes/aura/dataview';
import datepicker from '@bdspark/sparkng-themes/aura/datepicker';
import dialog from '@bdspark/sparkng-themes/aura/dialog';
import divider from '@bdspark/sparkng-themes/aura/divider';
import dock from '@bdspark/sparkng-themes/aura/dock';
import drawer from '@bdspark/sparkng-themes/aura/drawer';
import editor from '@bdspark/sparkng-themes/aura/editor';
import fieldset from '@bdspark/sparkng-themes/aura/fieldset';
import fileupload from '@bdspark/sparkng-themes/aura/fileupload';
import floatlabel from '@bdspark/sparkng-themes/aura/floatlabel';
import galleria from '@bdspark/sparkng-themes/aura/galleria';
import iconfield from '@bdspark/sparkng-themes/aura/iconfield';
import iftalabel from '@bdspark/sparkng-themes/aura/iftalabel';
import image from '@bdspark/sparkng-themes/aura/image';
import imagecompare from '@bdspark/sparkng-themes/aura/imagecompare';
import inlinemessage from '@bdspark/sparkng-themes/aura/inlinemessage';
import inplace from '@bdspark/sparkng-themes/aura/inplace';
import inputchips from '@bdspark/sparkng-themes/aura/inputchips';
import inputgroup from '@bdspark/sparkng-themes/aura/inputgroup';
import inputnumber from '@bdspark/sparkng-themes/aura/inputnumber';
import inputotp from '@bdspark/sparkng-themes/aura/inputotp';
import inputtext from '@bdspark/sparkng-themes/aura/inputtext';
import knob from '@bdspark/sparkng-themes/aura/knob';
import listbox from '@bdspark/sparkng-themes/aura/listbox';
import megamenu from '@bdspark/sparkng-themes/aura/megamenu';
import menu from '@bdspark/sparkng-themes/aura/menu';
import menubar from '@bdspark/sparkng-themes/aura/menubar';
import message from '@bdspark/sparkng-themes/aura/message';
import metergroup from '@bdspark/sparkng-themes/aura/metergroup';
import multiselect from '@bdspark/sparkng-themes/aura/multiselect';
import orderlist from '@bdspark/sparkng-themes/aura/orderlist';
import organizationchart from '@bdspark/sparkng-themes/aura/organizationchart';
import overlaybadge from '@bdspark/sparkng-themes/aura/overlaybadge';
import paginator from '@bdspark/sparkng-themes/aura/paginator';
import panel from '@bdspark/sparkng-themes/aura/panel';
import panelmenu from '@bdspark/sparkng-themes/aura/panelmenu';
import password from '@bdspark/sparkng-themes/aura/password';
import picklist from '@bdspark/sparkng-themes/aura/picklist';
import popover from '@bdspark/sparkng-themes/aura/popover';
import progressbar from '@bdspark/sparkng-themes/aura/progressbar';
import progressspinner from '@bdspark/sparkng-themes/aura/progressspinner';
import radiobutton from '@bdspark/sparkng-themes/aura/radiobutton';
import rating from '@bdspark/sparkng-themes/aura/rating';
import ripple from '@bdspark/sparkng-themes/aura/ripple';
import scrollpanel from '@bdspark/sparkng-themes/aura/scrollpanel';
import select from '@bdspark/sparkng-themes/aura/select';
import selectbutton from '@bdspark/sparkng-themes/aura/selectbutton';
import skeleton from '@bdspark/sparkng-themes/aura/skeleton';
import slider from '@bdspark/sparkng-themes/aura/slider';
import speeddial from '@bdspark/sparkng-themes/aura/speeddial';
import splitbutton from '@bdspark/sparkng-themes/aura/splitbutton';
import splitter from '@bdspark/sparkng-themes/aura/splitter';
import stepper from '@bdspark/sparkng-themes/aura/stepper';
import steps from '@bdspark/sparkng-themes/aura/steps';
import tabmenu from '@bdspark/sparkng-themes/aura/tabmenu';
import tabs from '@bdspark/sparkng-themes/aura/tabs';
import tabview from '@bdspark/sparkng-themes/aura/tabview';
import tag from '@bdspark/sparkng-themes/aura/tag';
import terminal from '@bdspark/sparkng-themes/aura/terminal';
import textarea from '@bdspark/sparkng-themes/aura/textarea';
import tieredmenu from '@bdspark/sparkng-themes/aura/tieredmenu';
import timeline from '@bdspark/sparkng-themes/aura/timeline';
import toast from '@bdspark/sparkng-themes/aura/toast';
import togglebutton from '@bdspark/sparkng-themes/aura/togglebutton';
import toggleswitch from '@bdspark/sparkng-themes/aura/toggleswitch';
import toolbar from '@bdspark/sparkng-themes/aura/toolbar';
import tooltip from '@bdspark/sparkng-themes/aura/tooltip';
import tree from '@bdspark/sparkng-themes/aura/tree';
import treeselect from '@bdspark/sparkng-themes/aura/treeselect';
import treetable from '@bdspark/sparkng-themes/aura/treetable';
import virtualscroller from '@bdspark/sparkng-themes/aura/virtualscroller';

export default {
    ...base,
    components: {
        accordion,
        autocomplete,
        avatar,
        badge,
        blockui,
        breadcrumb,
        button,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        datatable,
        dataview,
        datepicker,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        floatlabel,
        galleria,
        iconfield,
        iftalabel,
        image,
        imagecompare,
        inlinemessage,
        inplace,
        inputchips,
        inputgroup,
        inputnumber,
        inputotp,
        inputtext,
        knob,
        listbox,
        megamenu,
        menu,
        menubar,
        message,
        metergroup,
        multiselect,
        orderlist,
        organizationchart,
        overlaybadge,
        paginator,
        panel,
        panelmenu,
        password,
        picklist,
        popover,
        progressbar,
        progressspinner,
        radiobutton,
        rating,
        ripple,
        scrollpanel,
        select,
        selectbutton,
        skeleton,
        slider,
        speeddial,
        splitbutton,
        splitter,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        tag,
        terminal,
        textarea,
        tieredmenu,
        timeline,
        toast,
        togglebutton,
        toggleswitch,
        toolbar,
        tooltip,
        tree,
        treeselect,
        treetable,
        virtualscroller
    },
    css
} satisfies Preset<AuraBaseDesignTokens>;
