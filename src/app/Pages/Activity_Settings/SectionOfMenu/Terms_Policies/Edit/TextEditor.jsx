'use client'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor),
  { ssr: false }
)

export default function TextEditor() {
  const editorRef = useRef(null)

  const handleSave = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }

  return (
    <div className="p-4">
      <Editor
        apiKey="4bmv1698mblg6jukeqw8uwcyrqq0kll92bfg6fzkae89pd4e"
        onInit={(evt, editor) => (editorRef.current = editor)}
        init={{
          height: 400,
          menubar: false,
          directionality: 'rtl', 
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image',
            'charmap', 'preview', 'searchreplace',
            'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'wordcount'
          ],
          toolbar:
            'undo redo | bold italic underline | alignleft aligncenter alignright | bullist numlist | code'
        }}
      />

      {/* <button
        onClick={handleSave}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Content
      </button> */}
    </div>
  )
}
