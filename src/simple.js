import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

class SimpleEditor extends ClassicEditor {};

SimpleEditor.builtinPlugins = [
    Autoformat,
    AutoLink,
    Bold,
    Essentials,
    Italic,
    Link,
    List,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    Strikethrough,
    TextTransformation,
    Underline,
    WordCount
];

SimpleEditor.defaultConfig = {
    toolbar: {
        items: [
            'removeFormat',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'link',
            'bulletedList',
            'numberedList'
        ],
        viewportTopOffset: 50
    },
    language: 'uk',
    additionalLanguages: 'all'
};

export default SimpleEditor;
