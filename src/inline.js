import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import plugins from './plugins';
import { alignment, heading, codeBlock, image, indentBlock, table } from './configs';

class InlineEditor extends InlineEditorBase {};

InlineEditor.builtinPlugins = plugins;

InlineEditor.defaultConfig = {
    removePlugins: [ 'BlockToolbar' ],
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
            'fontColor',
            'fontBackgroundColor',
            '|',
            'link',
            'bulletedList',
            'numberedList',
            'todoList',
            '|',
            'blockQuote',
            'insertTable',
            'mediaEmbed',
            'htmlEmbed',
            'codeBlock',
            'selectAll',
            'horizontalLine',
            'pageBreak'
        ]
    },
    alignment,
    heading,
    codeBlock,
    image,
    indentBlock,
    table,
    ui: {
        viewportOffset: {
            top: 50
        }
    },
    language: 'uk',
    additionalLanguages: 'all'
};

export default InlineEditor;
