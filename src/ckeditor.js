import InlineEditorBase from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

import autoformatExtra from "./autoformat-extra";

import Autolink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersArrows from '@ckeditor/ckeditor5-special-characters/src/specialcharactersarrows.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import {
	Emoji, EmojiActivity, EmojiFlags, EmojiFood, EmojiNature, EmojiObjects, EmojiPeople,
	EmojiPlaces, EmojiSymbols
} from '@phudak/ckeditor5-emoji/src';

export default class BasicInlineEditor extends InlineEditorBase {}

// Plugins to include in the build.
BasicInlineEditor.builtinPlugins = [
	TextTransformation,
    Autolink,
    Bold,
    Essentials,
    FontColor,
    Italic,
    Link,
    Paragraph,
    RemoveFormat,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Underline,
    WordCount,
    Emoji,
    EmojiPeople,
    EmojiNature,
    EmojiPlaces,
    EmojiFood,
    EmojiActivity,
    EmojiObjects,
    EmojiSymbols,
    EmojiFlags,
];

// Editor configuration.
BasicInlineEditor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'fontColor',
			'link',
			'|',
			'emoji',
			'specialCharacters',
			'|',
			'removeFormat',
			'undo',
			'redo'
		]
	},
	typing: {
		transformations: {
			remove: [
				'quotes',
			],
			extra: [
				...autoformatExtra()
			]
		}
	},
	licenseKey: '',
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
