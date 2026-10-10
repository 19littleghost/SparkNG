import type { Preset } from '@openng/sparkng-themes/types';
import type { NoraBaseDesignTokens } from './base/index.d';

import accordion from '@openng/sparkng-themes/nora/accordion';
import autocomplete from '@openng/sparkng-themes/nora/autocomplete';
import avatar from '@openng/sparkng-themes/nora/avatar';
import badge from '@openng/sparkng-themes/nora/badge';
import base from '@openng/sparkng-themes/nora/base';
import blockui from '@openng/sparkng-themes/nora/blockui';
import breadcrumb from '@openng/sparkng-themes/nora/breadcrumb';
import button from '@openng/sparkng-themes/nora/button';
import card from '@openng/sparkng-themes/nora/card';
import carousel from '@openng/sparkng-themes/nora/carousel';
import cascadeselect from '@openng/sparkng-themes/nora/cascadeselect';
import checkbox from '@openng/sparkng-themes/nora/checkbox';
import chip from '@openng/sparkng-themes/nora/chip';
import colorpicker from '@openng/sparkng-themes/nora/colorpicker';
import confirmdialog from '@openng/sparkng-themes/nora/confirmdialog';
import confirmpopup from '@openng/sparkng-themes/nora/confirmpopup';
import contextmenu from '@openng/sparkng-themes/nora/contextmenu';
import datatable from '@openng/sparkng-themes/nora/datatable';
import dataview from '@openng/sparkng-themes/nora/dataview';
import datepicker from '@openng/sparkng-themes/nora/datepicker';
import dialog from '@openng/sparkng-themes/nora/dialog';
import divider from '@openng/sparkng-themes/nora/divider';
import dock from '@openng/sparkng-themes/nora/dock';
import drawer from '@openng/sparkng-themes/nora/drawer';
import editor from '@openng/sparkng-themes/nora/editor';
import fieldset from '@openng/sparkng-themes/nora/fieldset';
import fileupload from '@openng/sparkng-themes/nora/fileupload';
import floatlabel from '@openng/sparkng-themes/nora/floatlabel';
import galleria from '@openng/sparkng-themes/nora/galleria';
import iconfield from '@openng/sparkng-themes/nora/iconfield';
import iftalabel from '@openng/sparkng-themes/nora/iftalabel';
import image from '@openng/sparkng-themes/nora/image';
import imagecompare from '@openng/sparkng-themes/nora/imagecompare';
import inlinemessage from '@openng/sparkng-themes/nora/inlinemessage';
import inplace from '@openng/sparkng-themes/nora/inplace';
import inputchips from '@openng/sparkng-themes/nora/inputchips';
import inputgroup from '@openng/sparkng-themes/nora/inputgroup';
import inputnumber from '@openng/sparkng-themes/nora/inputnumber';
import inputotp from '@openng/sparkng-themes/nora/inputotp';
import inputtext from '@openng/sparkng-themes/nora/inputtext';
import knob from '@openng/sparkng-themes/nora/knob';
import listbox from '@openng/sparkng-themes/nora/listbox';
import megamenu from '@openng/sparkng-themes/nora/megamenu';
import menu from '@openng/sparkng-themes/nora/menu';
import menubar from '@openng/sparkng-themes/nora/menubar';
import message from '@openng/sparkng-themes/nora/message';
import metergroup from '@openng/sparkng-themes/nora/metergroup';
import multiselect from '@openng/sparkng-themes/nora/multiselect';
import orderlist from '@openng/sparkng-themes/nora/orderlist';
import organizationchart from '@openng/sparkng-themes/nora/organizationchart';
import overlaybadge from '@openng/sparkng-themes/nora/overlaybadge';
import paginator from '@openng/sparkng-themes/nora/paginator';
import panel from '@openng/sparkng-themes/nora/panel';
import panelmenu from '@openng/sparkng-themes/nora/panelmenu';
import password from '@openng/sparkng-themes/nora/password';
import picklist from '@openng/sparkng-themes/nora/picklist';
import popover from '@openng/sparkng-themes/nora/popover';
import progressbar from '@openng/sparkng-themes/nora/progressbar';
import progressspinner from '@openng/sparkng-themes/nora/progressspinner';
import radiobutton from '@openng/sparkng-themes/nora/radiobutton';
import rating from '@openng/sparkng-themes/nora/rating';
import ripple from '@openng/sparkng-themes/nora/ripple';
import scrollpanel from '@openng/sparkng-themes/nora/scrollpanel';
import select from '@openng/sparkng-themes/nora/select';
import selectbutton from '@openng/sparkng-themes/nora/selectbutton';
import skeleton from '@openng/sparkng-themes/nora/skeleton';
import slider from '@openng/sparkng-themes/nora/slider';
import speeddial from '@openng/sparkng-themes/nora/speeddial';
import splitbutton from '@openng/sparkng-themes/nora/splitbutton';
import splitter from '@openng/sparkng-themes/nora/splitter';
import stepper from '@openng/sparkng-themes/nora/stepper';
import steps from '@openng/sparkng-themes/nora/steps';
import tabmenu from '@openng/sparkng-themes/nora/tabmenu';
import tabs from '@openng/sparkng-themes/nora/tabs';
import tabview from '@openng/sparkng-themes/nora/tabview';
import tag from '@openng/sparkng-themes/nora/tag';
import terminal from '@openng/sparkng-themes/nora/terminal';
import textarea from '@openng/sparkng-themes/nora/textarea';
import tieredmenu from '@openng/sparkng-themes/nora/tieredmenu';
import timeline from '@openng/sparkng-themes/nora/timeline';
import toast from '@openng/sparkng-themes/nora/toast';
import togglebutton from '@openng/sparkng-themes/nora/togglebutton';
import toggleswitch from '@openng/sparkng-themes/nora/toggleswitch';
import toolbar from '@openng/sparkng-themes/nora/toolbar';
import tooltip from '@openng/sparkng-themes/nora/tooltip';
import tree from '@openng/sparkng-themes/nora/tree';
import treeselect from '@openng/sparkng-themes/nora/treeselect';
import treetable from '@openng/sparkng-themes/nora/treetable';
import virtualscroller from '@openng/sparkng-themes/nora/virtualscroller';

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
