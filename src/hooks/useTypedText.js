import { useEffect, useState } from 'react'

// Cycles through `roles`, typing then deleting each one.
export default function useTypedText(roles, { typeSpeed = 90, deleteSpeed = 50, pause = 1800 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % roles.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1),
          )
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, roles, typeSpeed, deleteSpeed, pause])

  return text
}
