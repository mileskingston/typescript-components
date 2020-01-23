import * as React from 'react';
import classNames from 'classnames';
import './ComponentSection.css';

export interface SectionProps {
  title: string,
  children: any,
};

export class ComponentSection extends React.Component<SectionProps> {
  render() {
    return (
      <section className={classNames('section')}>
        <h2 className="section__title">{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
};

export default ComponentSection;
