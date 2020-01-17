import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import plugins from './plugins';

class ClassicEditor extends ClassicEditorBase {};

ClassicEditor.builtinPlugins = plugins;

ClassicEditor.defaultConfig = {
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
    blockToolbar: [
        'link', 'paragraph', 'heading1', 'heading2', 'heading3',
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
    heading: {
        options: [
            {
                model: 'paragraph',
                title: 'Paragraph'
            },
            {
                model: 'heading1',
                view: 'h2',
                title: 'Heading 2'
            },
            {
                model: 'heading2',
                view: 'h3',
                title: 'Heading 3'
            },
            {
                model: 'heading3',
                view: 'h4',
                title: 'Heading 4'
            }
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

export default ClassicEditor;
