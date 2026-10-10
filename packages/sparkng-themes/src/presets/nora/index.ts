import type { Preset } from '@bdspark/sparkng-themes/types';
import type { NoraBaseDesignTokens } from './base/index.d';

import accordion from '@bdspark/sparkng-themes/nora/accordion';
import autocomplete from '@bdspark/sparkng-themes/nora/autocomplete';
import avatar from '@bdspark/sparkng-themes/nora/avatar';
import badge from '@bdspark/sparkng-themes/nora/badge';
import base from '@bdspark/sparkng-themes/nora/base';
import blockui from '@bdspark/sparkng-themes/nora/blockui';
import breadcrumb from '@bdspark/sparkng-themes/nora/breadcrumb';
import button from '@bdspark/sparkng-themes/nora/button';
import card from '@bdspark/sparkng-themes/nora/card';
import carousel from '@bdspark/sparkng-themes/nora/carousel';
import cascadeselect from '@bdspark/sparkng-themes/nora/cascadeselect';
import checkbox from '@bdspark/sparkng-themes/nora/checkbox';
import chip from '@bdspark/sparkng-themes/nora/chip';
import colorpicker from '@bdspark/sparkng-themes/nora/colorpicker';
import confirmdialog from '@bdspark/sparkng-themes/nora/confirmdialog';
import confirmpopup from '@bdspark/sparkng-themes/nora/confirmpopup';
import contextmenu from '@bdspark/sparkng-themes/nora/contextmenu';
import datatable from '@bdspark/sparkng-themes/nora/datatable';
import dataview from '@bdspark/sparkng-themes/nora/dataview';
import datepicker from '@bdspark/sparkng-themes/nora/datepicker';
import dialog from '@bdspark/sparkng-themes/nora/dialog';
import divider from '@bdspark/sparkng-themes/nora/divider';
import dock from '@bdspark/sparkng-themes/nora/dock';
import drawer from '@bdspark/sparkng-themes/nora/drawer';
import editor from '@bdspark/sparkng-themes/nora/editor';
import fieldset from '@bdspark/sparkng-themes/nora/fieldset';
import fileupload from '@bdspark/sparkng-themes/nora/fileupload';
import floatlabel from '@bdspark/sparkng-themes/nora/floatlabel';
import galleria from '@bdspark/sparkng-themes/nora/galleria';
import iconfield from '@bdspark/sparkng-themes/nora/iconfield';
import iftalabel from '@bdspark/sparkng-themes/nora/iftalabel';
import image from '@bdspark/sparkng-themes/nora/image';
import imagecompare from '@bdspark/sparkng-themes/nora/imagecompare';
import inlinemessage from '@bdspark/sparkng-themes/nora/inlinemessage';
import inplace from '@bdspark/sparkng-themes/nora/inplace';
import inputchips from '@bdspark/sparkng-themes/nora/inputchips';
import inputgroup from '@bdspark/sparkng-themes/nora/inputgroup';
import inputnumber from '@bdspark/sparkng-themes/nora/inputnumber';
import inputotp from '@bdspark/sparkng-themes/nora/inputotp';
import inputtext from '@bdspark/sparkng-themes/nora/inputtext';
import knob from '@bdspark/sparkng-themes/nora/knob';
import listbox from '@bdspark/sparkng-themes/nora/listbox';
import megamenu from '@bdspark/sparkng-themes/nora/megamenu';
import menu from '@bdspark/sparkng-themes/nora/menu';
import menubar from '@bdspark/sparkng-themes/nora/menubar';
import message from '@bdspark/sparkng-themes/nora/message';
import metergroup from '@bdspark/sparkng-themes/nora/metergroup';
import multiselect from '@bdspark/sparkng-themes/nora/multiselect';
import orderlist from '@bdspark/sparkng-themes/nora/orderlist';
import organizationchart from '@bdspark/sparkng-themes/nora/organizationchart';
import overlaybadge from '@bdspark/sparkng-themes/nora/overlaybadge';
import paginator from '@bdspark/sparkng-themes/nora/paginator';
import panel from '@bdspark/sparkng-themes/nora/panel';
import panelmenu from '@bdspark/sparkng-themes/nora/panelmenu';
import password from '@bdspark/sparkng-themes/nora/password';
import picklist from '@bdspark/sparkng-themes/nora/picklist';
import popover from '@bdspark/sparkng-themes/nora/popover';
import progressbar from '@bdspark/sparkng-themes/nora/progressbar';
import progressspinner from '@bdspark/sparkng-themes/nora/progressspinner';
import radiobutton from '@bdspark/sparkng-themes/nora/radiobutton';
import rating from '@bdspark/sparkng-themes/nora/rating';
import ripple from '@bdspark/sparkng-themes/nora/ripple';
import scrollpanel from '@bdspark/sparkng-themes/nora/scrollpanel';
import select from '@bdspark/sparkng-themes/nora/select';
import selectbutton from '@bdspark/sparkng-themes/nora/selectbutton';
import skeleton from '@bdspark/sparkng-themes/nora/skeleton';
import slider from '@bdspark/sparkng-themes/nora/slider';
import speeddial from '@bdspark/sparkng-themes/nora/speeddial';
import splitbutton from '@bdspark/sparkng-themes/nora/splitbutton';
import splitter from '@bdspark/sparkng-themes/nora/splitter';
import stepper from '@bdspark/sparkng-themes/nora/stepper';
import steps from '@bdspark/sparkng-themes/nora/steps';
import tabmenu from '@bdspark/sparkng-themes/nora/tabmenu';
import tabs from '@bdspark/sparkng-themes/nora/tabs';
import tabview from '@bdspark/sparkng-themes/nora/tabview';
import tag from '@bdspark/sparkng-themes/nora/tag';
import terminal from '@bdspark/sparkng-themes/nora/terminal';
import textarea from '@bdspark/sparkng-themes/nora/textarea';
import tieredmenu from '@bdspark/sparkng-themes/nora/tieredmenu';
import timeline from '@bdspark/sparkng-themes/nora/timeline';
import toast from '@bdspark/sparkng-themes/nora/toast';
import togglebutton from '@bdspark/sparkng-themes/nora/togglebutton';
import toggleswitch from '@bdspark/sparkng-themes/nora/toggleswitch';
import toolbar from '@bdspark/sparkng-themes/nora/toolbar';
import tooltip from '@bdspark/sparkng-themes/nora/tooltip';
import tree from '@bdspark/sparkng-themes/nora/tree';
import treeselect from '@bdspark/sparkng-themes/nora/treeselect';
import treetable from '@bdspark/sparkng-themes/nora/treetable';
import virtualscroller from '@bdspark/sparkng-themes/nora/virtualscroller';

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
        datepicker,
        card,
        carousel,
        cascadeselect,
        checkbox,
        chip,
        colorpicker,
        confirmdialog,
        confirmpopup,
        contextmenu,
        dataview,
        datatable,
        dialog,
        divider,
        dock,
        drawer,
        editor,
        fieldset,
        fileupload,
        iftalabel,
        floatlabel,
        galleria,
        iconfield,
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
        popover,
        paginator,
        password,
        panel,
        panelmenu,
        picklist,
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
        splitter,
        splitbutton,
        stepper,
        steps,
        tabmenu,
        tabs,
        tabview,
        textarea,
        tieredmenu,
        tag,
        terminal,
        timeline,
        togglebutton,
        toggleswitch,
        tree,
        treeselect,
        treetable,
        toast,
        toolbar,
        tooltip,
        virtualscroller
    }
} satisfies Preset<NoraBaseDesignTokens>;
