import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount';

class LeadEditor extends BalloonEditorBase {};

LeadEditor.builtinPlugins = [
    Autoformat,
    AutoLink,
    Bold,
    Essentials,
    Italic,
    Link,
    Paragraph,
    PasteFromOffice,
    RemoveFormat,
    Strikethrough,
    TextTransformation,
    Underline,
    WordCount
];

LeadEditor.defaultConfig = {
    toolbar: {
        items: [
            'removeFormat',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'link'
        ]
    },
    ui: {
        viewportOffset: {
            top: 50
        }
    },
    language: 'uk',
    additionalLanguages: 'all'
};

export default LeadEditor;
