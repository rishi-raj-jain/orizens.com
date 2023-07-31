import React from "react"
import { useStaticQuery, graphql } from "gatsby"

export default function Socials({ size = 2 }) {
  const data = useStaticQuery(graphql`
    query SocialsQuery {
      site {
        siteMetadata {
          social {
            twitter
            github
            npm
            linkedin
          }
        }
      }
    }
  `)
  const { social } = data.site.siteMetadata

  return (
    <>
      {[
        { icon: "twitter", href: `//twitter.com/${social.twitter}` },
        { icon: "github", href: `//github.com/${social.github}` },
        { icon: "linkedin", href: `//linkedin.com/in/${social.linkedin}` },
        {
          icon: "npm",
          href: `//www.npmjs.com/~${social.npm}`,
          tooltip: "npm pacakges",
        },
        {
          icon: "book",
          iconType: "las",
          href: `//link.springer.com/book/10.1007/978-1-4842-2620-9`,
          tooltip: "My Angular & NgRx Reactive Programming Book",
        },
      ].map(({ icon, href, text, tooltip, iconType }) => (
        <a
          key={`footer-link-${href}`}
          href={href}
          className="social-link link-hover-no-line"
          target="_blank"
          rel="noopener noreferrer"
          title={tooltip || icon}
        >
          {icon && (
            <span
              className={`${iconType || "lab"} la-${icon} is-size-${size}`}
            ></span>
          )}
          {text && text}
        </a>
      ))}
    </>
  )
}
