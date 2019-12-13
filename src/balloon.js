import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import plugins from './plugins';

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
            'horizontalLine',
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
            'codeBlock'
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
    codeBlock: {
        languages: [
            { language: 'plaintext', label: 'Plain text' }, // The default language.
            { language: 'c', label: 'C' },
            { language: 'cs', label: 'C#' },
            { language: 'cpp', label: 'C++' },
            { language: 'css', label: 'CSS' },
            { language: 'diff', label: 'Diff' },
            { language: 'xml', label: 'HTML/XML' },
            { language: 'java', label: 'Java' },
            { language: 'javascript', label: 'JavaScript' },
            { language: 'php', label: 'PHP' },
            { language: 'python', label: 'Python' },
            { language: 'ruby', label: 'Ruby' },
            { language: 'typescript', label: 'TypeScript' },
        ]
    },
    image: {
        toolbar: [
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

export default BalloonEditor;
