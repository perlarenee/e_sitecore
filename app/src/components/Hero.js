import React from 'react';
import { Text, RichText, Link } from '@sitecore-jss/sitecore-jss-react';

const Hero = ({ fields, rendering }) => {
  const backgroundSrc = fields?.background?.value?.src;
  const style = backgroundSrc ? { backgroundImage: `url(${backgroundSrc})` } : undefined;

  return (
    <section className="hero p-3" style={style} id={`i${rendering.uid.replace(/[{}]/g, '')}`}>
      <Text field={fields.heading} tag="h3" className="text-white" />
      <RichText className="contentDescription text-white" field={fields.content} />
      <Link field={fields.cta} className="btn btn-primary" />
    </section>
  );
};

export default Hero;
