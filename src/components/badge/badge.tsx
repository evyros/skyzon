import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'skz-badge',
  styleUrl: 'badge.scss',
  shadow: false,
  scoped: true
})
export class SkzBadge {

  @Prop()
  color: string;

  @Prop()
  variant: 'pill' | 'label' | 'bubble' = 'pill';

  render() {
    let classes = 'skz-badge';
    classes += ' skz-badge--' + this.color;
    classes += ' skz-badge--' + this.variant;
    return <div class={classes}>
      <slot></slot>
    </div>;
  }
}
