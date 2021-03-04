import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import plugins from './plugins';
import { alignment, heading, codeBlock, image, indentBlock, table } from './configs';

// import SimpleBox from './simplebox/simplebox';

class ClassicEditor extends ClassicEditorBase {};

// plugins.push(SimpleBox);

ClassicEditor.builtinPlugins = plugins;

ClassicEditor.defaultConfig = {
    toolbar: {
        items: [
            'removeFormat', 'undo', 'redo', /* 'simpleBox', */
            '|',
            'outdent', 'indent',
            '|',
            'heading', 'alignment',
            '|',
            'bold', 'italic', 'underline', 'strikethrough', 'fontColor', 'fontBackgroundColor',
            '|',
            'link', 'bulletedList', 'numberedList', 'todoList',
            '|',
            'blockQuote', 'insertTable', 'mediaEmbed', 'htmlEmbed', 'codeBlock', 'selectAll', 'horizontalLine', 'pageBreak'
        ],
        viewportTopOffset: 50
    },
    blockToolbar: [
        'link', 'paragraph', 'heading1', 'heading2', 'heading3',
        '|',
        'outdent', 'indent',
        '|',
        'bulletedList', 'numberedList',
        '|',
        'selectAll'
    ],
    alignment,
    heading,
    codeBlock,
    image,
    indentBlock,
    table,
    language: 'uk',
    additionalLanguages: 'all'
};

export default ClassicEditor;
