import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import plugins from './plugins';

class InlineEditor extends InlineEditorBase {};

InlineEditor.builtinPlugins = plugins;

InlineEditor.defaultConfig = {
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
            'todoList',
            '|',
            'blockQuote',
            'insertTable',
            'imageUpload',
            'mediaEmbed'
        ],
        viewportTopOffset: 50
    },
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

export default InlineEditor;
