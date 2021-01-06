import React from "react";

interface UrlPropsInterface extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  href?: string;
  external?: boolean;
}

export class Url extends React.Component<UrlPropsInterface, any> {
  render() {
    const attributes: any = {};

    if (this.props.external) {
      attributes.target = "_blank";
      attributes.rel = "nofollow noopener";
    }

    const href = this.props.href || this.props.children;

    return <a href={href} {...attributes}>
      {this.props.children}
    </a>;
  }
}
