import type { Preset } from '@openng/sparkng-themes/types';
import type { AuraBaseDesignTokens } from './base/index.d';

import accordion from '@openng/sparkng-themes/aura/accordion';
import autocomplete from '@openng/sparkng-themes/aura/autocomplete';
import avatar from '@openng/sparkng-themes/aura/avatar';
import badge from '@openng/sparkng-themes/aura/badge';
import base from '@openng/sparkng-themes/aura/base';
import blockui from '@openng/sparkng-themes/aura/blockui';
import breadcrumb from '@openng/sparkng-themes/aura/breadcrumb';
import button from '@openng/sparkng-themes/aura/button';
import card from '@openng/sparkng-themes/aura/card';
import carousel from '@openng/sparkng-themes/aura/carousel';
import cascadeselect from '@openng/sparkng-themes/aura/cascadeselect';
import checkbox from '@openng/sparkng-themes/aura/checkbox';
import chip from '@openng/sparkng-themes/aura/chip';
import colorpicker from '@openng/sparkng-themes/aura/colorpicker';
import confirmdialog from '@openng/sparkng-themes/aura/confirmdialog';
import confirmpopup from '@openng/sparkng-themes/aura/confirmpopup';
import contextmenu from '@openng/sparkng-themes/aura/contextmenu';
import css from '@openng/sparkng-themes/aura/css';
import datatable from '@openng/sparkng-themes/aura/datatable';
import dataview from '@openng/sparkng-themes/aura/dataview';
import datepicker from '@openng/sparkng-themes/aura/datepicker';
import dialog from '@openng/sparkng-themes/aura/dialog';
import divider from '@openng/sparkng-themes/aura/divider';
import dock from '@openng/sparkng-themes/aura/dock';
import drawer from '@openng/sparkng-themes/aura/drawer';
import editor from '@openng/sparkng-themes/aura/editor';
import fieldset from '@openng/sparkng-themes/aura/fieldset';
import fileupload from '@openng/sparkng-themes/aura/fileupload';
import floatlabel from '@openng/sparkng-themes/aura/floatlabel';
import galleria from '@openng/sparkng-themes/aura/galleria';
import iconfield from '@openng/sparkng-themes/aura/iconfield';
import iftalabel from '@openng/sparkng-themes/aura/iftalabel';
import image from '@openng/sparkng-themes/aura/image';
import imagecompare from '@openng/sparkng-themes/aura/imagecompare';
import inlinemessage from '@openng/sparkng-themes/aura/inlinemessage';
import inplace from '@openng/sparkng-themes/aura/inplace';
import inputchips from '@openng/sparkng-themes/aura/inputchips';
import inputgroup from '@openng/sparkng-themes/aura/inputgroup';
import inputnumber from '@openng/sparkng-themes/aura/inputnumber';
import inputotp from '@openng/sparkng-themes/aura/inputotp';
import inputtext from '@openng/sparkng-themes/aura/inputtext';
import knob from '@openng/sparkng-themes/aura/knob';
import listbox from '@openng/sparkng-themes/aura/listbox';
import megamenu from '@openng/sparkng-themes/aura/megamenu';
import menu from '@openng/sparkng-themes/aura/menu';
import menubar from '@openng/sparkng-themes/aura/menubar';
import message from '@openng/sparkng-themes/aura/message';
import metergroup from '@openng/sparkng-themes/aura/metergroup';
import multiselect from '@openng/sparkng-themes/aura/multiselect';
import orderlist from '@openng/sparkng-themes/aura/orderlist';
import organizationchart from '@openng/sparkng-themes/aura/organizationchart';
import overlaybadge from '@openng/sparkng-themes/aura/overlaybadge';
import paginator from '@openng/sparkng-themes/aura/paginator';
import panel from '@openng/sparkng-themes/aura/panel';
import panelmenu from '@openng/sparkng-themes/aura/panelmenu';
import password from '@openng/sparkng-themes/aura/password';
import picklist from '@openng/sparkng-themes/aura/picklist';
import popover from '@openng/sparkng-themes/aura/popover';
import progressbar from '@openng/sparkng-themes/aura/progressbar';
import progressspinner from '@openng/sparkng-themes/aura/progressspinner';
import radiobutton from '@openng/sparkng-themes/aura/radiobutton';
import rating from '@openng/sparkng-themes/aura/rating';
import ripple from '@openng/sparkng-themes/aura/ripple';
import scrollpanel from '@openng/sparkng-themes/aura/scrollpanel';
import select from '@openng/sparkng-themes/aura/select';
import selectbutton from '@openng/sparkng-themes/aura/selectbutton';
import skeleton from '@openng/sparkng-themes/aura/skeleton';
import slider from '@openng/sparkng-themes/aura/slider';
import speeddial from '@openng/sparkng-themes/aura/speeddial';
import splitbutton from '@openng/sparkng-themes/aura/splitbutton';
import splitter from '@openng/sparkng-themes/aura/splitter';
import stepper from '@openng/sparkng-themes/aura/stepper';
import steps from '@openng/sparkng-themes/aura/steps';
import tabmenu from '@openng/sparkng-themes/aura/tabmenu';
import tabs from '@openng/sparkng-themes/aura/tabs';
import tabview from '@openng/sparkng-themes/aura/tabview';
import tag from '@openng/sparkng-themes/aura/tag';
import terminal from '@openng/sparkng-themes/aura/terminal';
import textarea from '@openng/sparkng-themes/aura/textarea';
import tieredmenu from '@openng/sparkng-themes/aura/tieredmenu';
import timeline from '@openng/sparkng-themes/aura/timeline';
import toast from '@openng/sparkng-themes/aura/toast';
import togglebutton from '@openng/sparkng-themes/aura/togglebutton';
import toggleswitch from '@openng/sparkng-themes/aura/toggleswitch';
import toolbar from '@openng/sparkng-themes/aura/toolbar';
import tooltip from '@openng/sparkng-themes/aura/tooltip';
import tree from '@openng/sparkng-themes/aura/tree';
import treeselect from '@openng/sparkng-themes/aura/treeselect';
import treetable from '@openng/sparkng-themes/aura/treetable';
import virtualscroller from '@openng/sparkng-themes/aura/virtualscroller';

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
