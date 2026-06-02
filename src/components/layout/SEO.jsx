import { useEffect } from 'react'

export function SEO({ title, description }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Prestige Legal Attorneys`
      : 'Prestige Legal Attorneys | Protecting Your Rights. Delivering Justice.'

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc && description) {
      metaDesc.setAttribute('content', description)
    }
  }, [title, description])

  return null
}
