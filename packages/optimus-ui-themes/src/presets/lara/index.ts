import type { Preset } from '@bdspark/sparkng-themes/types';
import type { LaraBaseDesignTokens } from './base/index.d';

import accordion from '@bdspark/sparkng-themes/lara/accordion';
import autocomplete from '@bdspark/sparkng-themes/lara/autocomplete';
import avatar from '@bdspark/sparkng-themes/lara/avatar';
import badge from '@bdspark/sparkng-themes/lara/badge';
import base from '@bdspark/sparkng-themes/lara/base';
import blockui from '@bdspark/sparkng-themes/lara/blockui';
import breadcrumb from '@bdspark/sparkng-themes/lara/breadcrumb';
import button from '@bdspark/sparkng-themes/lara/button';
import card from '@bdspark/sparkng-themes/lara/card';
import carousel from '@bdspark/sparkng-themes/lara/carousel';
import cascadeselect from '@bdspark/sparkng-themes/lara/cascadeselect';
import checkbox from '@bdspark/sparkng-themes/lara/checkbox';
import chip from '@bdspark/sparkng-themes/lara/chip';
import colorpicker from '@bdspark/sparkng-themes/lara/colorpicker';
import confirmdialog from '@bdspark/sparkng-themes/lara/confirmdialog';
import confirmpopup from '@bdspark/sparkng-themes/lara/confirmpopup';
import contextmenu from '@bdspark/sparkng-themes/lara/contextmenu';
import datatable from '@bdspark/sparkng-themes/lara/datatable';
import dataview from '@bdspark/sparkng-themes/lara/dataview';
import datepicker from '@bdspark/sparkng-themes/lara/datepicker';
import dialog from '@bdspark/sparkng-themes/lara/dialog';
import divider from '@bdspark/sparkng-themes/lara/divider';
import dock from '@bdspark/sparkng-themes/lara/dock';
import drawer from '@bdspark/sparkng-themes/lara/drawer';
import editor from '@bdspark/sparkng-themes/lara/editor';
import fieldset from '@bdspark/sparkng-themes/lara/fieldset';
import fileupload from '@bdspark/sparkng-themes/lara/fileupload';
import floatlabel from '@bdspark/sparkng-themes/lara/floatlabel';
import galleria from '@bdspark/sparkng-themes/lara/galleria';
import iconfield from '@bdspark/sparkng-themes/lara/iconfield';
import iftalabel from '@bdspark/sparkng-themes/lara/iftalabel';
import image from '@bdspark/sparkng-themes/lara/image';
import imagecompare from '@bdspark/sparkng-themes/lara/imagecompare';
import inlinemessage from '@bdspark/sparkng-themes/lara/inlinemessage';
import inplace from '@bdspark/sparkng-themes/lara/inplace';
import inputchips from '@bdspark/sparkng-themes/lara/inputchips';
import inputgroup from '@bdspark/sparkng-themes/lara/inputgroup';
import inputnumber from '@bdspark/sparkng-themes/lara/inputnumber';
import inputotp from '@bdspark/sparkng-themes/lara/inputotp';
import inputtext from '@bdspark/sparkng-themes/lara/inputtext';
import knob from '@bdspark/sparkng-themes/lara/knob';
import listbox from '@bdspark/sparkng-themes/lara/listbox';
import megamenu from '@bdspark/sparkng-themes/lara/megamenu';
import menu from '@bdspark/sparkng-themes/lara/menu';
import menubar from '@bdspark/sparkng-themes/lara/menubar';
import message from '@bdspark/sparkng-themes/lara/message';
import metergroup from '@bdspark/sparkng-themes/lara/metergroup';
import multiselect from '@bdspark/sparkng-themes/lara/multiselect';
import orderlist from '@bdspark/sparkng-themes/lara/orderlist';
import organizationchart from '@bdspark/sparkng-themes/lara/organizationchart';
import overlaybadge from '@bdspark/sparkng-themes/lara/overlaybadge';
import paginator from '@bdspark/sparkng-themes/lara/paginator';
import panel from '@bdspark/sparkng-themes/lara/panel';
import panelmenu from '@bdspark/sparkng-themes/lara/panelmenu';
import password from '@bdspark/sparkng-themes/lara/password';
import picklist from '@bdspark/sparkng-themes/lara/picklist';
import popover from '@bdspark/sparkng-themes/lara/popover';
import progressbar from '@bdspark/sparkng-themes/lara/progressbar';
import progressspinner from '@bdspark/sparkng-themes/lara/progressspinner';
import radiobutton from '@bdspark/sparkng-themes/lara/radiobutton';
import rating from '@bdspark/sparkng-themes/lara/rating';
import ripple from '@bdspark/sparkng-themes/lara/ripple';
import scrollpanel from '@bdspark/sparkng-themes/lara/scrollpanel';
import select from '@bdspark/sparkng-themes/lara/select';
import selectbutton from '@bdspark/sparkng-themes/lara/selectbutton';
import skeleton from '@bdspark/sparkng-themes/lara/skeleton';
import slider from '@bdspark/sparkng-themes/lara/slider';
import speeddial from '@bdspark/sparkng-themes/lara/speeddial';
import splitbutton from '@bdspark/sparkng-themes/lara/splitbutton';
import splitter from '@bdspark/sparkng-themes/lara/splitter';
import stepper from '@bdspark/sparkng-themes/lara/stepper';
import steps from '@bdspark/sparkng-themes/lara/steps';
import tabmenu from '@bdspark/sparkng-themes/lara/tabmenu';
import tabs from '@bdspark/sparkng-themes/lara/tabs';
import tabview from '@bdspark/sparkng-themes/lara/tabview';
import tag from '@bdspark/sparkng-themes/lara/tag';
import terminal from '@bdspark/sparkng-themes/lara/terminal';
import textarea from '@bdspark/sparkng-themes/lara/textarea';
import tieredmenu from '@bdspark/sparkng-themes/lara/tieredmenu';
import timeline from '@bdspark/sparkng-themes/lara/timeline';
import toast from '@bdspark/sparkng-themes/lara/toast';
import togglebutton from '@bdspark/sparkng-themes/lara/togglebutton';
import toggleswitch from '@bdspark/sparkng-themes/lara/toggleswitch';
import toolbar from '@bdspark/sparkng-themes/lara/toolbar';
import tooltip from '@bdspark/sparkng-themes/lara/tooltip';
import tree from '@bdspark/sparkng-themes/lara/tree';
import treeselect from '@bdspark/sparkng-themes/lara/treeselect';
import treetable from '@bdspark/sparkng-themes/lara/treetable';
import virtualscroller from '@bdspark/sparkng-themes/lara/virtualscroller';

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
} satisfies Preset<LaraBaseDesignTokens>;
