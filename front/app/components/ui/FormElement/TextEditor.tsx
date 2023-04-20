import classNames from 'classnames';
import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { FC, useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';

import { ITextEditor } from './form.interface';
import styles from './form.module.scss';


const TextEditor: FC<ITextEditor> = ({
	onChange,
	value,
	placeholder,
	error,
}) => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const [isUpdated, setIsUpdated] = useState(false);

	useEffect(() => {
		if (isUpdated) return;

		const defaultValue = value || '';
		const blocksFromHtml = htmlToDraft(defaultValue);

		const contentState = ContentState.createFromBlockArray(
			blocksFromHtml.contentBlocks,
			blocksFromHtml.entityMap
		);

		const newEditorState = EditorState.createWithContent(contentState);
		setEditorState(newEditorState);

       
	}, [value, isUpdated]);

    const onEditorStateChange = (editorState: EditorState) => {
        setIsUpdated(true);
        setEditorState(editorState);

        return onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }

	return <div className={classNames(styles.common, styles.editorWrapper, 'animate-fade')}>
        <label>
            <span>{placeholder}</span>
            <div className={styles.wrapper}>
                <Editor 
                toolbarClassName={styles.toolbar} 
                editorClassName={styles.editor} 
                editorState={editorState} 
                onEditorStateChange={onEditorStateChange}
                spellCheck
                toolbar={{
                    options: ['inline', 'blockType', 'list'],
							inline: {
								inDropdown: false,
								className: undefined,
								component: undefined,
								dropdownClassName: undefined,
								options: ['bold', 'italic', 'underline', 'strikethrough'],
							},
							list: {
								inDrodown: false,
								options: ['unordered', 'ordered'],
							},
                }}
                />
            </div>
            {error && <div className={styles.error}>{error.message?.toString()}</div>}
        </label>
    </div>;
};

export default TextEditor;
