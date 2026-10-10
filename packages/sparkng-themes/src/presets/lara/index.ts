import type { Preset } from '@openng/sparkng-themes/types';
import type { LaraBaseDesignTokens } from './base/index.d';

import accordion from '@openng/sparkng-themes/lara/accordion';
import autocomplete from '@openng/sparkng-themes/lara/autocomplete';
import avatar from '@openng/sparkng-themes/lara/avatar';
import badge from '@openng/sparkng-themes/lara/badge';
import base from '@openng/sparkng-themes/lara/base';
import blockui from '@openng/sparkng-themes/lara/blockui';
import breadcrumb from '@openng/sparkng-themes/lara/breadcrumb';
import button from '@openng/sparkng-themes/lara/button';
import card from '@openng/sparkng-themes/lara/card';
import carousel from '@openng/sparkng-themes/lara/carousel';
import cascadeselect from '@openng/sparkng-themes/lara/cascadeselect';
import checkbox from '@openng/sparkng-themes/lara/checkbox';
import chip from '@openng/sparkng-themes/lara/chip';
import colorpicker from '@openng/sparkng-themes/lara/colorpicker';
import confirmdialog from '@openng/sparkng-themes/lara/confirmdialog';
import confirmpopup from '@openng/sparkng-themes/lara/confirmpopup';
import contextmenu from '@openng/sparkng-themes/lara/contextmenu';
import datatable from '@openng/sparkng-themes/lara/datatable';
import dataview from '@openng/sparkng-themes/lara/dataview';
import datepicker from '@openng/sparkng-themes/lara/datepicker';
import dialog from '@openng/sparkng-themes/lara/dialog';
import divider from '@openng/sparkng-themes/lara/divider';
import dock from '@openng/sparkng-themes/lara/dock';
import drawer from '@openng/sparkng-themes/lara/drawer';
import editor from '@openng/sparkng-themes/lara/editor';
import fieldset from '@openng/sparkng-themes/lara/fieldset';
import fileupload from '@openng/sparkng-themes/lara/fileupload';
import floatlabel from '@openng/sparkng-themes/lara/floatlabel';
import galleria from '@openng/sparkng-themes/lara/galleria';
import iconfield from '@openng/sparkng-themes/lara/iconfield';
import iftalabel from '@openng/sparkng-themes/lara/iftalabel';
import image from '@openng/sparkng-themes/lara/image';
import imagecompare from '@openng/sparkng-themes/lara/imagecompare';
import inlinemessage from '@openng/sparkng-themes/lara/inlinemessage';
import inplace from '@openng/sparkng-themes/lara/inplace';
import inputchips from '@openng/sparkng-themes/lara/inputchips';
import inputgroup from '@openng/sparkng-themes/lara/inputgroup';
import inputnumber from '@openng/sparkng-themes/lara/inputnumber';
import inputotp from '@openng/sparkng-themes/lara/inputotp';
import inputtext from '@openng/sparkng-themes/lara/inputtext';
import knob from '@openng/sparkng-themes/lara/knob';
import listbox from '@openng/sparkng-themes/lara/listbox';
import megamenu from '@openng/sparkng-themes/lara/megamenu';
import menu from '@openng/sparkng-themes/lara/menu';
import menubar from '@openng/sparkng-themes/lara/menubar';
import message from '@openng/sparkng-themes/lara/message';
import metergroup from '@openng/sparkng-themes/lara/metergroup';
import multiselect from '@openng/sparkng-themes/lara/multiselect';
import orderlist from '@openng/sparkng-themes/lara/orderlist';
import organizationchart from '@openng/sparkng-themes/lara/organizationchart';
import overlaybadge from '@openng/sparkng-themes/lara/overlaybadge';
import paginator from '@openng/sparkng-themes/lara/paginator';
import panel from '@openng/sparkng-themes/lara/panel';
import panelmenu from '@openng/sparkng-themes/lara/panelmenu';
import password from '@openng/sparkng-themes/lara/password';
import picklist from '@openng/sparkng-themes/lara/picklist';
import popover from '@openng/sparkng-themes/lara/popover';
import progressbar from '@openng/sparkng-themes/lara/progressbar';
import progressspinner from '@openng/sparkng-themes/lara/progressspinner';
import radiobutton from '@openng/sparkng-themes/lara/radiobutton';
import rating from '@openng/sparkng-themes/lara/rating';
import ripple from '@openng/sparkng-themes/lara/ripple';
import scrollpanel from '@openng/sparkng-themes/lara/scrollpanel';
import select from '@openng/sparkng-themes/lara/select';
import selectbutton from '@openng/sparkng-themes/lara/selectbutton';
import skeleton from '@openng/sparkng-themes/lara/skeleton';
import slider from '@openng/sparkng-themes/lara/slider';
import speeddial from '@openng/sparkng-themes/lara/speeddial';
import splitbutton from '@openng/sparkng-themes/lara/splitbutton';
import splitter from '@openng/sparkng-themes/lara/splitter';
import stepper from '@openng/sparkng-themes/lara/stepper';
import steps from '@openng/sparkng-themes/lara/steps';
import tabmenu from '@openng/sparkng-themes/lara/tabmenu';
import tabs from '@openng/sparkng-themes/lara/tabs';
import tabview from '@openng/sparkng-themes/lara/tabview';
import tag from '@openng/sparkng-themes/lara/tag';
import terminal from '@openng/sparkng-themes/lara/terminal';
import textarea from '@openng/sparkng-themes/lara/textarea';
import tieredmenu from '@openng/sparkng-themes/lara/tieredmenu';
import timeline from '@openng/sparkng-themes/lara/timeline';
import toast from '@openng/sparkng-themes/lara/toast';
import togglebutton from '@openng/sparkng-themes/lara/togglebutton';
import toggleswitch from '@openng/sparkng-themes/lara/toggleswitch';
import toolbar from '@openng/sparkng-themes/lara/toolbar';
import tooltip from '@openng/sparkng-themes/lara/tooltip';
import tree from '@openng/sparkng-themes/lara/tree';
import treeselect from '@openng/sparkng-themes/lara/treeselect';
import treetable from '@openng/sparkng-themes/lara/treetable';
import virtualscroller from '@openng/sparkng-themes/lara/virtualscroller';

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
