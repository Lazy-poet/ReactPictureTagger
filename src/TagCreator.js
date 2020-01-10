import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const TagCreator = ({ resizeRatio, tagToEdit, cancelTag, saveTag, deleteTag }) => {
  console.log(tagToEdit)
  const [tag, setTag] = useState(tagToEdit)
  const inputRef = useRef(null)

  function handleChangeTagName(e) {
    const { value } = e.target
    const updatedTag = Object.assign({}, tag, {name: value})
    setTag(updatedTag)
  }

  function handleSubmit(e) {
    if(e.keyCode == 13) {
      return saveTag()
    }
    if(e.keyCode == 27) {
      return cancelTag()
    }
  }

  useEffect(() => {
    inputRef.current.focus()
  })

  return (
    <div className="reactPictureTagger-newTag"
     style={
       {
          left: tag.left * resizeRatio,
          top: tag.top * resizeRatio,
          width: tag.width * resizeRatio,
          height: tag.height * resizeRatio
       }
     }>
      <input
        id="name"
        className="reactPictureTagger-newTag-name"
        placeholder='Tag name'
        name="name"
        value={tag.name}
        type="text"
        ref={inputRef}
        onChange={handleChangeTagName}
        onKeyDown={handleSubmit}
      />
      <div className="reactPictureTagger-tag-upateControls">
        <a onClick={() => saveTag(tag)} title="Save">
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#00de33" }} />
        </a>
        <a onClick={cancelTag} title="Cancel">
          <FontAwesomeIcon icon={faTimesCircle} style={{ color: "#f8f9fa" }} />
        </a>
        { deleteTag != null ? <a onClick={deleteTag} title="Delete">
          <FontAwesomeIcon icon={faTrash} style={{ color: "#de0000" }} />
        </a>
        : null }
      </div>
    </div>
  )
}

export default TagCreator
