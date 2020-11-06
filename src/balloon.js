import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import plugins from './plugins';
import { alignment, heading, codeBlock, image, indentBlock, table } from './configs';

class BalloonEditor extends BalloonEditorBase {};

BalloonEditor.builtinPlugins = plugins;

BalloonEditor.defaultConfig = {
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
            'imageUpload',
            'mediaEmbed',
            'codeBlock',
            'htmlEmbed',
            'selectAll',
            'horizontalLine',
            'pageBreak'
        ],
        viewportTopOffset: 50
    },
    alignment,
    heading,
    codeBlock,
    image,
    indentBlock,
    table,
    language: 'uk',
    additionalLanguages: 'all'
};

export default BalloonEditor;
