import type { Preset } from '@bdspark/sparkng-themes/types';
import type { MaterialBaseDesignTokens } from './base/index.d';

import accordion from '@bdspark/sparkng-themes/material/accordion';
import autocomplete from '@bdspark/sparkng-themes/material/autocomplete';
import avatar from '@bdspark/sparkng-themes/material/avatar';
import badge from '@bdspark/sparkng-themes/material/badge';
import base from '@bdspark/sparkng-themes/material/base';
import blockui from '@bdspark/sparkng-themes/material/blockui';
import breadcrumb from '@bdspark/sparkng-themes/material/breadcrumb';
import button from '@bdspark/sparkng-themes/material/button';
import card from '@bdspark/sparkng-themes/material/card';
import carousel from '@bdspark/sparkng-themes/material/carousel';
import cascadeselect from '@bdspark/sparkng-themes/material/cascadeselect';
import checkbox from '@bdspark/sparkng-themes/material/checkbox';
import chip from '@bdspark/sparkng-themes/material/chip';
import colorpicker from '@bdspark/sparkng-themes/material/colorpicker';
import confirmdialog from '@bdspark/sparkng-themes/material/confirmdialog';
import confirmpopup from '@bdspark/sparkng-themes/material/confirmpopup';
import contextmenu from '@bdspark/sparkng-themes/material/contextmenu';
import datatable from '@bdspark/sparkng-themes/material/datatable';
import dataview from '@bdspark/sparkng-themes/material/dataview';
import datepicker from '@bdspark/sparkng-themes/material/datepicker';
import dialog from '@bdspark/sparkng-themes/material/dialog';
import divider from '@bdspark/sparkng-themes/material/divider';
import dock from '@bdspark/sparkng-themes/material/dock';
import drawer from '@bdspark/sparkng-themes/material/drawer';
import editor from '@bdspark/sparkng-themes/material/editor';
import fieldset from '@bdspark/sparkng-themes/material/fieldset';
import fileupload from '@bdspark/sparkng-themes/material/fileupload';
import floatlabel from '@bdspark/sparkng-themes/material/floatlabel';
import galleria from '@bdspark/sparkng-themes/material/galleria';
import iconfield from '@bdspark/sparkng-themes/material/iconfield';
import iftalabel from '@bdspark/sparkng-themes/material/iftalabel';
import image from '@bdspark/sparkng-themes/material/image';
import imagecompare from '@bdspark/sparkng-themes/material/imagecompare';
import inlinemessage from '@bdspark/sparkng-themes/material/inlinemessage';
import inplace from '@bdspark/sparkng-themes/material/inplace';
import inputchips from '@bdspark/sparkng-themes/material/inputchips';
import inputgroup from '@bdspark/sparkng-themes/material/inputgroup';
import inputnumber from '@bdspark/sparkng-themes/material/inputnumber';
import inputotp from '@bdspark/sparkng-themes/material/inputotp';
import inputtext from '@bdspark/sparkng-themes/material/inputtext';
import knob from '@bdspark/sparkng-themes/material/knob';
import listbox from '@bdspark/sparkng-themes/material/listbox';
import megamenu from '@bdspark/sparkng-themes/material/megamenu';
import menu from '@bdspark/sparkng-themes/material/menu';
import menubar from '@bdspark/sparkng-themes/material/menubar';
import message from '@bdspark/sparkng-themes/material/message';
import metergroup from '@bdspark/sparkng-themes/material/metergroup';
import multiselect from '@bdspark/sparkng-themes/material/multiselect';
import orderlist from '@bdspark/sparkng-themes/material/orderlist';
import organizationchart from '@bdspark/sparkng-themes/material/organizationchart';
import overlaybadge from '@bdspark/sparkng-themes/material/overlaybadge';
import paginator from '@bdspark/sparkng-themes/material/paginator';
import panel from '@bdspark/sparkng-themes/material/panel';
import panelmenu from '@bdspark/sparkng-themes/material/panelmenu';
import password from '@bdspark/sparkng-themes/material/password';
import picklist from '@bdspark/sparkng-themes/material/picklist';
import popover from '@bdspark/sparkng-themes/material/popover';
import progressbar from '@bdspark/sparkng-themes/material/progressbar';
import progressspinner from '@bdspark/sparkng-themes/material/progressspinner';
import radiobutton from '@bdspark/sparkng-themes/material/radiobutton';
import rating from '@bdspark/sparkng-themes/material/rating';
import ripple from '@bdspark/sparkng-themes/material/ripple';
import scrollpanel from '@bdspark/sparkng-themes/material/scrollpanel';
import select from '@bdspark/sparkng-themes/material/select';
import selectbutton from '@bdspark/sparkng-themes/material/selectbutton';
import skeleton from '@bdspark/sparkng-themes/material/skeleton';
import slider from '@bdspark/sparkng-themes/material/slider';
import speeddial from '@bdspark/sparkng-themes/material/speeddial';
import splitbutton from '@bdspark/sparkng-themes/material/splitbutton';
import splitter from '@bdspark/sparkng-themes/material/splitter';
import stepper from '@bdspark/sparkng-themes/material/stepper';
import steps from '@bdspark/sparkng-themes/material/steps';
import tabmenu from '@bdspark/sparkng-themes/material/tabmenu';
import tabs from '@bdspark/sparkng-themes/material/tabs';
import tabview from '@bdspark/sparkng-themes/material/tabview';
import tag from '@bdspark/sparkng-themes/material/tag';
import terminal from '@bdspark/sparkng-themes/material/terminal';
import textarea from '@bdspark/sparkng-themes/material/textarea';
import tieredmenu from '@bdspark/sparkng-themes/material/tieredmenu';
import timeline from '@bdspark/sparkng-themes/material/timeline';
import toast from '@bdspark/sparkng-themes/material/toast';
import togglebutton from '@bdspark/sparkng-themes/material/togglebutton';
import toggleswitch from '@bdspark/sparkng-themes/material/toggleswitch';
import toolbar from '@bdspark/sparkng-themes/material/toolbar';
import tooltip from '@bdspark/sparkng-themes/material/tooltip';
import tree from '@bdspark/sparkng-themes/material/tree';
import treeselect from '@bdspark/sparkng-themes/material/treeselect';
import treetable from '@bdspark/sparkng-themes/material/treetable';
import virtualscroller from '@bdspark/sparkng-themes/material/virtualscroller';

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
} satisfies Preset<MaterialBaseDesignTokens>;
