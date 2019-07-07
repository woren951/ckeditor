// @ckeditor/ckeditor5-indent-block

import CkeditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
// import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
// import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import WatchDog from '@ckeditor/ckeditor5-watchdog/src/watchdog';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

export default class Ckeditor extends CkeditorBase {}

Ckeditor.builtinPlugins = [
    Alignment,
    Autoformat,
    BlockQuote,
    BlockToolbar,
    Bold,
    Code,
    EasyImage,
    Essentials,
    Font,
    Heading,
    HeadingButtonsUI,
    Highlight,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    Indent,
    Italic,
    Link,
    List,
    MediaEmbed,
    Mention,
    Paragraph,
    ParagraphButtonUI,
    PasteFromOffice,
    RemoveFormat,
    Strikethrough,
    Table,
    TableToolbar,
    TextTransformation,
    Underline,
    UploadAdapter,
    WatchDog,
    WordCount
];

Ckeditor.defaultConfig = {
    toolbar: {
        items: [
            'removeFormat',
            'undo',
            'redo',
            '|',
            'outdent',
            'indent',
            '|',
            'heading',
            'alignment',
            '|',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            '|',
            'code',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            '|',
            'blockQuote',
            'insertTable',
            'imageUpload',
            'mediaEmbed'
        ],
        viewportTopOffset: 50
    },
    blockToolbar: [
        'paragraph', 'heading1', 'heading2', 'heading3',
        '|',
        'outdent', 'indent',
        '|',
        'bulletedList', 'numberedList'
    ],
    alignment: {
        options: [
            'left',
            'right',
            'center'
        ]
    },
    image: {
        contentToolbar: [
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'imageTextAlternative'
        ]
    },
    indentBlock: {
        offset: 1,
        unit: 'em'
    },
    table: {
        contentToolbar: [
            'tableColumn',
            'tableRow',
            '|',
            'mergeTableCells'
        ]
    },
    language: 'uk',
    additionalLanguages: 'all'
};
